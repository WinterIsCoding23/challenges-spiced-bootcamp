let value;
// value = true;
// value = '    ';
// value = '';
// value = 1;
// value = 0;
// value = null;
// value = -0;

// if (value) {
//     console.log('Value is Truthy. \t Value: ', value);
// } else {
//     console.log('Value is Falsy. \t Value: ', value);
// }

/* ------------------------
Conditions and comparative 
--------------------------- */
// const max = 10;
// let number = Math.random() * max;
// number = Math.floor(number);

// let number = Math.floor(Math.random() * max);
// console.log('Before Number is: ', number);
// if (number > 2) {
//     number--;
// } else {
//     number++;
// }
// console.log('After if Number is: ', number);

/* Other way of going it */
// let boolValue = number > 2;
// console.log('Before Number is: ', number);
// if (boolValue) {
//     number--;
// } else {
//     number++;
// }
// console.log('After if Number is: ', number);

/* Ternary Operator 
condition ? expressionIfTrue : expressionIfFalse
*/
// console.log('Before Number is: ', number);
// number > 2 ? number-- : number++;
// console.log('After if Number is: ', number);

/* If , else, else if */
// const animal = 'Cat';
// let emoji;

// if (animal === 'Dog') {
//     emoji = '🐶';
// } else if (animal === 'Tiger') {
//     emoji = '🐯';
// } else if (animal === 'Elephant') {
//     emoji = '🐘';
// } else if (animal === 'Cat') {
//     emoji = '🐱';
// } else if (animal === 'Monkey') {
//     emoji = '🐒';
// } else {
//     emoji = '❓';
// }

// console.log('Animal is: ', animal, '\t Emoji is: ', emoji);

/* ------------------------
Switch (condition)
    case theValueToCompare:
        what i want to do.
        break;
 ---------------------------- */

const animal = 'Bird';
let emoji;
switch (animal) {
    case 'Dog':
        emoji = '🐶';
        break;
    case 'Tiger':
        emoji = '🐯';
        break;
    case 'Elephant':
        emoji = '🐘';
        break;
    case 'Cat':
        emoji = '🐱';
        break;
    case 'Monkey':
        emoji = '🐒';
        break;
    default:
        emoji = '❓';
        break;
}
console.log('Animal is: ', animal, '\t Emoji is: ', emoji);

const max = 20;
let number = Math.floor(Math.random() * max);

console.log('Before Number is: ', number);
if (number > 2 && number < 10) {
    number--;
} else if (number > 10) {
    number -= 2;
} else {
    number++;
}
console.log('After if Number is: ', number);
