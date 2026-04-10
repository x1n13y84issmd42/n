import { forEachProp } from "./functions";

describe('forEachProp', () => {
	it('iterates', () => {
		const input = [
			{n: 'a1', v: 1},
			{n: 'a10', v: 10},
			{n: 'a2', v: 2},
			{n: 'a11', v: 11},
			{n: 'a3', v: 3},
			{n: 'a12', v: 12},
		];

		const expected = [1, 10, 2, 11, 3, 12];

		const actual = Array.from(forEachProp(input, 'v'));

		expect(actual).toStrictEqual(expected);
	});
});