//DONT REPEAT YOURSELF ( DRY )

function square(arg){
    return arg*arg;
}

function cube(arg){
    return arg*arg*arg;
}


function SumOfSomething(arg1 , arg2 , fn){
    return (fn(arg1) + fn(arg2))
}

console.log(SumOfSomething(1,2,cube));


//Async Functions - setTimeout() and readFile() these are the two functions that javascript provides us by default 