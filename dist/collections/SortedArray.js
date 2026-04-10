class ArraySorted extends Array {
    limit;
    compare;
    constructor(limit, compare) {
        super();
        this.limit = limit;
        this.compare = compare;
        if (!this.compare) {
            this.compare = ((a, b) => a < b);
        }
    }
    push(v) {
        const i = this.findInsertIndex(v);
        this.splice(i, 0, v);
        if (this.limit && this.length > this.limit) {
            this.splice(this.limit);
        }
        return this.length;
    }
}
export class ArraySortedDesc extends ArraySorted {
    findInsertIndex(v) {
        let il = 0;
        let ir = this.length;
        while (il < ir) {
            const i = Math.floor((il + ir) / 2);
            if (!this[i])
                return i;
            if (this.compare(this[i], v)) {
                ir = i;
            }
            else {
                il = i + 1;
            }
        }
        return Math.max(il, 0);
    }
}
//# sourceMappingURL=SortedArray.js.map