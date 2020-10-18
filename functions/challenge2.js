const celsiusValue = 35;
/* Challenge 2: Celsius to Farenheit
    formula: F = (C * 1.8) + 32

    write named function expression "tempratureCalc"
    the function takes one argument "degree" which will be in Clesius
    create a variable "result"
    start converting using the formalu and save the calculation in "result"
    
    at the end, print the result using template string saying "in Farenheit: ${variable}"
*/



const celsius = function tempratureCalc(degree){
    let result;
    
    result = (degree * 1.8) + 32;

    return result;
}

console.log(celsius(celsiusValue))