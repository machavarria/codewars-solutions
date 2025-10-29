// Description:
// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


// I'll need a variable to hold the string
// I'll need to repeat the string so I can use a loop that runs from 0 up to n
// Then in the loop it'll add the string n times


//My solutions
function repeatStr (n, s){
	let result = '';
  for (let i = 1; i <=n ; i++){
  	result += s;
  }
  return result;
}