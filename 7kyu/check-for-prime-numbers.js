// Description:
// In this kata you will create a function to check a non-negative input to see if it is a prime number.

// The function will take in a number and will return True if it is a prime number and False if it is not.

// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Examples(input --> output)
// 0 --> false
// 1 --> false
// 2 --> true
// 11 --> true
// 12 --> false



// I'll need to write a function that tells me if a number is prime or not
// since prime numbers are greater than 1 then any number less than 2 is false 
// I'll use a loop to see if the number divides evenly
// if it does than it's not a prime number so then it will be false



// My solution
function isPrime(n){
    if (n < 2)
      return false;
    for (let i = 2; i < n; i++){
      if (n % i === 0)
        return false;
    }
    return true;
}