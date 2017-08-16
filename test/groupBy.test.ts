import {sequenceOf} from "../src/Sequence";

describe("groupBy", () => {
    it("should group by keySelector", () => {
        const a = {k: 1, v: 11};
        const b = {k: 2, v: 22};
        const c = {k: 3, v: 33};
        const d = {k: 2, v: 222};

        const map = sequenceOf(a, b, c, d)
            .groupBy(it => it.k);

        expect(map.size).toBe(3);
        expect(map.get(1)[0]).toBe(a);
        expect(map.get(2)[0]).toBe(b);
        expect(map.get(2)[1]).toBe(d);
        expect(map.get(3)[0]).toBe(c);
    });
});