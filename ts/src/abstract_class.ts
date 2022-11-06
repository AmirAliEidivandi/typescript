abstract class Delivery {
    abstract type: string;
    abstract send(): boolean;

    static getDetails(): void {
        console.log("hello world");
    }
}

Delivery.getDetails();

class ExpressPost extends Delivery {
    public type: string = "hello";

    /**
     * send
     */
    public send(): boolean {
        // by express post
        return true;
    }
}

const expressPost = new ExpressPost();
console.log(expressPost.type);
console.log(expressPost.send());

class Tipax extends Delivery {
    public type: string = "tipax";

    /**
     * send
     */
    public send(): boolean {
        return true;
    }
}
