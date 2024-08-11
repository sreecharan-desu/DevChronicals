// PROBLEM_STATEMET : Print the ID of an user either it is a number or a string

// function greet(id:number):void{
//     console.log("Hi"+id);
// }
// greet(8);


//Solution

// type greetArg = number | string;

// function greet(id:greetArg){
//     console.log("Hello " + id);
// }

// greet('SreeCharan')
// greet(8);

//Important usecases of Types is using Unions


// type employee = {
//     name : string,
//     age : number,
//     department : string
// }

// type Manager = {
//     name : string,
//     age  : number 
// }

// type TechLead  = employee & Manager;

// const t:TechLead  =  {
//     name : "SreeCharan",
//     age : 13,
//     department : 'CSE'
// }

// console.log(t);


// type array = number[];
// function MaxValue(listOfNumbers:array):number{
//     let MaxValue:number = listOfNumbers[0];
//     let i:number;
//     for(i= 0;i <= listOfNumbers.length;i++){
//         if(listOfNumbers[i]>MaxValue)
//             MaxValue = listOfNumbers[i];
//     }
//     return MaxValue;
// }

// const listOfNumbers:array = [1,2,3,4,5,6];
// const maxNumber = MaxValue(listOfNumbers);
// console.log(maxNumber)



//Filter out the leagal Users from the array

// interface User {
//     firstname : string,
//     lastName : string,
//     age : number
// }

// function FilterOutUsers(users:User[]):User[]{
//     let validUsers:User[] = [];
//     for(let i = 0;i<users.length;i++){
//         if(users[i].age > 18){
//             validUsers = [...validUsers,users[i]]
//         }
//         else{
//             continue;
//         }
//     }
//     return validUsers;
// }
// const userList:User[] = [{firstname: 'SreeCharan', lastName: ' gdcuhdsucgsd', age: 12},{firstname: 'Karunya', lastName: ' gdcuhdsucgsd', age: 14},{firstname: 'SreeSanth', lastName: ' gdcuhdsucgsd', age: 2},{firstname: 'Vijay', lastName: ' gdcuhdsucgsd', age:34},{firstname: 'Pavan', lastName: ' gdcuhdsucgsd', age: 67}]
// const validatesersList = FilterOutUsers(userList);

// console.log("The Valid Users are :")
// for(let i = 0;i < validatesersList.length;i++)
//     console.log(validatesersList[i]);