let number = parseInt(prompt("Nhập vào một số nguyên:"));

if (isNaN(number) || number < 2) {
    alert("Vui lòng nhập một số nguyên lớn hơn hoặc bằng 2");
} else {
    let isPrime = true; 

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert("Là số nguyên tố");
    } else {
        alert("Không phải là số nguyên tố");
    }
}