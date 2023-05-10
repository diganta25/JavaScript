
const myButton = document.querySelector("#myButton");
const myImage = document.querySelector("#myImage");

myButton.addEventListener("click", () => {
    console.log(myImage.style.display);
    // if (myImage.style.display == "none") {
    //     myImage.style.display = "block";
    // }
    // else{
    //     myImage.style.display = "none";
    // }

    if (myImage.style.visibility == "hidden") {
        myImage.style.visibility = "visible";
    }
    else{
        myImage.style.visibility = "hidden";
    }
})