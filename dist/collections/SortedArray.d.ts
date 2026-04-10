type Comparator<T> = T extends number ? never : T extends string ? never : (a: T, b: T) => boolean;
declare abstract class ArraySorted<T> extends Array<T> {
    private limit?;
    protected compare?: Comparator<T>;
    constructor(limit?: number, compare?: Comparator<T>);
    push(v: T): number;
    protected abstract findInsertIndex(v: T): number;
}
export declare class ArraySortedDesc<T> extends ArraySorted<T> {
    protected findInsertIndex(v: T): number;
}
export {};
