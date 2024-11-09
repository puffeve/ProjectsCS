<?php
session_start();

// ข้อมูลการเชื่อมต่อฐานข้อมูล
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_system";

// สร้างการเชื่อมต่อฐานข้อมูล
$conn = new mysqli($servername, $username, $password, $dbname);

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("การเชื่อมต่อล้มเหลว: " . $conn->connect_error);
}

// รับข้อมูลจากฟอร์ม login
$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'];
$password = $data['password'];

// ค้นหาผู้ใช้จากฐานข้อมูล
$sql = "SELECT * FROM users WHERE username = ? AND password = MD5(?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    $_SESSION['user'] = $user;

    // นำทางผู้ใช้ไปยังหน้า dashboard ตาม role
    if ($user['role'] === 'admin') {
        header('Location: /admin-dashboard.html');
    } elseif ($user['role'] === 'teacher') {
        header('Location: /teacher-dashboard.html');
    } elseif ($user['role'] === 'student') {
        header('Location: /student-dashboard.html');
    }
} else {
    // ข้อมูลล็อกอินไม่ถูกต้อง
    echo json_encode(["message" => "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"]);
}

$stmt->close();
$conn->close();
?>
