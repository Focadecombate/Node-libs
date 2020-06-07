import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([0, -5, -1, 10, 4]);
const charactersCollection = new CharactersCollection("XaaaIb");
const linkedList = new LinkedList();

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
