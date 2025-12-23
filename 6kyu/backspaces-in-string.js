// Description:
// Assume "#" is like a backspace in string. 
// This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""


//My solution
// So the str will contain lowercase letters and have # which means backspace

// Once the function runs through properley then it will return a string will 
// all the backspaces applied to it

// What I would need to do is create an empty list result
// Then for each character in s, if the character is # then remove the last 
// element from the result if it exists and if anything else then add a
// character to the result
// After return the result joined as a string

function cleanString(s) {
  const stack = []
  
  for (let char of s) {
    if (char === "#") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}