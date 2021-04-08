function Addition_Function() {
    var addition = 6 + 4;
    document.getElementById("addMath").innerHTML = "6 + 4 = " + addition;//How to add.
}

function Subtraction_Function() {
    var subtraction = 6 - 4;
    document.getElementById("subMath").innerHTML = "6 - 4 = " + subtraction; //How to subtract.
}

function Division_Function() {
    var division = 6 / 4;
    document.getElementById("divMath").innerHTML = "6 / 4 = " + division; //How to divide.
}

function Multiplication_Function() {
    var multiplication = 6 * 4;
    document.getElementById("mulMath").innerHTML = "6 * 4 = " + multiplication; // How to multiply.
}

function more_Math() {
    var simple_Math = (1+2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplide by 10, divided in half, and then subtracted by 5 equals " + simple_Math; //How to add multiple math functions into one.
}

function Modulus_Operator() {
    var remainder = 6 % 4;
    document.getElementById("modMath").innerHTML = "When you divide 6 by 4, you are left with a remainder of: " + remainder; //How to display a remainder.
}

function Negation_Operator() {
    var x = 6;
    document.getElementById("negMath").innerHTML = -x; //How to make a variable negative.
}
function Increment_Operator() {
    var A = 4;
    var B = ++A;
    document.getElementById("incMath").innerHTML = B; //How to increment a variable.
}

function Decrement_Operator() {
    var C = 8;
    var D = --C;
    document.getElementById("decMath").innerHTML = D; //How to Decrement a variable.
}

window.alert(Math.floor(Math.random() * 100)); //To show a random number between 0 and 100!