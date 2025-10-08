// Description:
// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].



// I need a function that takes in a list of ages

// I want to find the oldest and youngest ages in that list
// The oldest would be the maximum value
// The youngest would be the minimum value

// I would then find the difference between them

// I then want to return all the ages


// My solution
function differenceInAges(ages){

    let youngest = Math.min(...ages);
    let oldest = Math.max(...ages);
    let diff = oldest - youngest;
    return [youngest, oldest, diff];
    
    
    }