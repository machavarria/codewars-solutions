// Description:
// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)


// How many digits are in the number 
// There's a negative number so I'll have to make it positive 
// I'll need to make the number into a string so I can check how many digits it has
// I'll need to check the length


// My solution
function multiply(number){
    let result = Math.abs(number).toString().length;
    return number * (5 ** result);
}