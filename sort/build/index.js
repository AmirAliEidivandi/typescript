"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { NumbersCollection } from "./NumbersCollection";
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([10000000000, 3, -5, -7, 40000, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection("Xaayb");
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
