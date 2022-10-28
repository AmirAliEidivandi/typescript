const add = (a: number, b: number): number => {
    return a + b;
}

const subtract = (a: number, b: number) => {
    a - b;
}

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message);
    // return 'hello';
    return undefined;
}

// const throwError = (message: string): never => {
//     if (!message) {
//         throw new Error(message);
//     }

//     return 'hello';
// }