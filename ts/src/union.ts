function getPrice(amount: number, format: boolean): number | string {
    return format ? `$${amount}` : amount;
}

const result: string = getPrice(20, true) as string;
console.log(result.concat(" amirali"));

const result2: number = <number>getPrice(40, false);
console.log(result2);