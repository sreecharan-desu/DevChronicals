//given an array and give me a new array in which every element is multiplied by 2

array = [1,2,3]

//Traditional


// Assignment

//create a mapFn that takes an array and a  transform FN 
//as input and returns the transfrmed array as output...

transformLogic = (arr)=>{
    for (let i = 0 ; i < arr.length ; i++){
        arr[i] = arr[i] * 2;
    }
    return arr;
}
mapFN = (array , fn)=>{
    newArray = fn(array);
    return newArray;
}

console.log(mapFN(array,transformLogic));


// console.log(mapArray(array , 4));


//using Map

// newArray = array.map((i)=>{
//     return i*2;
// });

// console.log(newArray);