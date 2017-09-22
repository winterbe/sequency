import {sequenceOf} from "../src/Sequence";

describe("merge", () => {
    it("should merge both sequences", () => {
        const result = sequenceOf({id: 1, val: "a"}, {id: 2, val: "b"}, {id: 3, val: "c"})
            .merge(sequenceOf({id: 2, val: "bb"}), it => it.id)
            .toArray();
        expect(result).toEqual([{id: 1, val: "a"}, {id: 2, val: "bb"}, {id: 3, val: "c"}]);
    });

    it("should merge given array", () => {
        const result = sequenceOf({id: 1, val: "a"}, {id: 2, val: "b"}, {id: 3, val: "c"})
            .merge([{id: 2, val: "bb"}], it => it.id)
            .toArray();
        expect(result).toEqual([{id: 1, val: "a"}, {id: 2, val: "bb"}, {id: 3, val: "c"}]);
    });

    it("should merge both sequences and append new values", () => {
        const result = sequenceOf({id: 1, val: "a"}, {id: 2, val: "b"}, {id: 3, val: "c"})
            .merge(sequenceOf({id: 2, val: "bb"}, {id: 4, val: "d"}), it => it.id)
            .toArray();
        expect(result).toEqual([{id: 1, val: "a"}, {id: 2, val: "bb"}, {id: 3, val: "c"}, {id: 4, val: "d"}]);
    });

    it("should merge both sequences and prepend new values", () => {
        const result = sequenceOf({id: 1, val: "a"}, {id: 2, val: "b"}, {id: 3, val: "c"})
            .merge(sequenceOf({id: 2, val: "bb"}, {id: 4, val: "d"}), it => it.id, true)
            .toArray();
        expect(result).toEqual([{id: 4, val: "d"}, {id: 1, val: "a"}, {id: 2, val: "bb"}, {id: 3, val: "c"}]);
    });
});