"use strict";
var UserEntity = /** @class */ (function () {
    function UserEntity(name) {
        this.name = name;
        name;
    }
    UserEntity.prototype.getName = function () {
        return this.name;
    };
    return UserEntity;
}());
var ProductEntity = /** @class */ (function () {
    function ProductEntity(name) {
        this.name = name;
        name;
    }
    ProductEntity.prototype.getName = function () {
        return this.name;
    };
    return ProductEntity;
}());
var DataCollection = /** @class */ (function () {
    function DataCollection() {
        this.items = [];
    }
    DataCollection.prototype.addItem = function (item) {
        this.items.push(item);
    };
    DataCollection.prototype.printNames = function () {
        this.items.forEach(function (item) {
            if (item instanceof UserEntity || item instanceof ProductEntity) {
                console.log("user name is ".concat(item.getName()));
            }
            else {
                console.log(item);
            }
        });
    };
    return DataCollection;
}());
var userCollection = new DataCollection();
userCollection.addItem(new UserEntity("amirali"));
userCollection.addItem(new UserEntity("ali"));
userCollection.addItem(new UserEntity("mohammad"));
userCollection.addItem(new UserEntity("reza"));
userCollection.printNames();
var productCollection = new DataCollection();
productCollection.addItem(new ProductEntity("product 1"));
productCollection.addItem(new ProductEntity("product 2"));
productCollection.addItem(new ProductEntity("product 3"));
productCollection.addItem(new ProductEntity("product 4"));
productCollection.printNames();
var stringCollection = new DataCollection();
stringCollection.addItem("string 1");
stringCollection.addItem("string 2");
stringCollection.printNames();
