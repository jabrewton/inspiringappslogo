let count = 0;


function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let land = ev.target.id;
    
    if((data === "blackDot1") && (land === "black1Landing" || land === "li4")) {
        ev.target.appendChild(document.getElementById(data));
        count++;
    }
    else if((data === "greenDot") && (land === "greenLanding" || land === "li3")) {
        ev.target.appendChild(document.getElementById(data));
        count++;
    }
    else if((data === "blueDot") && (land === "blueLanding" || land === "li1")) {
        ev.target.appendChild(document.getElementById(data));
        count++;
    }
    else if((data === "redDot") && (land === "redLanding" || land === "li2")) {
        ev.target.appendChild(document.getElementById(data));
        count++;
    }
    else if((data === "blackDot2") && (land === "black2Landing" || land === "li5")) {
        ev.target.appendChild(document.getElementById(data));
        count++;
    }
    if(count === 5) {
        document.getElementById("confirm").innerHTML = "CONGRATULATIONS! AMAZING WORK!";
    }
}

function returnDots() {
    const bd1 = document.getElementById("blackDot1");
    const bd2 = document.getElementById("blackDot2");
    const gd = document.getElementById("greenDot");
    const rd = document.getElementById("redDot");
    const bld = document.getElementById("blueDot");
    const lbd1 = document.getElementById("li4");
    const lbd2 = document.getElementById("li5");
    const lgd = document.getElementById("li3");
    const lrd = document.getElementById("li2");
    const lbld = document.getElementById("li1");
    lbd1.appendChild(bd1);
    lbd2.appendChild(bd2);
    lgd.appendChild(gd);
    lrd.appendChild(rd);
    lbld.appendChild(bld);
    count = 0;
    document.getElementById("confirm").innerHTML = "From here you will witness dot moving like never before!<br/> Complete the InspiringApps logo by putting the dots in their correct place!"
}

