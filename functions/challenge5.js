
const numbers = [2,45 ,79, 789, 13,978,768,49, 78, 130, 1500];
const number2 = [13,978,768,49, 78, 130, 1500];
/* Challenge 5: print each next even numbers
    write a named function expression that takes an array
    create an empty array "result"
    the function loops through array
    push every  even element insie result
    the function should return result
*/



const printNumbers = function printNumbersFunc(cuong){
    let result = [];

       /* the function loops through array */
    for(let i = 0; i < cuong.length; i++){
        
        /* Test to see if the element at the current iteration is even number */
        if(cuong[i] % 2 == 0){
            result.push(array[i])
        }
    }  

    /* Skapa loop */
   


    
    /* return the result of the function */
    return result;
}


/* Activation of the functions/ calling the function */

console.log(printNumbers(numbers, numbers2));


/* skapa ett var test*/

 