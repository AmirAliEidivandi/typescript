class Vehicle {
    constructor(public color: string) {}

    public honk(): void {
        console.log("beep");
    }

    protected hi(): void {
        console.log("hhhelllllllooo amiraliiiiiiii");
    }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);
vehicle.honk();

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drive(): void {
        console.log("beepppppp");
        console.log(this.wheels);
    }

    startDrivingProcess(): void {
        this.drive;
    }
}

const car = new Car(5, "red");
car.honk();
car.startDrivingProcess();
