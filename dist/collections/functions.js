export function forEachProp(c, prop) {
    const i1 = Iterator.from(c);
    const i2 = {
        next() {
            const v = i1.next();
            return {
                done: v.done,
                value: v.value ? v.value[prop] : undefined,
            };
        }
    };
    return { [Symbol.iterator]: () => i2 };
}
//# sourceMappingURL=functions.js.map