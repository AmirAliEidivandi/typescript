"use strict";
function calculateDiscount(amount, discount) {
    if (discount === void 0) { discount = 10; }
    if (amount === 0) {
        return 0;
    }
    return amount * ((100 - discount) / 100);
}
var finalPrice = calculateDiscount(180000, undefined);
console.log(finalPrice);
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, current) { return total + current; }, 0);
}
var sumResult = sum(10, 20, 30, 40);
console.log(sumResult);
function isAdmin(userId) {
    return userId > 6;
}
var isAdminResult = isAdmin(5);
console.log(isAdminResult);
