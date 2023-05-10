
const myButtom = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButtom.addEventListener("click", begin);

function begin(){
    
    timerId = null;
    let degree = 0;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame() {
        if (x>=200 || y>=200 ) {
            clearInterval(timerId);

        }
        else{
            degree+=3;
            x+=1;
            y+=1;
            myAnimation.style.left = x + "px";
            myAnimation.style.top = y + "px";
            myAnimation.style.transform = "rotateZ("+degree+"deg)";
        }
    }
}