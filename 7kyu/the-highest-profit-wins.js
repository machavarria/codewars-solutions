// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.




// I can use Math.min() and Math.max() to find the smallest and largest values 
// Math.min() and Math.max() will only work with the numbers by themselves but not in an array 



// My solution
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)]; // fix me!
}


//Couldn't solve at first but then went on MDN to find how to seperate the numbers
// Found that the Spread syntax (...) can seperate the numbers and solve it