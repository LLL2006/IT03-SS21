let total = 0;
for(let i = 1; i <= 5; i++) {
    let num = +prompt(`Nhập số nguyên thứ ${i}:`);

    if(isNaN(num) || num < 0){
        alert("Hãy nhập lại");
        i--;
        continue;
    }

    if(num % 2 !== 0){
        total += num;
    }
}

alert(`Tổng các số lẻ trong 5 số đã nhập là: ${total}`);