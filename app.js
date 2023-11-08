// User age.
let myAge = 31;

// Early dog years
let earlyYears = 2;

earlyYears *= 10.5;
// EarlyYears have already been accounted for.
laterYears = myAge - 2;
// Dog years accounted for by the users later years.
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

myAgeInDogYears = earlyYears + laterYears;
// Users name in lover case
let myName = 'Alexis'.toLocaleLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years. `);