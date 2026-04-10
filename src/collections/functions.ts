export function forEachProp<T, K extends keyof T>(c: Iterable<T>, prop: K): Iterable<T[K]> {
	const i1 = Iterator.from(c);

	const i2 = {
		next(): IteratorResult<T[K]> {
			const v = i1.next();
			return {
				done: v.done,
				value: v.value ? v.value[prop] : undefined,
			};
		}
	};

	return {[Symbol.iterator]: () => i2};
}
