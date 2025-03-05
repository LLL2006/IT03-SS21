let n = +prompt("Nhập vào 1 số nguyên dương")
if(n < 0 || isNaN(n)){
    alert("Vui lòng nhập 1 số hợp lệ")
} else {
    let sum = 0;
    for(let i = 1; i < n; i++){
        if(n % i === 0){
            sum += i;
        }
    }

    if(n === sum){
        alert(`${n} là số hoàn hảo`)
    }else{
        alert(`${n} không phải số hoàn hảo`)
    }
}