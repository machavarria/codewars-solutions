// Description:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1] 


// I'll need an array to hold the numbers
// To start I'll need an empty array
// Need a for loop using n and then goes to 1



// My solution
const reverseSeq = n =>{
    let results = [];
    for (let i = n; i > 0; i--){
      results.push(i);
    }
    return results;
};