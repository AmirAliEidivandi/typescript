class UserEntity {
    constructor(private name: string) {
        name;
    }

    public getName(): string {
        return this.name;
    }
}

class ProductEntity {
    constructor(private name: string) {
        name;
    }

    public getName(): string {
        return this.name;
    }
}

class DataCollection<T> {
    private items: T[] = [];

    public addItem(item: T) {
        this.items.push(item);
    }

    public printNames() {
        this.items.forEach((item: T) => {
            if (item instanceof UserEntity || item instanceof ProductEntity) {
                console.log(`user name is ${item.getName()}`);
            } else {
                console.log(item);
            }
        });
    }
}

const userCollection = new DataCollection<UserEntity>();

userCollection.addItem(new UserEntity("amirali"));
userCollection.addItem(new UserEntity("ali"));
userCollection.addItem(new UserEntity("mohammad"));
userCollection.addItem(new UserEntity("reza"));

userCollection.printNames();

const productCollection = new DataCollection<ProductEntity>();

productCollection.addItem(new ProductEntity("product 1"));
productCollection.addItem(new ProductEntity("product 2"));
productCollection.addItem(new ProductEntity("product 3"));
productCollection.addItem(new ProductEntity("product 4"));

productCollection.printNames();

const stringCollection = new DataCollection<string>();

stringCollection.addItem("string 1");
stringCollection.addItem("string 2");

stringCollection.printNames();
