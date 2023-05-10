// Checked property - It let us know if the checked box or radio button is 
//                    selected

document.getElementById("myButton").onclick = function() {
    const myCheckBox = document.getElementById("myCheckBox");
    const visa = document.getElementById("visa");
    const mastercard = document.getElementById("mastercard");
    const paypal = document.getElementById("paypal");

    if (myCheckBox.checked == true) {
        console.log("You are patient");
    }
    else{
        console.log("Be patient, Everything will come to you!")
    }

    if (visa.checked) {
        console.log("You're paying with a Visa!")
    }
    else if (mastercard.checked) {
        console.log("You're paying with a MasterCard!");
    }
    else if(paypal.checked) {
        console.log("You're paying with PayPal!");
    }
    else{
        console.log("You must select a payment type!")
    }
}