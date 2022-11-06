"use strict";
class UserEntity {
    constructor(name) {
        this.name = name;
        name;
    }
    getName() {
        return this.name;
    }
}
class ProductEntity {
    constructor(name) {
        this.name = name;
        name;
    }
    getName() {
        return this.name;
    }
}
class DataCollection {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    printNames() {
        this.items.forEach((item) => {
            if (item instanceof UserEntity || item instanceof ProductEntity) {
                console.log(`user name is ${item.getName()}`);
            }
            else {
                console.log(item);
            }
        });
    }
}
const userCollection = new DataCollection();
userCollection.addItem(new UserEntity("amirali"));
userCollection.addItem(new UserEntity("ali"));
userCollection.addItem(new UserEntity("mohammad"));
userCollection.addItem(new UserEntity("reza"));
userCollection.printNames();
const productCollection = new DataCollection();
productCollection.addItem(new ProductEntity("product 1"));
productCollection.addItem(new ProductEntity("product 2"));
productCollection.addItem(new ProductEntity("product 3"));
productCollection.addItem(new ProductEntity("product 4"));
productCollection.printNames();
const stringCollection = new DataCollection();
stringCollection.addItem("string 1");
stringCollection.addItem("string 2");
stringCollection.printNames();
