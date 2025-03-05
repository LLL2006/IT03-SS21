let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;

do{
    guess = +prompt("Nhập 1 số từ 1 đến 10:");
    if(isNaN(guess) || guess < 1 || guess > 10) {
        alert("Nhập lại 1 số từ 1 đến 10");
    }  else if (guess > randomNumber) {
        alert("Số bạn nhập lớn hơn số ngẫu nhiên");
    } else if (guess < randomNumber) {
        alert("Số bạn nhập nhỏ hơn số ngẫu nhiên");
    }
} while (guess !== randomNumber);

alert(`Bạn đã đoán đúng`);