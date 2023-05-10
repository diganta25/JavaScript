// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks) <img src="virus" onerror="alert('VIRUS!')">
// .textContent (more secure)

// const nameTag = document.createElement("h1");
// nameTag.textContent = window.prompt("Enter your name");
// document.body.append(nameTag);

const myList = document.querySelector("#fruits");
const listItem = document.createElement("li");
listItem.textContent = "mango";
// myList.append(listItem);    // beginning 
// myList.prepend(listItem);   // ending
myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]);