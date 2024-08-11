// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.




num = 1
function counter(duration){

    if( num <= 100){
        console.log(num++)
        setTimeout(
            counter,duration
        )
    }
    else{}

}

counter(2000)





























































// (Hint: setTimeout)