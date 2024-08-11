/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  //lowercasing
  str = str.toLowerCase();
  // console.log(str);
  //removing spaces
  let new_str='';
  for(i = 0; i < str.length; i++){
    if(str.charAt(i) == ' ' || str.charAt(i) == ',' || str.charAt(i) == '!' || str.charAt(i) == '.' || str.charAt(i) == '?' || str.charAt(i) == '@' || str.charAt(i) == '#'){ 
      continue
    }
    else{
      new_str += str[i];
    }
  }
  // console.log(new_str);
  let reversed_str = '';
  for( i = (new_str.length)-1 ; i >= 0 ; i--){
    reversed_str += new_str[i];
  }
  return true ? (reversed_str == new_str) : false
}

// console.log(isPalindrome("'Able, was I ere I saw Elba!'"))

module.exports = isPalindrome;
