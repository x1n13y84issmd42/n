import { Mean } from "./Mean";

export function StdDev(c: Iterable<number>): number {
	let sum = 0;
	let N = 0;
	const m = Mean(c);

	for (const v of c) {
		sum += (v - m) * (v - m) 
		N++;
	}

	return Math.sqrt(sum / N);
}
