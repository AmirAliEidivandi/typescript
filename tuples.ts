const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi1: [string, boolean, number] = ["brown", true, 40];
const pepsi2: Drink = ["brown", true, 40];
const pepsi3: Drink = ["red", false, 50];
// const pepsi4: Drink = ["blue", 50, true];
