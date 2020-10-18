
/* Type conversion within variables */

const age = 30;
const name = 'Klara';
const newAge = '24';

const strNumber = String(age)
const ageNumber = Number(newAge)



/* Type conversion within arrays */

const phones = ['iphone', 'blackberry', 'galaxy', 'Huawei']

const employee = {
    name: 'Emma',
    birthYear: '1985',
    currentYear: '2020'
}

const user = {
    name: 'alex',
    birthYear: '1990',
    id: '007',
    currentYear: '2020',
    ageCalculator: function(){
        return (this.currentYear - this.birthYear);
    }
}



function greeting(){
    console.log('Welcome back!')
}

function arrDetector(arr){
    //arr
    // check it if it's an array
    const isItAnArray = Array.isArray(arr); //true // false
    //true false
    // if its array print "Array"
    if(isItAnArray){
        console.log('Array')
    } else{
        console.log('Not Array')
    }
}


function canDrinkOrNot(person){
    // peron: the parameter

    // age limit: 18
    const ageLimit = 18;
    // check if parameter is not less then age limit

    if(person >= ageLimit){
        //do this
        console.log(`Yayyy! you can party tonight!`);
    } 
    
    else {
        console.log(`Get out! you need to go to school!`);
    }
}



function tempraturNotifier(tempratur){
    //tempratur

    //Temprature 0 - 40
    const veryCold = 5;
    const cold = 10;
    const warm = 20
    const hot = 30;
    const grill = 40;
    //conditionals

    if(tempratur <= veryCold){
        console.log(`--Weather Today-- : Very cold, get a warm jacket and gloves`)
    } 
    else if(tempratur <= cold && tempratur > veryCold ){
        console.log(`--Weather Today-- : Cold, get a nice jacket`)
    }
    else if(tempratur <= warm && tempratur > cold){
        console.log(`--Weather Today-- : Warm, Wear sporty`)
    } else if(tempratur <= hot && tempratur > warm){
        console.log(`--Weather Today-- : Hot, Wear shorts`)
    } else if(tempratur <= grill && tempratur > hot){
        console.log(`--Weather Today-- : Extreme Hot, you will be baked`)
    } else {
        console.log(`--Weather Today-- : Venus Hot, good luck`)
    }

}




const numberone = 9;
const numbertwo = 3;
const result = numberone % 3;


/* 

 Write a function that takes the numbers from 1 to 30.
 But for multiples of three print “Fizz” instead of the number.
 for the multiples of five print “Buzz”.
 For numbers which are multiples of both three and five print “FizzBuzz”. 


 between 1 - 30
 function fizzBuzz(){

 }

 fizzBuzz(25);
 
 */


/* Basic Arithmetic operators */


function fizzBuzz(number){
    if(number % 3 == 0) {
        console.log('Fizz')
    }

    if(number % 5 == 0){
        console.log('Buzz')
    }

    if((number % 3 == 0) && (number % 5 == 0)){
        console.log('FizzBuzz')
    } else {
        console.log(number)
    }
}
 





