// function greetUser(username:string){
//     console.log("Hello " + username);
// }

// greetUser('SreeCharan');


// function sum(firstNum:number,secondNumber:number):number{
//     return firstNum+secondNumber
// }

// const value = sum(1,2);
// console.log(value);


// function isAdult(age:number):boolean{
//     if(age>18){
//         return true;
//     }else{
//         return false;
//     }
// }
// const isadult =isAdult(21);
// if(isadult){console.log('Yes')}
// else{console.log('No')}

// function RunAfterOneSec(callback:()=>void){
//     setTimeout(()=>{callback()},1000);
// }

// function HelloWord(){
//     console.log("Hello world");
// }

// RunAfterOneSec(HelloWord);


// interface 

    // used to assign the Type to the object

// interface User{
//     firstName : string,
//     LastName :string,
//     age :number,
//     email?:string 
// }


//Types
    //Types and interfaces are almost the same but the main difference is 
    // an interface can be implemented further whereas types cannot be implemented


// type User2 = {
//     firstName : string,
//     LastName :string,
//     age :number,
//     email?:string   
// }



// function isLeagal(user : User):boolean{
//     if(user.age >= 18){
//         return true;
//     }else{
//         return false;
//     }  
// }

// const val:boolean = isLeagal({
//     firstName : 'SreeCharan',
//     LastName : 'Desu',
//     age : 18
// });


// if(val){
//     console.log("Leagal")
// }else{
//     console.log('Not Leagal')
// }






