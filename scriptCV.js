function blink(name) {
    var x = document.getElementById(name);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function blinkExp(name,techno) {
    var x = document.getElementById(name);
    var y = document.getElementById(techno);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

function autoscroll(name) {
    var elmnt = document.getElementById(name);
    elmnt.scrollIntoView();
}

function boldnav(name){
    console.log("J'ai scrollé sur experiences")
}






