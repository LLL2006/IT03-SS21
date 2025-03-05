let a = +prompt("Nhập giá trị a:");
let b = +prompt("Nhập giá trị b:");
let c = +prompt("Nhập giá trị c:");

if (a === 0) {
  if (b === 0) {
    alert(c === 0 ? "Phương trình vô số nghiệm." : "Phương trình vô nghiệm.");
  } else {
    let x = -c / b;
    alert("Phương trình có một nghiệm duy nhất: x = " + x);
  }
} else {
  let delta = b * b - 4 * a * c;

  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}; x2 = ${x2}`);
  } else if (delta === 0) {
    let x = -b / (2 * a);
    alert(`Phương trình có nghiệm kép: x = ${x}`);
  } else {
    alert("Phương trình vô nghiệm");
  }
}