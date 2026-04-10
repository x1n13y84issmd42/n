type Comparator<T> = T extends number ? never : 
	T extends string ? never :
		(a: T, b: T) => boolean;

abstract class ArraySorted<T> extends Array<T> {
	protected details: {
		limit?: number;
		compare?: Comparator<T>;
	} = {};
	/**
	 * Creates an array that is always sorted and capped.
	 * @param limit Optional limit to the array size.
	 */
    constructor(limit?: number, compare?: Comparator<T>) {
		//TODO: consider making it work with preallocated arrays.
		super();

		Object.defineProperty(this, 'details', {
			// writable: false,
			enumerable: false,
			// configurable: false,
		});

		this.details.compare = compare || ((a: T, b: T) => a < b) as Comparator<T>;
		this.details.limit = limit;
	}

	/**
	 * It will insert the value according to the sorting.
	 * @param v Value.
	 * @returns New array length.
	 */
	push(v: T): number {
		const i = this.findInsertIndex(v);
		this.splice(i, 0, v);

		if (this.details.limit && this.length > this.details.limit) {
			this.splice(this.details.limit);
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
			if (this.details.compare(this[i], v)) {
				ir = i;
			} else {
				il = i + 1;
			}
		}

		return Math.max(il, 0);
	}
}
