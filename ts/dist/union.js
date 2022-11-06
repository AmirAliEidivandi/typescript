"use strict";
function getPrice(amount, format) {
    return format ? `$${amount}` : amount;
}
const result = getPrice(20, true);
console.log(result.concat(" amirali"));
const result2 = getPrice(40, false);
console.log(result2);
