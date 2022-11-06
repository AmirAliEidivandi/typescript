interface IObject {
    id: number;
    fName: string;
    lName: string;
    email: string;
}

const person: IObject = {
    id: 1,
    fName: "amirali",
    lName: "eidivandi",
    email: "amirali@gmail.com",
};

const user: { id: number; fName: string; lName: string; email: string } = {
    id: 2,
    fName: "ali",
    lName: "ahmadi",
    email: "aliAH@gmail.com",
};

type User = {
    id: number;
    name: string;
    email: string;
};

const user2: User = {
    id: 32,
    name: "ali",
    email: "ali@gmail.com",
};
