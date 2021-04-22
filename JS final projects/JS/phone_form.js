function myFunction() {
    var x, str, text;

    str = document.getElementById("numb").value

    x = str.length;

    if (isNaN(x) || x < 10 || x > 10) {
        text = "Not valid phone number.";
    } if (x === 0) {
        alert("Form is empty!")
    } else {
        text = "Phone number valid.";
    }
    document.getElementById("demo").innerHTML = text;
}
