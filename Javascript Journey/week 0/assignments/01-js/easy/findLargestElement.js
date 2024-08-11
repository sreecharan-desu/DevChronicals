/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    largest_number = numbers[0]
    for( i = 0 ; i < numbers.length ; i++){
        if(numbers[i] > largest_number){
            largest_number = numbers[i]
        }
    }
    // console.log("The Largest number in the list [" + numbers + "] is : " + largest_number);
    return largest_number
}

list = [1,2,3,4,5,8,102,34,1,2,89,96]
findLargestElement(list)

module.exports = findLargestElement;