function Two_Var_Function() { //getelementbyid
    var string = "This is a string!";
    var result = string.fontcolor("red")
    document.getElementById("Red_String").innerHTML = result;
}

function Var_Function() { //Concatenating 
    var sentence = "This is a string...";
    sentence += "Additional Text.";
    document.getElementById("Concatenate").innerHTML = sentence;
}