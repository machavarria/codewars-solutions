// Description:
// In this simple exercise, you will write a function that takes two integers; n and limit; and returns a list of the multiples of n up to and possibly including limit.

// It is guaranteed that n > 0 and limit >= n.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// Examples
// n = 2; limit = 6 --> [2, 4, 6]
// n = 2; limit = 5 --> [2, 4]



// My solution - Worked on this one with my cohort table
function findMultiples(integer, limit) {
    let newArray = [];
    
    if(integer > 0 && limit >= integer) {
      for(let i = integer; i <= limit; i += integer){
          newArray.push(i)
        }
      }
      return newArray;
    }