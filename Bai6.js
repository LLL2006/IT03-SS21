let num = +prompt("Nhập vào 1 số nguyên bất kỳ");

if(isNaN(num) || num < 1) {
    alert("Hãy nhập lại 1 số nguyên hợp lệ");
} else {
    let result = "Các ước của " +num+ " là: ";

    for(let i = 1; i <= num; i++){
        if(num % i === 0) {
            result += i + " ";
        }
    }

    alert(result)
}