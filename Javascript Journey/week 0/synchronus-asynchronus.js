//synchronus - doing a single task at a time
//asynchronus - multitasking or delegating your work to someoneelse


//representing synchronus fn in a dumb way


function synchronusFN(){
    function findSum(num){
        sum = 0;
        for ( let j = 1 ; j <= num ; j++){
            sum  += j
        }
    
        return sum
    }
    
    function findSumTillnum(){
        console.log(findSum(200))
    }
    
    
    
    console.log("Synchronus")
    console.log("--> Busy Waiting...")
    //busy waiting
    function syncSleep(){
        let a = 0
        for ( let i = 1; i < 100000 ; i++){
            a++
        }
    }
    
    syncSleep();
    
    setTimeout(findSumTillnum,2000)
}



//example of asynchronus fn


function asynchronusFN(){
    function findSum(num){
        sum = 0;
        for ( let j = 1 ; j <= num ; j++){
            sum  += j
        }
    
        return sum
    }
    
    function findSumTillnum(){
        console.log(findSum(200))
    }
    
    console.log("Asynchronus")
    // console.log("Busy Waiting...")
    
    setTimeout(findSumTillnum,2000) //asynchronus fn
    
    console.log("--> The asynchronus function is waiting to execute...")
}



// synchronusFN();
asynchronusFN();