var A = 10 //Global variable example
function Add_numbers_1() {
    document.write(10 + A + "<br>");
}
function Add_numbers_2() {
    document.write(A + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var B = 10; //Local variable example
    document.write(20 + B + "<br>");
}
function Add_numbers_2() {
    document.write(B + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var C = 10 //Local variable example with error using the console.log to help debug
    console.log(15 + C);
}
function Add_numbers_2() {
    console.log(C + 100);
}
Add_numbers_1();
Add_numbers_2();

function get_Date() { //An if statement
    if (new Date() .getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function if_func() { //Custom if statement
    var T = 13;
    if (T >= 8) {
        document.getElementById("T13").innerHTML = "T is greater than or equal to 8.";
    }
}

function Age_Function() { //An else statement
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() { //An else if statement
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time >0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time." 
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}