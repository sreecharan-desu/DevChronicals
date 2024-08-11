//enums
//perform specific activities based on the user input key Pressed

// enum KeysSchema{
//     UP,
//     DOWN,
//     LEFT,
//     RIGHT
// }

// const KeyPressed=(key:KeysSchema)=>{
//     if(key == KeysSchema.UP) console.log(KeysSchema.UP);
//     else if(key == KeysSchema.DOWN) console.log(KeysSchema.DOWN);
//     else if(key == KeysSchema.LEFT) console.log(KeysSchema.LEFT);
//     else if(key == KeysSchema.RIGHT) console.log(KeysSchema.RIGHT)
// }


// KeyPressed(KeysSchema.UP);




//Generics
// Generics let us create components that work with any data type while stil complaininig you the erros.
//Similar to the polymorphism concept
// Generics actually is a langauge independent concept

// function identity<T>(arg:T):T{
//     return arg;
// }
// const value1 = identity<string>('Sree');
// const value2 = identity<number>(2);


// console.log(value1.toUpperCase());


//Problem Statememt :  Write a function which Returns the first element of the array 

function ReturnFirstElement<T>(arr:T[]):T{
    return arr[0];
}


const firstElement1 = ReturnFirstElement<string>(['Sree','charan']);
const firstElement2 = ReturnFirstElement<number>([0,1]);


console.log(firstElement1)
console.log(firstElement2)
