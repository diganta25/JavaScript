// event = some action that user or browser does

// const element = document.getElementById("myButton");
// const element = document.body;
// const element = document.getElementById("myText");
const element = document.getElementById("myDiv");

// element.onclick = doSomething;
// element.onload = doSomething;
// element.onchange = doSomething;
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

function doSomething(){
    // alert(`You did something!`);
    element.style.backgroundColor = "hotpink";
}

function doSomethingElse() {
    element.style.backgroundColor = "lightgreen";
}