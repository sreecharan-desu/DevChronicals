/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n){
    let sum = 0;
    startTime = new Date().getSeconds();
    for(i = 1 ; i <= n; i++){
        sum += i;
    }
    endTime = new Date().getSeconds();
    console.log(startTime)
    console.log(endTime)
    console.log("Time taken to calculate the sum from 1 to " + n +" ("+ sum +") "+ " is " + (endTime-startTime) + " second(s).");
}

calculateTime(1000000000)