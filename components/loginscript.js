document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // ป้องกันไม่ให้ฟอร์มส่งแบบปกติ

  // รับค่าจากฟอร์ม
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // ตรวจสอบว่าผู้ใช้กรอกข้อมูลครบถ้วนหรือไม่
  if (username === '' || password === '') {
      alert('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
      return;
  }

  // สร้างอ็อบเจ็กต์ข้อมูลที่จะส่งไปที่เซิร์ฟเวอร์
  const loginData = {
      username: username,
      password: password
  };

  // ส่งข้อมูลไปยังเซิร์ฟเวอร์ผ่าน API (ใช้ fetch)
  fetch('login.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData) // ส่งข้อมูลเป็น JSON
  })
  .then(response => response.json()) // แปลงข้อมูลที่ได้รับกลับมาเป็น JSON
  .then(data => {
      // เช็คผลลัพธ์จากเซิร์ฟเวอร์
      if (data.success) {
          // ถ้าล็อกอินสำเร็จ เช็คบทบาทและเปลี่ยนเส้นทาง
          if (data.role === 'admin') {
              window.location.href = 'admin_dashboard.php'; // หน้าแอดมิน
          } else if (data.role === 'teacher') {
              window.location.href = 'teacher_dashboard.php'; // หน้าครู
          } else if (data.role === 'student') {
              window.location.href = 'student_dashboard.php'; // หน้านักเรียน
          }
      } else {
          // ถ้าล็อกอินไม่สำเร็จ แสดงข้อความผิดพลาด
          alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      }
  })
  .catch(error => {
      console.error('เกิดข้อผิดพลาด:', error);
      alert('มีปัญหาในการเชื่อมต่อกับเซิร์ฟเวอร์');
  });
});

