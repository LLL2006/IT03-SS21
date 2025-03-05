for(let n = 100; n <= 999; n++){
    let hundreds = Math.floor(n/100);
    let tens = Math.floor((n % 100) / 10);
    let units = n % 10;

    let nA = hundreds ** 3 + tens ** 3 + units ** 3;

    if(nA === n){
        console.log(n);
    }
}
