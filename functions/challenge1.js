const text = 'hello'
const result = 'olleh'
/* Challenge 1: Reverse String 
    Create a function decalration "reverseString" that takes an arguement "string"
    inside function create an empty string "result"
    use for loops to iterate over "string" in reversed way
    save each loop item inside result
    at the end return the result
*/


function reverseString(string){
    let result = '';

    /* for(let i = 0; i < string.length; i++){
        console.log(string[i])
    } */

    for(let i = string.length - 1; i >= 0; i--){
        result = result + string[i];

        /* appending */
        /* result += string[i] */
    }

    return result;   
}



console.log(reverseString(text))



