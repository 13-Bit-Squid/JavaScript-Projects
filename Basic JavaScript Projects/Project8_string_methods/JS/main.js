function full_Sentence() { //concatenating variables
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete  ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy..."; //Good reference!!
    var Section = Sentence.slice(27,33).toUpperCase(); //added the toUpperCase method to capitalize JOHNNY
    document.getElementById("Slice").innerHTML = Section;
}

function loc_Method() { //Search function
    var Sent = "There's a whoIe lotta words here but only one of em' is different!";
    var Sear = Sent.search("whoIe");
    document.getElementById("Looking").innerHTML = Sear;
}

function string_Method() { //toString method
    var X = 182;
    document.getElementById("Numbers_to_strings").innerHTML = X.toString();
}

function precision_Method() { //precision method
    var Y = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = Y.toPrecision(10); //only shows to 10 places
}

function tofixed_Method() { //toFixed method
    var Z = 42.4256481344;
    document.getElementById("fixed").innerHTML = Z.toFixed(4); //Converts a number into a string, rounds the number to keep only four decimals
}

function valueof_Method() { //valueOf method
    var A = "Howdy there, pard'ner!";
    document.getElementById("Value_of").innerHTML = A.valueOf(); //returns the primitive value of a String object
}