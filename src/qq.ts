import { ArraySortedDesc } from "./collections/SortedArray";


const a = new ArraySortedDesc(3);
a.push(5);
a.push(2);
a.push(1);
a.push(3);
a.push(0);
a.push(0);
a.push(10);

console.dir({a});

for (let i of a) {
	console.log(i);
}