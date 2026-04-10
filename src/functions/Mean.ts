export function Mean(c: Iterable<number>): number {
	let res = 0, count = 0;

	for (let v of c) {
		res = res * (count/(count+1)) + v / (count + 1);
		count++;
	}
	
	return res;
}
