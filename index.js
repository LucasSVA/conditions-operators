// --- ex-1

const test = 143
const bis = 213


// if (test === bis) {
//     console.log("this is false");
// }

// if (test <= bis) {
//     console.log("this is true");
// }

// if (bis > test) {

//     console.log("this is true");
// }

// if (test < bis) {
//     console.log("this is true");
// }

// if (test !==143) {
//     console.log("this is false");

// }

// if (test != bis) {
//     console.log("this is true");

// }



// --- ex -2

// const limit = 50
// const score = 64

// if (score >= limit) {
//     console.log("OK Good!");
// } else {
//     console.log("Oh nooo!!");
// }

// if (limit >= score) {
//     console.log("Ok good!");

// } else {
//     console.log("OH nooo");
// }


// ----ex-3

// const password = 'azerty'

// if (password.length == 5) {
//     console.log("The password is secure");

// } else {
//     console.log(password.length);
// }


// --- ex-4

// const password = 'azerty'
// const limit = 50
// const score = 64

// if (password.length === 6 && (score > limit)) {

//     console.log("Everithing is good");

// }

// if (password.length === 5 || (score > limit)) {

//     console.log("Something is good");

// }

// if (password.length === 5 || (limit > score)) {
//     console.log("everithisng is good");

// } else {
//     console.log("Nothing is good");
// }


// ---- ex -5


// const random = Math.round(Math.random() * 6)

// if (random === 6) {
//     console.log("Yes I win");

// } else {
//     console.log("So close");
// }



// ---- ex-6

// const month = "Winter"

// switch (month) {
//     case "Winter":
//         console.log("It's winter now");
//         break;
//     case "Spring":
//         console.log("It's winter now");
//         break;
//     case "Summer":
//         console.log("It's summer now");
//         break;

//     default:
//         console.log("Fall");
//         break;
// }


// ---- ex- 7

// const roundedNumber = 3.8

// if ((roundedNumber - Math.floor(roundedNumber) < (Math.ceil(roundedNumber) - roundedNumber))) {


//     console.log(Math.floor(roundedNumber));

// } else {
//     console.log(Math.ceil(roundedNumber));

// }


// ---- ex-8



const number = 45.3
const myString = number.toString()
const pointPosition = myString.indexOf('.') + 1
const myNumber = myString.substring(pointPosition)
const newString = Number(myNumber)

if (newString >= 5) {
    console.log(Math.ceil(number));
} else {
    console.log(Math.floor(number));
}
























