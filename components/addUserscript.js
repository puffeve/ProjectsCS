// เมื่อคลิกปุ่ม 'ครู'
document.getElementById('teacherBtn').addEventListener('click', function() {
    document.getElementById('role').value = 'teacher'; // เซ็ตค่าเป็น 'teacher'
    toggleButtonStyle(); // เปลี่ยนสไตล์ปุ่มที่เลือก
});

// เมื่อคลิกปุ่ม 'นักเรียน'
document.getElementById('studentBtn').addEventListener('click', function() {
    document.getElementById('role').value = 'student'; // เซ็ตค่าเป็น 'student'
    toggleButtonStyle(); // เปลี่ยนสไตล์ปุ่มที่เลือก
});

// ฟังก์ชันในการปรับสไตล์ปุ่ม
function toggleButtonStyle() {
    // รีเซ็ตสไตล์ของปุ่มทั้งหมด
    document.getElementById('teacherBtn').classList.remove('selected');
    document.getElementById('studentBtn').classList.remove('selected');
    
    // เปลี่ยนสไตล์ปุ่มที่เลือก
    if (document.getElementById('role').value === 'teacher') {
        document.getElementById('teacherBtn').classList.add('selected');
    } else if (document.getElementById('role').value === 'student') {
        document.getElementById('studentBtn').classList.add('selected');
    }
}

// เมื่อผู้ใช้ส่งฟอร์ม
document.getElementById('addUserForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้าเพจ

    const formData = new FormData(this); // เก็บข้อมูลในฟอร์ม

    fetch('add_user.php', {
        method: 'POST',
        body: formData // ส่งข้อมูลฟอร์ม
    })
    .then(response => response.json()) // รับข้อมูลจาก PHP (สมมุติว่า PHP ส่งกลับเป็น JSON)
    .then(data => {
        if (data.success) {
            alert('บัญชีผู้ใช้ถูกเพิ่มเรียบร้อย');
            document.getElementById('addUserForm').reset(); // รีเซ็ตฟอร์ม
        } else {
            alert('เกิดข้อผิดพลาด: ' + data.message); // แสดงข้อความผิดพลาด
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('เกิดข้อผิดพลาดในการส่งข้อมูล');
    });
});

});
