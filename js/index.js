function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var land = ev.target.id;
    if((data === "blackDot1") && (land === "black1Landing" || land === "li4")) {
        ev.target.appendChild(document.getElementById(data));
    }
    else if((data === "greenDot") && (land === "greenLanding" || land === "li3")) {
        ev.target.appendChild(document.getElementById(data));
    }
    else if((data === "blueDot") && (land === "blueLanding" || land === "li1")) {
        ev.target.appendChild(document.getElementById(data));
    }
    else if((data === "redDot") && (land === "redLanding" || land === "li2")) {
        ev.target.appendChild(document.getElementById(data));
    }
    else if((data === "blackDot2") && (land === "black2Landing" || land === "li5")) {
        ev.target.appendChild(document.getElementById(data));
    }
}

