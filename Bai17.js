let n = +prompt("Nhập vào một số nguyên dương:");

if (n <= 1 || isNaN(n)) {
    alert("Vui lòng nhập một số nguyên dương lớn hơn 1");
} else {
    console.log(`Các số nguyên tố nhỏ hơn ${n} là:`);

    for (let num = 2; num < n; num++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(num);
        }
    }
}
