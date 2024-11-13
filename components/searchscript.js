function searchUser() {
    const searchTerm = document.getElementById('search').value;
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // ลบผลลัพธ์การค้นหาก่อนหน้า
  
    // ตัวอย่างข้อมูลผู้ใช้
    const users = [
      { name: 'Admin 1', username: 'admin1' },
      { name: 'Teacher 1', username: 'teacher1' },
      { name: 'Student 1', username: 'student1' },
      { name: 'Student 2', username: 'student2' },
    ];
  
    // ค้นหาผู้ใช้จากชื่อ
    const results = users.filter(user => user.username.includes(searchTerm));
  
    // แสดงผลลัพธ์การค้นหา
    if (results.length > 0) {
      results.forEach(user => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${user.name} (${user.username}) 
          <button onclick="editUser('${user.username}')">แก้ไข</button>
          <button class="delete-btn" onclick="deleteUser('${user.username}')">ลบ</button>`;
        userList.appendChild(listItem);
      });
    } else {
      const noResults = document.createElement('li');
      noResults.textContent = 'ไม่พบผู้ใช้ที่ค้นหา';
      userList.appendChild(noResults);
    }
  }
  
  function editUser(username) {
    // ทำการแก้ไขข้อมูลผู้ใช้ (แสดงฟอร์ม หรือเปลี่ยนหน้าไปยังหน้าที่แก้ไข)
    alert('แก้ไขข้อมูลของ ' + username);
  }
  
  function deleteUser(username) {
    // ลบข้อมูลผู้ใช้
    if (confirm('คุณต้องการลบผู้ใช้ ' + username + ' หรือไม่?')) {
      alert('ลบผู้ใช้ ' + username);
      // ในการลบข้อมูลจริง ๆ สามารถทำการเรียก API หรือการจัดการฐานข้อมูลที่นี่
    }
  }
  