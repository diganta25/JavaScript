// cookie = a small text file stored on your computer
//          used to remember information about the user
//          saved in name=value pairs

// console.log(navigator.cookieEnabled);

// document.cookie = "firstName=Mckenzie; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=Cavill; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// console.log(document.cookie);

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitButton = document.querySelector("#submitButton");
const cookieButton = document.querySelector("#cookieButton");


submitButton.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
})

cookieButton.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");

})

// setCookie("email", "tro@gmail.com", 365);
// setCookie("firstName", "mckenzie", 365);
// setCookie("lastName", "cavill", 365);



// console.log(getCookie("firstName"));
// console.log(getCookie("lastName"));



function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`

}

function deleteCookie(name){
    setCookie(name, null, null)
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");   //return an array
    let result = null;

    cArray.forEach(element => {
        if (element.indexOf(name) == 0) {
            result = element.substring(name.length + 1);
        }
    })
    return result;
}