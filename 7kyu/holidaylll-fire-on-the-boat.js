// Description:
// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!



// make a function that will look for "Fire" and replace it with "~~"
// i can use split to split the string and split it whereever "Fire" comes up
// then i'll need to put them back togther so i'll join them but instead of "Fire" i'll put "~~"



// My solution
function fireFight (s){
    return s.split("Fire").join("~~");
}