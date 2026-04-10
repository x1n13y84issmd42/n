abstract class ArraySorted<T> extends Array<T> {
	/**
	 * Creates an array that is always sorted and capped.
	 * @param limit Optional limit to the array size.
	 */
    constructor(private limit?: number) {
		//TODO: consider making it work with preallocated arrays.
		super();
	}

	/**
	 * It will insert the value according to the sorting.
	 * @param v Value.
	 * @returns New array length.
	 */
	push(v: T): number {
		const i = this.findInsertIndex(v);
		this.splice(i, 0, v);

		if (this.limit && this.length > this.limit) {
			this.splice(this.limit);
		}

		return this.length;
	}

	protected abstract findInsertIndex(v: T): number;
}

/**
 * An array that is always sorted in descending order.
 * Also can be capped.
 */
export class ArraySortedDesc<T> extends ArraySorted<T> {
	protected findInsertIndex(v: T): number {
		let il = 0;
		let ir = this.length;

		while (il < ir) {
			const i = Math.floor((il + ir) / 2);

			if (! this[i]) return i;
			if (this[i] < v) {
				ir = i;
			} else {
				il = i + 1;
			}
		}

		return Math.max(il, 0);
	}
}
