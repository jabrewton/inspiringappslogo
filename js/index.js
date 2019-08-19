let count = 0;
const blackDot1 = document.getElementById("blackDot1");
const blackDot2 = document.getElementById("blackDot2");
const greenDot = document.getElementById("greenDot");
const redDot = document.getElementById("redDot");
const blueDot = document.getElementById("blueDot");
const blackDotStartZone1 = document.getElementById("li4");
const blackDotStartZone2 = document.getElementById("li5");
const greenDotStartZone = document.getElementById("li3");
const redDotStartZone = document.getElementById("li2");
const blueDotStartZone = document.getElementById("li1");
const blackDotLandingZone1 = document.getElementById("black1Landing");
const greenDotLandingZone = document.getElementById("greenLanding");
const blueDotLandingZone = document.getElementById("blueLanding");
const redDotLandingZone = document.getElementById("redLanding");
const blackDotLandingZone2 = document.getElementById("black2Landing");
const reset = document.getElementById("returnButton");

let width = window.innerWidth;
let height = window.innerHeight;
let particles = [];

// Particle canvas variables
const canvas = document.createElement( 'canvas' );
const context = canvas.getContext( '2d' );
canvas.id = 'particle-canvas';
canvas.width = width;
canvas.height = height;
document.body.appendChild( canvas );

// Handles removing text from info section for tiny screens
if(window.innerWidth <= "500"){
    document.getElementById("confirm").innerHTML = "";
}



// Begining of rework section for mobile touch events
var container = document.querySelector("#container");
var activeItem = null;
var active = false;

// Event listeners for mobile touch events
container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

// Event listeners for browser mouse clicks
container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

// Initial click/touch functionality
function dragStart(e) {
    if (e.target !== e.currentTarget) {
        if(e.target.style.transform === "none" || e.target.id === "bgContainer" || e.target.id === "dotList" || e.target.id === blackDotStartZone1.id || e.target.id === blackDotStartZone2.id || e.target.id === redDotStartZone.id || e.target.id === greenDotStartZone.id || e.target.id === blueDotStartZone.id || e.target.id === blackDotLandingZone1.id || e.target.id === blackDotLandingZone2.id || e.target.id === blueDotLandingZone.id || e.target.id === greenDotLandingZone.id || e.target.id === redDotLandingZone.id || e.target.id === reset.id) {
            active = false;
        }else {
            active = true;

            // The item clicked/touched
            activeItem = e.target;
        
            if (activeItem !== null) {
                // If no xOffset set or the flag has been set on reset set xOffset back to zero
                if (!activeItem.xOffset || activeItem.className === "flag") {
                activeItem.xOffset = 0;
                }
                // If no yOffset set or the flag has been set on reset set yOffset back to zero
                if (!activeItem.yOffset || activeItem.className === "flag") {
                activeItem.yOffset = 0;
                }
                // Set the touchstart or mousedown location
                if (e.type === "touchstart") {
                activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
                activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
                } else {
                activeItem.initialX = e.clientX - activeItem.xOffset;
                activeItem.initialY = e.clientY - activeItem.yOffset;
                }
            }
        }
    }
}

// Drop functionality
function dragEnd(e) {
    if (activeItem !== null)  {
        // If desktop, board is a larger layout
        if(window.innerWidth > "650") {
            // Landing zones for each dot
            if((activeItem.currentX < -310 && activeItem.currentX > -360) && (activeItem.currentY < 320 && activeItem.currentY > 270) && (activeItem.id === blackDot1.id)) {
                // Remove transform for new click check as well as to keep dot in absolute drop position
                blackDot1.style.transform = "none";
                // Add pulse styling to dot to show it was dropped in correct location
                blackDot1.classList.add("ping");
                // Add dot to landing zone
                blackDotLandingZone1.appendChild(activeItem);
                // Add to counter for win scenario
                count++;
            }
            else if((activeItem.currentX < -65 && activeItem.currentX > -115) && (activeItem.currentY < 410 && activeItem.currentY > 360) && (activeItem.id === blackDot2.id)) {
                blackDot2.style.transform = "none";
                blackDot2.classList.add("ping");
                blackDotLandingZone2.appendChild(activeItem);
                count++;
            }
            else if((activeItem.currentX < -80 && activeItem.currentX > -130) && (activeItem.currentY < 460 && activeItem.currentY > 410) && (activeItem.id === greenDot.id)) {
                greenDot.style.transform = "none";
                greenDot.classList.add("ping");
                greenDotLandingZone.appendChild(activeItem);
                count++;
            }
            else if((activeItem.currentX < 350 && activeItem.currentX > 300) && (activeItem.currentY < 200 && activeItem.currentY > 150) && (activeItem.id === redDot.id)) {
                redDot.style.transform = "none";
                redDot.classList.add("ping");
                redDotLandingZone.appendChild(activeItem);
                count++;
            }
            else if((activeItem.currentX < 290 && activeItem.currentX > 240) && (activeItem.currentY < 170 && activeItem.currentY > 120) && (activeItem.id === blueDot.id)) {
                blueDot.style.transform = "none";
                blueDot.classList.add("ping");
                blueDotLandingZone.appendChild(activeItem);
                count++;
            }
        }
        // Else if mobile, board is a smaller layout
        else if(window.innerWidth <= "650") {
            if((activeItem.currentX < -226 && activeItem.currentX > -256) && (activeItem.currentY < 230 && activeItem.currentY > 200) && (activeItem.id === blackDot1.id)) {
                blackDot1.style.transform = "none";
                blackDot1.classList.add("ping");
                blackDotLandingZone1.appendChild(activeItem);
                count++;
            }
            else if((activeItem.currentX < -60 && activeItem.currentX > -90) && (activeItem.currentY < 300 && activeItem.currentY > 270) && (activeItem.id === blackDot2.id)) {
                blackDot2.style.transform = "none";
                blackDot2.classList.add("ping");
                blackDotLandingZone2.appendChild(activeItem);
                count++;
            }
            else if((activeItem.currentX < -65 && activeItem.currentX > -95) && (activeItem.currentY < 330 && activeItem.currentY > 300) && (activeItem.id === greenDot.id)) {
                greenDot.style.transform = "none";
                greenDot.classList.add("ping");
                greenDotLandingZone.appendChild(activeItem);
                count++;
            }
            else if((activeItem.currentX < 255 && activeItem.currentX > 225) && (activeItem.currentY < 147 && activeItem.currentY > 117) && (activeItem.id === redDot.id)) {
                redDot.style.transform = "none";
                redDot.classList.add("ping");
                redDotLandingZone.appendChild(activeItem);
                count++;
            }
            else if((activeItem.currentX < 218 && activeItem.currentX > 188) && (activeItem.currentY < 131 && activeItem.currentY > 101) && (activeItem.id === blueDot.id)) {
                blueDot.style.transform = "none";
                blueDot.classList.add("ping");
                blueDotLandingZone.appendChild(activeItem);
                count++;
            }
        }
        // If win
        if(count === 5) {
            // Update text header
            document.getElementById("confirm").innerHTML = "CONGRATULATIONS! AMAZING WORK!";
            // Start confetti
            startAnimation();
        }
    }
    active = false;
    activeItem = null;
}

// After click/touch movement
function drag(e) {
    if (active) {
        // Allows dragging of target
        e.preventDefault();
        if (e.type === "touchmove") {    
            activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
            activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
        } else {
            activeItem.currentX = e.clientX - activeItem.initialX;
            activeItem.currentY = e.clientY - activeItem.initialY;
        }
        // Remove flag so that if dot is dropped in arbitrary spot, and reclicked
        // to move again, the x/yOffsets will not be reset to zero and 
        // the dot will continue moving naturally
        activeItem.classList.remove("flag");
        activeItem.xOffset = activeItem.currentX;
        activeItem.yOffset = activeItem.currentY;
        // Call to setTranslate so the dot target can be taken out of 2d context and move about
        // in the 3d plane.
        setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
    }
}

// Sets the img to translate3d so you can see the movement of the element
function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

// Reset functionality
returnButton.addEventListener("click", returnDots,false);
returnButton.addEventListener("touchstart", returnDots,false);

// Return dots to start zones; reset translate3d styling on dots to 
// keep them from moving to random places on reset; add flags
// so the dots x/yOffsets will be reset to zero; remove ping styling
// as that is for the landing zone drop only; reset header text;
// reset count; stop animation of confetti.
function returnDots() {
    blackDotStartZone1.appendChild(blackDot1);
    blackDotStartZone2.appendChild(blackDot2);
    greenDotStartZone.appendChild(greenDot);
    redDotStartZone.appendChild(redDot);
    blueDotStartZone.appendChild(blueDot);
    blackDot1.style.transform = "translate3d(0,0,0)";
    blackDot2.style.transform = "translate3d(0,0,0)";
    redDot.style.transform = "translate3d(0,0,0)";
    blueDot.style.transform = "translate3d(0,0,0)";
    greenDot.style.transform = "translate3d(0,0,0)";
    blackDot1.classList.add("flag");
    blackDot2.classList.add("flag");
    redDot.classList.add("flag");
    greenDot.classList.add("flag");
    blueDot.classList.add("flag");
    blackDot1.classList.remove("ping");
    blackDot2.classList.remove("ping");
    greenDot.classList.remove("ping");
    redDot.classList.remove("ping");
    blueDot.classList.remove("ping");
    if(window.innerWidth > "500"){
        document.getElementById("confirm").innerHTML = "From here you will witness dot moving like never before!<br/> Complete the InspiringApps logo by putting the dots in their correct place!<br/> Please use portrait mode only if on mobile.";
    }else {
        document.getElementById("confirm").innerHTML = "";
    }
    count = 0;
    stopAnimation();
};

// END OF APP BASIC FUNCTIONALITY




// START OF CONFETTI FUNCTIONALITY
// This was borrowed from a codepen online
// and modified to fit my case.
// Confetti Drop Canvas Animation Effect -
// A PEN BY Rainner Lins

// Confetti particle class
class ConfettiParticle {

    constructor( context, width, height ) {
        this.context = context;
        this.width = width;
        this.height = height;
        this.color = '';
        this.lightness = 50; 
        this.diameter = 0;
        this.tilt = 0;
        this.tiltAngleIncrement = 0;
        this.tiltAngle = 0;
        this.particleSpeed = 1;
        this.waveAngle = 0;
        this.x = 0;
        this.y = 0;
        this.reset();
    }

    reset() {
        this.lightness = 50;
        this.color = Math.floor( Math.random() * 360 ); 
        this.x = Math.random() * this.width;
        this.y = Math.random() * this.height - this.height;
        this.diameter = Math.random() * 6 + 4;
        this.tilt = 0;
        this.tiltAngleIncrement = Math.random() * 0.1 + 0.04;
        this.tiltAngle = 0;
    }

    update() {
        this.waveAngle += this.tiltAngleIncrement;
        this.tiltAngle += this.tiltAngleIncrement;
        this.tilt = Math.sin( this.tiltAngle ) * 12;
        this.x += Math.sin( this.waveAngle );
        this.y += ( Math.cos( this.waveAngle ) + this.diameter + this.particleSpeed ) * 0.4;
        if ( this.complete() ) this.reset(); 
    }

    complete() {
        return ( this.y > this.height + 20 );
    }

    draw() {
        let x = this.x + this.tilt;
        this.context.beginPath();
        this.context.lineWidth = this.diameter;
        this.context.strokeStyle = "hsl("+ this.color +", 50%, "+this.lightness+"%)";
        this.context.moveTo( x + this.diameter / 2, this.y );
        this.context.lineTo( x, this.y + this.tilt + this.diameter / 2 );
        this.context.stroke();
    }
};

// Update canvas size
const updateSize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
};

// Create confetti particles 
const createParticles = () => {
    particles = []; 
    let total = 100; 

    if ( width > 1080 ) { total = 400; } else 
    if ( width > 760 )  { total = 300; } else 
    if ( width > 520 )  { total = 200; }

    for ( let i = 0; i < total; ++i ) {
        particles.push( new ConfettiParticle( context, width, height ) );
    }
};

// Animation loop 
const animationFunc = () => {  
    myreq = requestAnimationFrame( animationFunc );
    const context = canvas.getContext('2d');
    context.clearRect( 0, 0, width, height );

    for ( let p of particles ) {
        p.width = width;
        p.height = height;
        p.update();
        p.draw();
    }   
};

// Stop animation
function stopAnimation() {
    const context = canvas.getContext('2d');
    context.clearRect(0,0,canvas.width, canvas.height);
    window.cancelAnimationFrame(myreq);
}

// Start animation
function startAnimation() {
    updateSize();
    createParticles();
    animationFunc();
}

// On resize 
window.addEventListener( 'resize', e => {
    updateSize();
    createParticles();
});

    




//I don't usually leave tons of comments in my code 
//but I wanted to show you the first way I tried to solve the 
//assignment. See below


//Original functionality utilizing HTML5 DnD
//Does not work on mobile!!!


// function allowDrop(ev) {
//     ev.preventDefault(); 
// }
  
// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//     ev.preventDefault();
//     let data = ev.dataTransfer.getData("text");
//     let land = ev.target.id;
    
//     if((data === "blackDot1") && (land === "black1Landing" || land === "li4")) {
//         ev.target.appendChild(document.getElementById(data));
//         count++;
//     }
//     else if((data === "greenDot") && (land === "greenLanding" || land === "li3")) {
//         ev.target.appendChild(document.getElementById(data));
//         count++;
//     }
//     else if((data === "blueDot") && (land === "blueLanding" || land === "li1")) {
//         ev.target.appendChild(document.getElementById(data));
//         count++;
//     }
//     else if((data === "redDot") && (land === "redLanding" || land === "li2")) {
//         ev.target.appendChild(document.getElementById(data));
//         count++;
//     }
//     else if((data === "blackDot2") && (land === "black2Landing" || land === "li5")) {
//         ev.target.appendChild(document.getElementById(data));
//         count++;
//     }
//     if(count === 5) {
//         document.getElementById("confirm").innerHTML = "CONGRATULATIONS! AMAZING WORK!";
//     }
// }


// function returnDots() {
    // lbd1.appendChild(document.getElementById("blackDot1"));
    // lbd2.appendChild(document.getElementById("blackDot2"));
    // lgd.appendChild(document.getElementById("greenDot"));
    // lrd.appendChild(document.getElementById("redDot"));
    // lbld.appendChild(document.getElementById("blueDot"));
    // const bd1 = document.getElementById("blackDot1");
    // const bd2 = document.getElementById("blackDot2");
    // const gd = document.getElementById("greenDot");
    // const rd = document.getElementById("redDot");
    // const bld = document.getElementById("blueDot");
//     lbd1.appendChild(bd1);
//     lbd2.appendChild(bd2);
//     lgd.appendChild(gd);
//     lrd.appendChild(rd);
//     lbld.appendChild(bld);
//     count = 0;
//     document.getElementById("confirm").innerHTML = "From here you will witness dot moving like never before!<br/> Complete the InspiringApps logo by putting the dots in their correct place!"
// }

