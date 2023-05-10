
let title = document.getElementById("myTitle");
title.style.backgroundColor = "lightgreen";

let fruits = document.getElementsByName("fruits"); // returs a node list(array)
// console.log(fruits[0]);

fruits.forEach(fruits => {
    if (fruits.checked) {
        console.log(fruits.value);
    }
})

let vegetables = document.getElementsByTagName("li"); // returns a html collection
vegetables[0].style.backgroundColor = "skyblue";

let deserts = document.getElementsByClassName("deserts"); // an array like object
deserts[0].style.backgroundColor = "lightblue";

let _id = document.querySelector("#myTitle"); // id(preceed with #)
_id.style.backgroundColor = "hotpink";

let _class = document.querySelector(".deserts"); // class-name(preceed with .) tag-name, 
_class.style.backgroundColor = "royalblue";

let _attribute = document.querySelector("[for]"); // attribute(put attribute in [])
_attribute.style.backgroundColor = "tomato";

let _listItems = document.querySelectorAll("li"); // all list items
_listItems.forEach(element => {
    element.style.backgroundColor = "lightgreen";
})