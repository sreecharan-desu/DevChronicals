//1.
// array =  [1,2,3,4,5,6,7,8,9,10];
// for(i = 0; i < array.length;i++){
//     if(array[i] % 2 == 0){
//         console.log(array[i]);
//     }
// }


//2.

// array = [1,2,356,4,4,5,6,6,67]

// biggestNumber = array[0]

// for( i = 1; i < array.length;i++){
//     if(array[i] > biggestNumber){
//         biggestNumber = array[i]
//     }
// }

// console.log("Biggest Number of the array : " + biggestNumber);


//3.


//Creating an object

// object = {

//     Name : "SreeCharan",
//     age : "18" 

// }


//accessing an object

// console.log(object.Name);
// console.log(object.age);

//or

// console.log(object["Name"]);
// console.log(object["age"]);



//Creating an complex object or Arrayof Objects


// cObj = [


//     {

//         Name : "SreeCharan",
//         age  : "18",
//         gender : "Male"

//     },
//     {

//         Name : "SreeHitha",
//         age  : "15",
//         gender : "Female"
//     },
//     {
//         Name : "Sailaja",
//         age  : "18",
//         gender : "Female"
//     },
//     {
//         Name : "SureshBabu",
//         age  : "19",
//         gender : "Male"
//     }


// ]


// for(i = 0 ; i<cObj.length ; i++){
//     if(cObj[i].gender == "Male"){
//         console.log(cObj[i].Name);
//     }
// }



//4.

// array = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]

// //Reversing elements of the array

// console.log(array)

// for(i = 0 ; i < ( (array.length) - (array.length/2) ) ; i++){
//     s = (array.length - i)-1
//     temp = array[i]
//     array[i] = array[s]
//     array[s] = temp   
// }

// console.log(array)



//Counter that counts from 30 to 0

// let counter = 30;

// function Counter(){
//     console.log(counter);
//     counter--;
// }

// setInterval(Counter,1000);



//Terminal Clock

// function formatTime(time){
//     return time<10 ? "0"+time : time;
// }

// function displayTime(){
//     date = new Date();
//     hours = formatTime(date.getHours());
//     mins = formatTime(date.getMinutes());
//     secs = formatTime(date.getSeconds());
//     process.stdout.write(`\rTime : ${hours}:${mins}:${secs}`);
// }

// setInterval(displayTime,1000);


// Function to capture the time before setTimeout
// function beforeTimeout() {
//     return new Date().getTime();
// }

// // Function to calculate and display the time difference
// function calculateTimeDifference(startTime) {
//     const endTime = new Date().getTime();
//     const difference = endTime - startTime;
//     console.log(`Time difference: ${difference} milliseconds`);
// }

// // Store the start time
// const startTime = beforeTimeout();

// // Set a timeout for 1 second
// setTimeout(() => {
//     calculateTimeDifference(startTime);
// }, 1000);
