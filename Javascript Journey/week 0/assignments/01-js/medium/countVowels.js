/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    
  vowels = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U']
  vowels_count = 0;
  for( i = 0 ; i < str.length ; i++){
    char = str.charAt(i);
    for(j = 0; j < vowels.length ; j++){
      if(vowels[j] == char){
        vowels_count++
      }
    }
  }

  return vowels_count

}

string = "SreeCharanDesu"
console.log("There are "+ countVowels(string) + " vowel(s) in the String`" + string + "`");

module.exports = countVowels;