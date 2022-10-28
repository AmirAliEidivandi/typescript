function calculateDiscount(amount: number, discount: any = 10) {
    if (amount === 0) {
        return 0;
    }

    return amount * ((100 - discount) / 100);
}

const finalPrice = calculateDiscount(180000, undefined);
console.log(finalPrice);

function sum(...numbers: number[]): number {
    return numbers.reduce((total, current) => total + current, 0);
}

const sumResult = sum(10, 20, 30, 40);
console.log(sumResult);

function isAdmin(userId: number): boolean {
    return userId > 6;
}

const isAdminResult = isAdmin(5);
console.log(isAdminResult);
