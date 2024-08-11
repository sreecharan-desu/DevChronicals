// function wait1(t) {
//     console.log("1-wait1");
//     return new Promise(function(resolve){
//         setTimeout(resolve,t*1000);
//     });
// }

// function wait2(t) {
//     console.log("2-wait2");
//     return new Promise(function(resolve){
//         setTimeout(resolve,t*1000);
//     });
// }

// function wait3(t) {
//     console.log("3-wait3");
//     return new Promise(function(resolve){
//         setTimeout(resolve,t*1000);
//     });
// }

// Promise.all([wait1(1),wait2(1),wait3(3)])

// function calculateTime(t1, t2, t3) {
//     console.log("0 - calculateTime");
//     // startTime = Date.now();
//     console.log(Promise.all([wait1(t1),wait2(t2),wait3(t3)]))
//     .then(function(){
//         // console.log("4-calculateTime");
//         // const endTime = Date.now();
//         // return endTime - startTime;
//     });
// }


// calculateTime(1,2,3).then(function(){
//     // console.log("5-calculateTime");
//     // console.log(timeTaken + " milliseconds..");
// })