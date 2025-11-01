// Description:
// Write a function last that accepts a list and returns the last element in the list.

// If the list is empty:

// In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

// In languages that do not have an empty option, just return null



// in my function i'm looking to return the last element of a list 
// if the list has a built-in option or result type then i'll get the last element 
// if there is no empty option then it should return null 




// My solution
function last(arr){
    return arr.length ? arr.slice(-1)[0] : null;
}

// looked up slice on mdn since i want to return the elements in the new array 
// since i want the last element i can use .slice(-1) to start from the end of the array