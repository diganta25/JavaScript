// async = makes a function return a Promise
// await = makes a function wait for a Promise
 
function loadFile(){
    let fileLoaded = true;
 
    if(fileLoaded){
        // return "File loaded";
        return Promise.resolve("File Loaded");
    }
    else{
        // throw "File NOT loaded";
        return Promise.reject("File NOT loaded");
    }
  }
 
promise.loadFile().then(value => console.log(value))
                 .catch(error => console.log(error));