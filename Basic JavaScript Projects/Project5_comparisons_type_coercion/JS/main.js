document.write("2"+5); //coercion at it's finest

function notnum() { //NaN (not a number)
    document.getElementById("A").innerHTML = 0/0;
}

function isnotnum() {
    document.getElementById("B").innerHTML = isNaN("THESE ARE WORDS");
}

function isnum() {
    document.getElementById("C").innerHTML = isNaN("4242564");
}

document.write(2E310); //postitive infinity

document.write(-4E310); //negative infinity

document.write(6 > 4); //greater than

document.write(6 < 4); //less than

console.log(2+2); //browser console log data

console.log(6 < 4);

document.write(6 == 6); //"==" checks for equal value.

document.write(6 == 4);

document.write(typeof "that's my type")

document.write(6 === 6); //"===" checks for equal value AND data type.

document.write("six" === 6);

document.write("6" === 6);

document.write("six" === 5);

// AND written &&, OR written ||, NOT written !

document.write(4 < 6 && 6 > 4);

document.write(4 > 6 && 6 > 4);

document.write(4 > 6 || 6 > 4);

document.write(4 > 6 || 6 < 4);

function not_Function() {
    document.getElementById("Not").innerHTML = !(6 > 4); //return would be false due to it being a NOT function.
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(6 < 4); 
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(6 > 4); 
}