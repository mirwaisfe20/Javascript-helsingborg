/* 
    create a variable called monthNumber, that if put a number between 1 to 12 which monthg is it in string.
*/


const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12]

const monthNumber = months[0];
const hasPaid = false;

function specialGreeting(){
    console.log('woo you are premium user')
}


switch(monthNumber){
    case 1:
        if(hasPaid){
            specialGreeting();
        }
        
        break;

    case 2:
        console.log('Feb');
        break;

    case 3: 
        console.log('Mar');
        break;

    case 4: 
        console.log('Apr');
        break;

    case 5: 
        console.log('May');
        break;
    
    case 6: 
        console.log('Jun');
        break;

    case 7: 
        console.log('Jul');
        break;

    case 8: 
        console.log('Aug');
        break;

    case 9: 
        console.log('Sep');
        break;

    case 10: 
        console.log('Oct');
        break;

    case 11: 
        console.log('Nov');
        break;

    case 12:
        console.log('Dec');
        break;

    default:
        console.log('Enter a number between 1 - 12');
        break;
}



if(monthNumber == 1){
    
} else if (monthNumber == 2){
    console.log('Feb')
} else if (monthNumber == 3){
    console.log('Mar')
} else if(monthNumber == 4){
    console.log('Apr')
} else if(monthNumber == 5){
    console.log('May')
} else if(monthNumber == 6){
    console.log('Jun')
} else if(monthNumber == 7){
    console.log('Jul')
} else if(monthNumber == 8){
    console.log('Aug')
} else if(monthNumber == 9){
    console.log('Spe')
} else if(monthNumber == 10){
    console.log("Oct")
} else if(monthNumber == 11){
    console.log('Nov')
} else if(monthNumber == 12){
    console.log('Dec')
} else {
    console.log('Enter a number betweeen 1 - 12')
}