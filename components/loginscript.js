document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.querySelector(".error-message");

  form.addEventListener("submit", function (event) {
      // ล้างข้อความข้อผิดพลาดก่อน
      errorMessage.textContent = "";

      // ตรวจสอบว่าไม่ได้เว้นช่อง username และ password ว่างเปล่า
      if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
          errorMessage.textContent = "กรุณากรอกข้อมูลให้ครบถ้วน";
          event.preventDefault(); // ยกเลิกการส่งฟอร์ม
      }
  });
});
