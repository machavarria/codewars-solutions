// Description:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


// Need to find the length of the shortest word 
// I'll use split to split the string into individual words
// Then make a variable for the short word length 
// to go through all the words I'll use a loop to do that and check the length
// after looping through all the words it should give me the length of the shortest word 



// My solution
function findShort(s){
    let word = s.split(' ');
    let shortestWord = word[0].length;
    
    for (let i = 1; i < word.length; i++){
      if (word[i].length < shortestWord){
        shortestWord = word[i].length;
      }
    }
    return shortestWord;
}