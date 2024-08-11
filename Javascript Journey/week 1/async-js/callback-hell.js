//callback hell -> callbacks especially nested callbacks leads to an ugly indentation and This is called a callback hell



let p = new Promise(function(resolve){
    resolve();
});
console.log(p);
