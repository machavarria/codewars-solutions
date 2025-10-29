// Description:
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"


// I need to take the full name string 
// Then split the string into an array 
// Then I need to join them back into single strings 

// My solution 
function nameShuffler(str){
    return str.split(' ').reverse().join(" ");
}