let money = +prompt("Mời bạn nhập số tiền cần rút ");

if( money % 10000 === 0){

let minMoney = 500000;
while( money > 0){
    let count = Math.floor(money / minMoney);
    if(count > 0){
        console.log(`${minMoney.toLocaleString()} - ${count} tờ`);
        money -= minMoney * count;
    }
    if (minMoney === 500000) {
        minMoney = 200000;
    } else if (minMoney === 200000) {
        minMoney = 100000;
    } else if (minMoney === 100000) {
        minMoney = 50000;
    } else if (minMoney === 50000) {
        minMoney = 20000;
    } else if (minMoney === 20000) {
        minMoney = 10000;
    }
  }
}