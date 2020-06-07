"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([0, -5, -1, 10, 4]);
const charactersCollection = new CharactersCollection_1.CharactersCollection("XaaaIb");
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(2);
linkedList.add(-5);
linkedList.add(1);
linkedList.add(-4);
linkedList.sort();
numbersCollection.sort();
charactersCollection.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
