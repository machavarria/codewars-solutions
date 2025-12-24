// Description:
// Write an algorithm that will identify valid IPv4 addresses in dot-decimal 
// format. IPs should be considered valid if they consist of four octets, 
// with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string


// My solution
// So first a valid IP address has 4 parts to it that is separated by by dots
// In the algorithm it should only contain digits and be between 0 and 255
// And also should not lead with zeros
// If the algorithm doesn't work then it will return false

function isValidIP(str) {
  const parts = str.split(".");
  
  if (parts .length !== 4) return false;
  
  for  (let part of parts) {
    if (!/^\d+$/.test(part)) return false;
    
    if (part.length > 1 && part[0] === "0") return false;
    
    const num = Number(part);
    
    if (num < 0 || num > 255) return false;
  }
  return true;
}
