"use strict";
class Delivery {
    static getDetails() {
        console.log("hello world");
    }
}
Delivery.getDetails();
class ExpressPost extends Delivery {
    constructor() {
        super(...arguments);
        this.type = "hello";
    }
    /**
     * send
     */
    send() {
        // by express post
        return true;
    }
}
const expressPost = new ExpressPost();
console.log(expressPost.type);
console.log(expressPost.send());
class Tipax extends Delivery {
    constructor() {
        super(...arguments);
        this.type = "tipax";
    }
    /**
     * send
     */
    send() {
        return true;
    }
}
