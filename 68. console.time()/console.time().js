// console.time() = Starts a timer you can use to 
//                  track how long an operation(synchronous) takes
//                  Give each timer a unique name.


// start 
console.time("Response Time");

// alert("CLICK THE OK BUTTON!");
setTimeout(() => console.log("Hello"), 3000);

// end
console.timeEnd("Response Time");