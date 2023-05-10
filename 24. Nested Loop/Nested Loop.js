// nested loop = a loop inside of another loop

let symbol = window.prompt("Enter a symbol");
let rows = window.prompt("Enter # of rows:");
let column = window.prompt("Enter # of column:");

for(let i=1; i<=rows;i++){
    for(let j = 1; j<=column; j++ ){
    document.getElementById("myRectangle").innerHTML +=symbol;
 }
    document.getElementById("myRectangle").innerHTML += "<br>";
}