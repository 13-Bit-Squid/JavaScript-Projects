function Ride_Function() { //Ternary Operators
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Rider(Height, Age) { //Object Constructor
    this.Rider_Height = Height;
    this.Rider_Age = Age;
}
var Ben = new Rider("6'1\"", 21);
var Nick = new Rider("6'0\"", 22);
function obj_Function() {
    document.getElementById("New_and_This").innerHTML = "Ben is " + Ben.Rider_Age + " years old and " + Ben.Rider_Height + " tall.";
}

function count_Function() { //Nested Function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}