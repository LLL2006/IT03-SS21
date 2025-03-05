let day = +prompt("Nhập ngày sinh (1-31):");
let month = +prompt("Nhập tháng sinh (1-12):");
let zodiac = "";

if (isNaN(day) || isNaN(month) || day < 1 || day > 31 || month < 1 || month > 12) {
    alert("Vui lòng nhập ngày tháng hợp lệ!");
} else {
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        zodiac = "Bảo Bình";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        zodiac = "Song Ngư";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        zodiac = "Bạch Dương";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        zodiac = "Kim Ngưu";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        zodiac = "Song Tử";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        zodiac = "Cự Giải";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        zodiac = "Sư Tử";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        zodiac = "Xử Nữ";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        zodiac = "Thiên Bình";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        zodiac = "Bọ Cạp";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        zodiac = "Nhân Mã";
    } else {
        zodiac = "Ma Kết";
    }

    alert(`Cung hoàng đạo của bạn là: ${zodiac}`);
}
