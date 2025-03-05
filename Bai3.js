let correctPassword = "12345";
let passwordInput;

passwordInput = prompt("Mời bạn nhập mật khẩu:");
if (passwordInput !== correctPassword) {
  alert("Mật khẩu không đúng");
} else {
  alert("Đăng nhập thành công");
}
