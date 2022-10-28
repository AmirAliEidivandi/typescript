"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Payment = /** @class */ (function () {
    function Payment(type, amount, isAdmin, owner) {
        this.type = type;
        this.amount = amount;
        this.owner = owner;
        this.order = 10;
        this.isAdmin = isAdmin;
        this.firstName = "amirali";
        this.lastName = "eidivandi";
    }
    Payment.prototype.getDetails = function () {
        var _a = this, firstName = _a.firstName, lastName = _a.lastName, isAdmin = _a.isAdmin, owner = _a.owner;
        console.log("firstName: ".concat(firstName, " - lastName: ").concat(lastName, " - Admin: ").concat(isAdmin, " - owner: ").concat(owner));
    };
    return Payment;
}());
var p = new Payment("online", 50, true, false);
p.getDetails();
console.log(p.amount);
console.log(p.type);
var OnlinePayment = /** @class */ (function (_super) {
    __extends(OnlinePayment, _super);
    function OnlinePayment(type, amount, isAdmin, owner) {
        var _this = _super.call(this, type, amount, isAdmin, owner) || this;
        _this.firstName = "mohammad";
        _this.lastName = "rezaei";
        return _this;
    }
    /**
     * getOnlineDetails
     */
    OnlinePayment.prototype.getOnlineDetails = function () {
        console.log("".concat(this.order));
    };
    OnlinePayment.prototype.getUser = function () {
        console.log("class: ".concat(this.firstName));
    };
    return OnlinePayment;
}(Payment));
var op = new OnlinePayment("offline", 50000, false, true);
op.getOnlineDetails();
op.getUser();
