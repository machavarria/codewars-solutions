// Description:
// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"





// I need to first split up the words and once I do that it will turn it into an array

// After that I need to reverse the words and then put them back together


// My solution
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }