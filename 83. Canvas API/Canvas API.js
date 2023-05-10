
// Canvas API = a means for drawing graphics
//              used for animations, games, drawing visualizations.

let canvas = document.getElementById("myCanvas"); // picture and the frame together
let context = canvas.getContext("2d");  // painting within a picture frame

// DRAW LINES
/*
context.strokeStyle = "deep pink";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0,0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250)
context.stroke();
*/

// DRAW TRIANGLE
/*
context.strokeStyle = "purple";
context.fillStyle = "skyblue";
context.lineWidth = 5;
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.stroke();
context.fill();
*/

// DRAW RECTANGLE
/*
context.lineWidth = 2;
context.fillStyle = "lightgreen";
context.fillRect(0,0,250,250)
context.strokeStyle = "black";
context.strokeRect(0,0,250,250);

context.fillStyle = "skyblue";
context.fillRect(0,250,250,250)
context.strokeStyle = "black";
context.strokeRect(0,250,250,250);

context.fillStyle = "pink";
context.fillRect(250,250,250,250)
context.strokeStyle = "black";
context.strokeRect(250,250,250,250);

context.fillStyle = "gold";
context.fillRect(250,0,250,250)
context.strokeStyle = "black";
context.strokeRect(250,0,250,250);
*/

/*
// DRAW CIRCLE
// (x, y, r, sAngle, eAngle, counterclockwise)
context.fillStyle = "lightblue";
context.lineWidth = 10;
context.strokeStyle = "darkblue";
context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.stroke();
context.fill();
*/


// DRAW TEXT
context.font = "25px LEMON MILK Pro FTR";
context.fillStyle = "skyblue";
context.textAlign = "center";
context.fillText("God: Make Everything Good", canvas.width/2, canvas.height/2);