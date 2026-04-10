class ArraySorted extends Array {
    details = {};
    constructor(limit, compare) {
        super();
        Object.defineProperty(this, 'details', {
            enumerable: false,
        });
        this.details.compare = compare || ((a, b) => a < b);
        this.details.limit = limit;
    }
    push(v) {
        const i = this.findInsertIndex(v);
        this.splice(i, 0, v);
        if (this.details.limit && this.length > this.details.limit) {
            this.splice(this.details.limit);
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
            if (this.details.compare(this[i], v)) {
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