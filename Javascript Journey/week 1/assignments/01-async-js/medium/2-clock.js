// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function formatTime(time){
    if ( time < 10){
        time = "0" + time;
    }
    return time;
}

function clock(){

    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();


    process.stdout.write(`\r Time (IST): ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`);
}


setInterval(clock , 1000);

// process.stdout.write();