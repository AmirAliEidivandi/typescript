class Payment {
    isAdmin: boolean;
    public type: string;
    public amount: number;
    private owner: boolean;
    protected order: number;
    protected firstName: string;
    protected lastName: string;

    constructor(type: string, amount: number, isAdmin: boolean, owner: boolean) {
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
    constructor(type: string, amount: number, isAdmin: boolean, owner: boolean) {
        super(type, amount, isAdmin, owner);
        this.firstName = "mohammad";
        this.lastName = "rezaei";
    }

    /**
     * getOnlineDetails
     */
    public getOnlineDetails() {
        console.log(`${this.order}`);
    }

    public getUser() {
        console.log(`class: ${this.firstName}`);
    }
}

const op = new OnlinePayment("offline", 50000, false, true);
op.getOnlineDetails();
op.getUser();
