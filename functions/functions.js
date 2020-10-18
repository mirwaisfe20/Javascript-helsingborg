

/* Global Env */

const name = 'user';



/* Create a function */

function greeting(){
    /* function block */
    const message = 'Welcome to javascript';
   
}

/************************** Function Declaration **************************************/



/* add two numbers  */
/* Functions accepts an input and gives you back an output */
function addTwoNumbers(a , b){
    const total = a + b;
    const answer = false;
    return answer;
}

function multiply(x, y , z){
    
    return x * y * z;
}

/* write a function that take a string and reverse it */

function reverseStr(string){
    /* Initialzing a variable */
    let result;
    console.log(string)
    result = string.split('');
    console.log(result)
    const reversedArray = result.reverse();
    console.log(reversedArray)
    const reversedString = reversedArray.join('')
    console.log(reversedString)
    result = reversedString;
    console.log(result)
    return result;
}





/************************** Function Expressions **************************************/

/* Anonymoue function expression */
const total = function(){
    const a = 10;
    const b = 20;
    const result = a + b;

    return result;
} 


/* Call the function so you invoke it */
console.log(total())



/* Named function expression */
const newTotal = function newTotalFunc(){
    const a = 10;
    const b = 20;
    const result = a + b;

    return resultbc;
}

console.log(newTotal())




const text = 'hello'
const result = 'olleh'
/* Challenge 1: Reverse String 
    Create a function decalration "reverseString" that takes an arguement "string"
    inside function create an empty string "result"
    use for loops to iterate over "string" in reversed way
    save each loop item inside result
    at the end return the result
*/

const celsius = 35;
/* Challenge 2: Celsius to Farenheit
    formula: F = (C * 1.8) + 32

    write named function expression "tempratureCalc"
    the function takes one argument "degree" which will be in Clesius
    create a variable "result"
    start converting using the formalu and save the calculation in "result"
    
    at the end, print the result using template string saying "in Farenheit: ${variable}"
*/




/* Challenge 3: Triangle
    write an anonymouse function exression anc saved in a variable "triangle"
    inside the function, write a loop that makes seven calls to console.log to output the following triangle:
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/



/* Challenge 4: minimum
    write a named function expression that takes two arguments x, y
    the function should return minimum of the two numbers
*/

const numbers = [2,45 ,79, 789, 13,978,768,49, 78, 130, 1500]
/* Challenge 5: print each next even numbers
    write a named function expression that takes an array
    create an empty array "result"
    the function loops through array and pushs every next odd element insie result
    the function should return resulr 
*/


























