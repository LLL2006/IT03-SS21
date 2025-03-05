let n = +prompt("Nhập vào một số nguyên dương:");

if (n <= 0 || isNaN(n)) {
    alert("Vui lòng nhập một số nguyên dương hợp lệ");
} else {
    let a = 0, b = 1;
    let sum = 0;
    let fibonacciSeries = "";

    while (sum + a < n) {
        fibonacciSeries += a + " ";
        let next = a + b;
        sum += a;
        a = b;
        b = next;
    }

    console.log(`Dãy Fibonacci có tổng bé hơn ${n} là: ${fibonacciSeries.trim()}`);
}
