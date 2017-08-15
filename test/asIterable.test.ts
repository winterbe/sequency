import {sequenceOf} from "../src/Sequence";

describe("asIterable", () => {
    it("should be iterable via for-of", () => {
        const iterable = sequenceOf(1, 2, 3)
            .asIterable();
        const nums = [];
        for (let num of iterable) {
            nums.push(num);
        }
        expect(nums.length).toBe(3);
        expect(nums[0]).toBe(1);
        expect(nums[1]).toBe(2);
        expect(nums[2]).toBe(3);
    });
});