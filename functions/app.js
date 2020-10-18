
/* Global Environment / Global Scope */



const users = ['user1', 'user2'];
users[0]



const concert = {
    /* propety/properties */
    /* Object Scope */
    name: 'Tomorrowland',/* Value */
    orgaznizer: 'XYZ AB',
    type: 'Progress House',
    country: 'sweden',
    city: 'Norrkoping',
    isItFree: false,
    ageRestriction: false,
    price: '1500',
    artister: ['Arian', 'Beyonce', 'Ed Shreen', 'Lafy Gaga', 'Selena Gomez', 'Mariah Carey', 'Calvin Harri', 'Alesso'],
    
    discountFunc: function(){
        /* Function Scope */
        /* Number() , parseInt() */
        const intPrice = Number(this.price);
        /* 30% Discount */
        const discountAmount = (30 * intPrice) / 100;
        const total = intPrice - discountAmount;

        return total
    },

}


/* console.log(typeof concert.price)
console.log(typeof concert.discountFunc())
console.log(concert.discountFunc())
console.log(concert.country) 
console.log(concert.hasOwnProperty('location'))


Object.freeze(concert);

/* adding propety/ creating on the fly 
concert.foodTypes = ['veg', 'non-veg']
concert.city = 'Stockholm';
concert.weather = 'sunny';

/* Deleting a property 
delete concert.discountFunc
*/


/* looping through array inside an object */
const array = concert.artister;

/* Initialze
   test
   increament
*/
/* for(let i = 0; i < array.length; i++){
    console.log(`the location for ${array[i]} is ${i}`);
} */

for(let i = 0; i < concert.length; i++){
    console.log(concert[i])
}

const data = [];

for(let property in concert){
    console.log(typeof property);
}


/* Object keys */
const arryObj = Object.keys(concert);

/* Object values */
const arrValue = Object.values(concert);

/* Object Entries */
const arrayFromObject = Object.entries(concert);



/* looping thorugh two dimensinal arrays */
for(let [key, value] of arrayFromObject){
    if(typeof value === 'boolean'){
        console.log(value)
    }
    
}


/* Coersion */




/* console.log(arryObj)
console.log(arrValue)
console.log(arrayFromObject)
 */



















