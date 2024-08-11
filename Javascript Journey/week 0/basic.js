// 1 .var , let , const -> constant value
// console.log("Hello world");

// let a = 2;
// a = 3;
// console.log(a);  


// const PI = 3.14;
// console.log(PI);

// let Name = "SreeCharan ";
// let age = 18;
// let isMarried = false;


// console.log("Name : " + Name + "Age : " + age + " Is Married : " + isMarried );


//Arrays & Objects 

// const object = {
//     name : "SreeCharan",
//     age : 18
// }

// console.log(object["name"]);

// //--> ArrayOfObjects


// const ArrayOfObjects = [

//     {

//         name : "Sree",
//         age : 17

//     },
//     {

//         name : "Charan",
//         age : 18

//     }

// ]

// console.log(ArrayOfObjects[0]["name"]);


//Checking core performance


// let sum = 0;
// for (i = 0 ; i <= 100000000000; i++){
//     sum = sum + i;
// }

// console.log(sum);

//use "top" command


//Callbacks --> Passing a function as an argument to a function

function sum(fnTocall , num1 , num2 ){
    result = num1 + num2
    fnTocall(result)
}

function displayResult(data){
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data){
    console.log("Sum is : " + data);
}

//You are only allowed to call one function after this and three functions need to be executed

sum(displayResult,1,2);

