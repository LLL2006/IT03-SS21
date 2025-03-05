let chan = 0;
let le = 0;

for(let i = 1; i <= 5; i++) {
    let num = +prompt(`Nhập số nguyên thứ ${i}:`);

    if(num % 2 !== 0){
        le++;
    }else{
        chan++;
    }
}

alert(`Số chẵn trong 5 số là ${chan} số; Số lẻ trong 5 số là ${le} số`);