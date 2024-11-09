// ฟังก์ชันในการแสดงส่วนที่เลือกโดยแอดมิน (เช่น แก้ไขข้อมูลผู้ใช้)
function showSection(section) {
    // ซ่อนทุกส่วนก่อน
    document.getElementById("editUserSection").style.display = "none";
    document.getElementById("editCourseSection").style.display = "none";
    document.getElementById("editFaceDataSection").style.display = "none";
    
    // แสดงส่วนที่เลือก
    document.getElementById(section).style.display = "block";
}

// เมื่อคลิกที่เมนูให้แสดงส่วนที่ต้องการ
document.getElementById("editUserBtn").addEventListener("click", function() {
    showSection("editUserSection");
});

document.getElementById("editCourseBtn").addEventListener("click", function() {
    showSection("editCourseSection");
});

document.getElementById("editFaceDataBtn").addEventListener("click", function() {
    showSection("editFaceDataSection");
});
