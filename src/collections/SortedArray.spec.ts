import { ArraySortedDesc } from "./SortedArray";


describe('ArraySortedDesc', function () {
	type Node = {v: number;};

	it("is sorted", async function () {
		const a = new ArraySortedDesc();
		a.push(1);
		a.push(2);
		a.push(0);
		a.push(5);
		a.push(1);
		a.push(11);
		a.push(0);
		a.push(2);
		a.push(22);

		expect([...a]).toEqual([22, 11, 5, 2, 2, 1, 1, 0, 0]);
	});
	
	it("is capped", async function () {
		const a = new ArraySortedDesc<number>(3);
		a.push(1);
		a.push(2);
		a.push(0);
		a.push(5);
		a.push(3);
		a.push(0);
		a.push(2);
		a.push(33);
		a.push(111);
		
		expect([...a]).toEqual([111, 33, 5]);
	});

	it("objects", async function () {
		const a = new ArraySortedDesc<Node>(3, (a, b) => a.v < b.v);
		a.push({v: 1});
		a.push({v: 2});
		a.push({v: 0});
		a.push({v: 5});
		a.push({v: 3});
		a.push({v: 0});
		a.push({v: 2});
		a.push({v: 33});
		a.push({v: 111});
		
		expect([...a]).toEqual([{v: 111}, {v: 33}, {v: 5}]);
	});

	it("doesn't have extra props", async function () {
		const a = new ArraySortedDesc<Node>(3, (a, b) => a.v < b.v);
		expect([...a.entries()]).toEqual([]);
		expect([...a.keys()]).toEqual([]);
	});
});