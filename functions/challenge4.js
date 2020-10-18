/* Challenge 4: minimum
    write a named function expression that takes two arguments x, y
    the function should return minimum of the two numbers
*/



const minimum = function minimumFunc(x, y){


    /* Conditionals:  if*/
    /* test to see if they are not equal */
    if(x != y){

    /* test1: if x is less than y */
    if(x < y){
        return x;
    }

    /* test1: if y is less than x */
    if(y < x){
        return y;
    }


        }

        return 'Enter a valid number';
}



console.log(minimum(500, 500))