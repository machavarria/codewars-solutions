// Description:
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12



// There's four quarters in the year
// Q1, Q2, Q3, Q4
// For each quarter it conatains 3 months
// If I use a conditional I can check where the months fall into 



//My solution
const quarterOf = (month) =>{
    if (month <= 3) {
      return 1
    } else if (month <= 6){
      return 2
    } else if (month <= 9){
      return 3
    } else if (month <= 12){
      return 4
    }
    
}