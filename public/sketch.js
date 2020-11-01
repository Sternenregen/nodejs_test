var socket;

function setup() {
    createCanvas(windowWidth/2, windowHeight/2);
    background(50);

    //connect to server
    socket = io.connect("http://localhost:3000");

    //receiving data and then calling newDrawing
    socket.on("mouse", newDrawing);
}

function newDrawing(data) {
    fill(255, 0, 0);
    noStroke();
    ellipse(data.x, data.y, 20);
}

function draw() {
    
}

function mouseDragged() {
    console.log("Sending... " + mouseX + "," + mouseY);

    var data = {
        x: mouseX,
        y: mouseY
    }

    //send x & y coordinates
    socket.emit("mouse", data);

    fill(255);
    noStroke();
    ellipse(mouseX, mouseY, 20);
}