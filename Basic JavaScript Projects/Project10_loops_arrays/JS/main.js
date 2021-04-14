function Call_Loop() { //while loop example
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function string_length() { //length property example
    var string = "These are a whole lotta letters for this property to count!";
    var leng = string.length;
    document.getElementById("long").innerHTML = leng
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //for Loop example
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //JavaScript Array example
    var Shopping_list = [];
    Shopping_list[1] = "bread ";
    Shopping_list[2] = "ham ";
    Shopping_list[3] = "cereal ";
    Shopping_list[4] = "rocks ";
    document.getElementById("Array").innerHTML = "Ah man I need to stop by the store, I need: " + Shopping_list
}

function constant_function() { //constant function example
    const Model_kit = {type:"Gundam", brand:"Bandai", size:"1/32"};
    Model_kit.size = "1/16";
    Model_kit.cost = "$75";
    document.getElementById("Constant").innerHTML = "The cost of the " + Model_kit.type + " was " + Model_kit.cost;
}

var H = "Howdy"
document.write(H);
{
    let H = "Hello, good sir!" //Using the let keyword, which allows the let value to only apply in a block, but nowhere outside of the curly brackets!
    document.write("<br>" + H);
}
document.write("<br>" + H);

function break_function() { //break function example
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";
list: {
  text += cars[0] + "<br>"; 
  text += cars[1] + "<br>"; 
  break list;
  text += cars[2] + "<br>"; 
  text += cars[3] + "<br>"; 
}
document.getElementById("demo1").innerHTML = text;
}

function cont_function() { //continue function example
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
    }
document.getElementById("demo2").innerHTML = text;
}

function retFunction() { //return function example
    function myFunction(fruit) {
        return "I like " + fruit;
    }
    document.getElementById("Re-turn").innerHTML = myFunction("Kiwi");
}

function objfunc() { //object with properties and method
let kit = {
    type: "Warhammer Primaris Space Marine Intercessor Box ",
    brand: "Games Workshop ",
    size: "1/64 ",
    cost: "$51 ",
    description: function() {
        return "The kit is a " + this.type + "in " + this.size + "scale for " + this.cost + "made by " + this.brand;
    }
};
document.getElementById("Kit_Object").innerHTML = kit.description();
}
//woof this one was a doozy it took me a while to get these to work, before I realized I needed to put them inside of functions.