import { Mean } from "./Mean";

describe('Mean', () => {
	it('basic', () => {
		expect(Mean([1, 2, 3, 4])).toEqual(2.5);
	});

	it('empty', () => {
		expect(Mean([])).toEqual(0);
	});

	it('MAX_SAFE_INTEGER', () => {
		expect(Mean([
			Number.MAX_SAFE_INTEGER - 10,
			Number.MAX_SAFE_INTEGER - 8,
			Number.MAX_SAFE_INTEGER - 12,
			Number.MAX_SAFE_INTEGER - 8,
			Number.MAX_SAFE_INTEGER - 14,
			Number.MAX_SAFE_INTEGER - 10,
			Number.MAX_SAFE_INTEGER - 6])).toEqual(Number.MAX_SAFE_INTEGER - 11);
	});

	it.todo('MAX_VALUE');
});
