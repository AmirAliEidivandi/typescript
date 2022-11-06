"use strict";
class Payment {
    constructor(type, amount, isAdmin, owner) {
        this.type = type;
        this.amount = amount;
        this.owner = owner;
        this.order = 10;
        this.isAdmin = isAdmin;
        this.firstName = "amirali";
        this.lastName = "eidivandi";
    }
    getDetails() {
        const { firstName, lastName, isAdmin, owner } = this;
        console.log(`firstName: ${firstName} - lastName: ${lastName} - Admin: ${isAdmin} - owner: ${owner}`);
    }
}
const p = new Payment("online", 50, true, false);
p.getDetails();
console.log(p.amount);
console.log(p.type);
class OnlinePayment extends Payment {
    constructor(type, amount, isAdmin, owner) {
        super(type, amount, isAdmin, owner);
        this.firstName = "mohammad";
        this.lastName = "rezaei";
    }
    /**
     * getOnlineDetails
     */
    getOnlineDetails() {
        console.log(`${this.order}`);
    }
    getUser() {
        console.log(`class: ${this.firstName}`);
    }
}
const op = new OnlinePayment("offline", 50000, false, true);
op.getOnlineDetails();
op.getUser();
