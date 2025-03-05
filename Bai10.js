let n = +prompt("Nhập số lượng số nguyên tố cần hiển thị:");

if (isNaN(n) || n <= 0) {
    alert("Vui lòng nhập một số nguyên dương");
} else {
    let count = 0;
    let num = 2;
    let primeNumbers = [];

    while (count < n) {
        let isPrime = true;

        if (num < 2) {
            isPrime = false;
        } else {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            primeNumbers.push(num);
            count++;
        }
        num++;
    }

    alert(`Danh sách ${n} số nguyên tố đầu tiên: ${primeNumbers.join(", ")}`);
}