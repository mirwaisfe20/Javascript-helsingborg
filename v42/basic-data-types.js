

/* ********************************************
  Two different main types of Data Structure
********************************************/





/*  Primitive Simple Structure
********************************************/

/* String */
const continents1 = 'Africa';
const continents2 = 'Europe';
const continents3 = 'Australia';
const continents4 = 'Asia';
const continents5 = 'Antaractica';
const continents6 = 'America';

/* Number */
const numOne = 1500;
const numTwo = 1800;
const numThree = 1600;
const numFour = 1900;
const numFive = 1200;
const numSix = 1700;



/* Booleans */
const isSheSmart = true;
const isHeDriving = false;
const isHeSleeping = false;
const IshePaidTheBillss = true;

/* Undefined */

let something;
let myGrade;

/* Symbol */

/* BigInt */
const veryBigNumber = 79800000000000000000000000000000000000000000000000;




/* Non Primitive : Complex structure
********************************************/



/* Data Structure: Array Object */
/* Array Country: continents, countries all citizens of array, they get all the benfits*/

const continents = ['Africa','Europe','Australia','Asia','Antaractica','America'];
const countries = ['USA','Norway','Sweden', 'Sweden','Sweden','Denmark', 'Sweden','Switzerland', 'Sweden','Maldives'];


console.log(countries.lastIndexOf('Sweden'))

const mix = ['jump', 45, 78, true, false, undefined];
const backetList = []
console.log(backetList)

continents.push('Mars')
continents.pop();
continents.shift()
continents.unshift('blue')
continents.splice(1, 1)
continents.indexOf('Antaractica');

const address = continents.indexOf('Antaractica');

continents.splice(address, 1);

/* console.log(address) */




/* Delete a specific element without typeing its position */

console.log(continents)

/* hello   olleh   what tahw */


const aPiece = continents.slice(0, 2);

const joined = continents.join(' ');
console.log(joined)

const words = joined.split(' ')

const newArr = Array.from(joined)

console.log(newArr)


/* Data Structure: Objects */



const prototype = {
    length: 6,
    sort: function(a,b){
        return a-b;
    },
    slice: function(arguments){
        return SpeechRecognitionResult;
    }

}

/* Data Structure: functions */

myGrade = 'true'