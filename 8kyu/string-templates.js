// Description:
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
function buildString(...template){
    return `I like #{template.join(',')}!`;
}


// Looking at the instructions I'm going to need to make a full sentence
// any argument that gets put in will be in an array
// the function looks set up fine but you wouldn't use '#' since that is not the right syntax
// instead you would put '$' since it's a template literal
// then add a space after the comma since you're adding multiple things


// My solution
function buildString(...template){
    return `I like ${template.join(', ')}!`;
}