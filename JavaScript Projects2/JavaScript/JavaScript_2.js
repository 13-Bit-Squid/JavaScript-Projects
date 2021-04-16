function validateForm() {
    var x = document.forms["myForm"]["cname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    var y = document.forms["myForm"]["rname"].value;
    if (y == "") {
      alert("Race must be filled out");
      return false;
    }
    var z = document.forms["myForm"]["clname"].value;
    if (z == "") {
      alert("Class must be filled out");
      return false;
    }
  }