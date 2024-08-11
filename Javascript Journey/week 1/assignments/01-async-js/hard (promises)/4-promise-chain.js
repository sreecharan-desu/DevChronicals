/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function wait1(t) {
    return new Promise(function(resolve , reject){
        setTimeout(resolve("promise-1"),t*1000);
    });
}

function wait2(t) {
    return new Promise(function(resolve , reject){
        setTimeout(resolve("promise-2"),t*1000);
    });
}

function wait3(t) {
    return new Promise(function(resolve , reject){
        setTimeout(resolve("promise-3"),t*1000);
    });
} 


function calculateTime(t1, t2, t3){
    const starTime = new Date().getMilliseconds();
    return wait1(t1)
        .then(function(data1){
            console.log(data1);
            return wait2(t2);
        })
        .then(function(data2){
            console.log(data2)
            return wait3(t3);
        })
        .then(function(data3){
            console.log(data3)
            const endTime = new Date().getMilliseconds();
            console.log("TimeTaken : "+(endTime-starTime));
            return (endTime-starTime);
        })   
}

 
calculateTime(1,2,3);

module.exports = calculateTime;
