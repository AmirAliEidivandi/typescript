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
var Delivery = /** @class */ (function () {
    function Delivery() {
    }
    Delivery.getDetails = function () {
        console.log("hello world");
    };
    return Delivery;
}());
Delivery.getDetails();
var ExpressPost = /** @class */ (function (_super) {
    __extends(ExpressPost, _super);
    function ExpressPost() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "hello";
        return _this;
    }
    /**
     * send
     */
    ExpressPost.prototype.send = function () {
        // by express post
        return true;
    };
    return ExpressPost;
}(Delivery));
var expressPost = new ExpressPost();
console.log(expressPost.type);
console.log(expressPost.send());
var Tipax = /** @class */ (function (_super) {
    __extends(Tipax, _super);
    function Tipax() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "tipax";
        return _this;
    }
    /**
     * send
     */
    Tipax.prototype.send = function () {
        return true;
    };
    return Tipax;
}(Delivery));
