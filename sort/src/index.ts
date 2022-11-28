// import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10000000000, 3, -5, -7, 40000, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Xaayb");
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
