"use strict";
let userData = ["hello", 10, 40];
var Order_Status;
(function (Order_Status) {
    Order_Status[Order_Status["PENDING"] = 15] = "PENDING";
    Order_Status[Order_Status["COMPLETED"] = 16] = "COMPLETED";
    Order_Status[Order_Status["REFUNDED"] = 17] = "REFUNDED";
    Order_Status[Order_Status["CANCELED"] = 18] = "CANCELED";
})(Order_Status || (Order_Status = {}));
console.log(Order_Status.REFUNDED);
