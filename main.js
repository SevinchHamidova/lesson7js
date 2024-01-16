var elRes = document.querySelector(".res");
var num1 = prompt("son kiriting");
var num2 = prompt("son kiriting");
var num3 = prompt("son kiriting");

if(num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2){
    elRes.textContent = num1
}else if (num2 > num1 && num2 < num3 || num2 > num3 && num2 < num3){
    elRes.textContent = num2
}else {
    elRes.textContent = num3
}