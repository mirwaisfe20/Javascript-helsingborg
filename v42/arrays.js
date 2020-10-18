
const phone = 'iphone';

const phones = ['zphone','galaxy','huawei','htc'];
const names = ['alex', 'mike'];







const grades = [85, 56, 99, 45, 25, 75, 70,80, 1000, 2000]

phones.push('blackberry')
phones.unshift('Google pixel')

phones.pop();
phones.shift();

phones[2] = 'myPhone';

/* const bestPhones = phones.slice(1, 3);
const soretdArray = phones.sort();
console.log(phones)
console.log(bestPhones)
console.log(soretdArray) */

/* fruits.sort(); 

grades.sort(function(a, b){
    return a - b;
});

console.log(fruits.indexOf('melons'));
fruits.splice(fruits.indexOf('melons'), 1)
console.log(fruits);
*/




/* console.log(`fruit Name: ${fruits[0][2]}`)
console.log(`Size: ${fruits[1][2]}`) */




const singerOne = {
    /* Personal information */
    name: 'Kanye west',
    gender: 'Male',
    age: '40',

    /* Music */
    genre: ['hiphop', 'opera'],
    albums: ['abc', 'jkl', 'xyz'],
    newReleased: 'sky is the limit',

    /* Address */
    country: 'USA',
    state: 'Cali',
    postalCode: '798654',

}


const singerTwo = {
    /* Personal information */
    name: 'Alesso',
    gender: 'Male',
    birthYear: '1991',
    currentYear: '2020',
    age: ageCalc(x, y),

    /* Music */
    genre: ['house music', 'Progressive'],
    albums: ['time', 'hero', 'summer'],
    newReleased: 'midnight',

    /* Address */
    
    state: 'Stockholm',
    postalCode: '465798',
    netWorth: '15000000',
    
    
}

function ageCalc (){
    return  singerTwo.currentYear - singerTwo.birthYear; /* concontention */
}



















console.log(singerTwo)

singerTwo.albums.splice(2, 1)

console.log(singerTwo.albums[2])