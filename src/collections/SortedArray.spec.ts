import { ArraySortedDesc } from "./SortedArray";

describe('ArraySortedDesc', function () {
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
		const a = new ArraySortedDesc(3);
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
});