let P = +prompt("Nhập số tiền gửi ban đầu :");
let r = +prompt("Nhập lãi xuất hàng tháng (%): ") / 100;
let n = +prompt("Nhập số tháng gửi: ");

if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r < 0 || n <= 0) {
    alert("Vui lòng nhập số hợp lệ!");
} else {
    let A = P * ((1 + r) ** n);
    let lai = A - P;

    alert(`Tiền lãi: ${lai.toFixed(3)}`);
    alert(`Tiền nhận được: ${A.toFixed(3)}`);
}