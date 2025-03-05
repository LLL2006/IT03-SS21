let n = +prompt("Nhập vào độ dài")
for(let i = 0; i < n ; i ++){
    let html = "";
for(let j = 0; j < n ; j++){
    if(i + j < n - 1){
        html += " * ";
    }else{
        html += "   ";
    }
}
console.log(html)
}
