import {sequenceOf} from "../src/index";

describe("onEach", () => {
    it('should call action for each element', () => {
        const array = [];
        const result = sequenceOf(1, 2, 3)
            .onEach(it => array.push(it))
            .toArray();
        expect(array[0]).toBe(result[0]);
        expect(array[1]).toBe(result[1]);
        expect(array[2]).toBe(result[2]);
    });
});