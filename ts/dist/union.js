"use strict";
function getPrice(amount, format) {
    return format ? "$".concat(amount) : amount;
}
var result = getPrice(20, true);
console.log(result.concat(" amirali"));
var result2 = getPrice(40, false);
console.log(result2);
