let h= +prompt("Mời bạn nhập chiều cao hình chữ nhật");
let w= +prompt("Mời bạn nhập chiều dài hình chữ nhật");

for(let i= 0 ;i < h;i++){
    let html ="";
for(let j = 0; j < w;j++){
    if( i == 0 || i == h - 1 || j == 0 || j == w - 1 ){
        html += " * ";
    }else{
        html += "&#160;&#160;&#160;" ;
    }
}
   document.write(html + "<br>");
}