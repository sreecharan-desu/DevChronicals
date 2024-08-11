/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
 
    return new Promise(function(resolve,reject){
        const statTime = Date.now();
        // console.log(`Busy loop until ${milliseconds}ms.`)
        console.log(`Busy loop until ${milliseconds}ms...`);
        while( Date.now() - statTime < milliseconds){
            // setInterval(message,1000);
        }
        resolve();
    });

}




sleep(3000).then(
    function(){
        console.log("Resolved");
    }
)

module.exports = sleep;
