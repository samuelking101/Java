let name = prompt("what is your name")
var gender;
var male;
var female;

if (gender == male){
    alert("Welcome, Mr. " + name)
}
if (gender == female){
    alert("Welcome, Ms. " + name)
}
let age = prompt("how old are you")
const price = 50000

if (age <=13){
    discount = (100/100)* price;
    newPrice = price - discount;
    alert(`Hello, ${name}, you have a discount of ${discount}`)
}
if (age >= 14-18){
    discount = (80/100)* price;
    newPrice = price - discount;
    alert(`Hello, ${name}, you have a discount of ${discount}`)
}
if (age >= 19-30){
    discount = (60/100)*price;
    newPrice = price - discount;
    alert(`Hello, ${name}, you have a discount of ${discount}`)
}
if (age >= 31-65){
    discount = (40/100)* price;
    newPrice = price - discount;
    alert(`Hello, ${name}, you have a discount of ${discount}`)
}
if (age > 66){
    discount = (20/100)* price;
    newPrice = price - discount;
    alert(`Hello, ${name}, you have a discount of ${discount}`)
}

alert(`Thank you ${name}, for shopping with us, Have a good day`)