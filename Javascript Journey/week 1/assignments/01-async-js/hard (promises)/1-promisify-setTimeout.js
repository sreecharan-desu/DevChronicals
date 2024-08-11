/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

//  ### n is the number of seconds but not the number of milliseconds 

function wait(n){
    return new Promise(function(resolve){
        setTimeout(resolve , n*1000);
    });
}

wait(2).then(
    function(){
    }
)


  

module.exports = wait;
