function element(strengths, weaknesses) { //This code utilizes the reserved keyword "void".
    this.strengths = strengths;
    this.weaknesses = weaknesses;
  }
var void = new element("Astral, Force, Void", "Void, Creation");
var astral = new element("Force, Earth", "Void");
function res_Function() {
    document.getElementById("Reserved_Keywords").innerHTML = "Void is strong against " + void.strengths + " but weak against " + void.weaknesses;
}