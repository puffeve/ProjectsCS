document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (response.redirected) {
        window.location.href = response.url;  // นำผู้ใช้ไปยังหน้า dashboard ที่เหมาะสม
      } else {
        const result = await response.json();
        document.getElementById('error-message').textContent = result.message || 'Login failed';
      }
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('error-message').textContent = 'เกิดข้อผิดพลาดในการเชื่อมต่อ';
    }
  });
  