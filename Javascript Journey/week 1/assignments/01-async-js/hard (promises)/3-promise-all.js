/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    console.log("1-wait1");
    return new Promise(function(resolve){
        setTimeout(resolve,t*1000);
    });
}

function wait2(t) {
    console.log("2-wait2");
    return new Promise(function(resolve){
        setTimeout(resolve,t*1000);
    });
}

function wait3(t) {
    console.log("3-wait3");
    return new Promise(function(resolve){
        setTimeout(resolve,t*1000);
    });
}


function calculateTime(t1, t2, t3) {
    console.log("0 - calculateTime");
    startTime = Date.now();
    return Promise.all([wait1(t1),wait2(t2),wait3(t3)])
    .then(function(){
        console.log("4-calculateTime");
        const endTime = Date.now();
        return endTime - startTime;
    });
}


calculateTime(1,2,3).then(function(timeTaken){
    console.log("5-calculateTime");
    console.log(timeTaken + " milliseconds..");
})

module.exports = calculateTime;
