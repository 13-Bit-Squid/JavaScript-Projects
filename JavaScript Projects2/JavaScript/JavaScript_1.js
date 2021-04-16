function Army_Function() {
    var Army_Output;
    var Army = document.getElementById("Army_Input").value;
    var Army_String = " are a great army!";
    switch(Army) {
        case "Space Marines":
            Army_Output = "Space Marines" + Army_String;
        break;
        case "Chaos Space Marines":
            Army_Output = "Chaos Space Marines" + Army_String;
        break;
        case "Aeldari":
            Army_Output = "Aeldari" + Army_String;
        break;
        case "Drukhari":
            Army_Output = "Drukhari" + Army_String;
        break;
        case "Tau":
            Army_Output = "Tau" + Army_String;
        break;
        case "Tyranids":
            Army_Output = "Tyranids" + Army_String;
        break;
        case "Necrons":
            Army_Output = "Necrons" + Army_String;
        break;
        default:
        Army_Output = "Please enter an army exactly as written above.";
    }
    document.getElementById("Output").innerHTML = Army_Output;
}

function pos_shift_Function() {
    var B = document.getElementsByClassName("click");
    B[0].innerHTML = "The text has changed!"; 
}

function drawcirc_Function() {
    var c = document.getElementById("jsCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function grad_Function() {
    var g = document.getElementById("jsCanvas");
    var gtx = g.getContext("2d");
    
    var grd = gtx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "orange");
    grd.addColorStop(1, "white");
    
    gtx.fillStyle = grd;
    gtx.fillRect(0, 0, 250, 500);
}