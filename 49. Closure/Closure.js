// closure =  A function with preserved and private data.
//            Gives you access to an outer function’s scope,
//            from an inner function.

document.getElementById("loginButton").onclick = login();

function login(){
let userName = "Stro";
let userInbox = 1;
function alertUser(){
    alert(`${userName}, you have ${userInbox} new messages`);
    userInbox = 0;
    }
    return alertUser;
}

