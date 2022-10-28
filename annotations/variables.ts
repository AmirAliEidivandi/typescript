let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "blue", "brown", "black"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Objects
let point: { x: number; lastName: string; firstName: string } = {
    x: 10,
    firstName: "amirali",
    lastName: "amirali",
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotation
// 1) Function that returns the 'any' type
const json = '{"x": 20, "y": 30}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
// and initalizate it later
let words = ["red", "green", "blue"];
// let foundWords: boolean;
let foundWords = false;

for (let i = 0; i < words.length; i++) {
    if (words[1] === "green") {
        foundWords = true;
    }
}

// 3) Variables whose type cannot be inferred correctly
let numbers = [-10, -2, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
