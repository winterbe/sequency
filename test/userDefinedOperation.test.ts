import Sequence, {augmentSequenceWithMixin, augmentSequenceWithOperator, sequenceOf} from "../src/Sequence";

declare module "../src/Sequence" {
    export default interface Sequence<T> {
        greetAll(this: Sequence<string>): string;
    }
}

describe("User defined operation", () => {
    it("should augment Sequence implementation prototype", () => {
        function greetAll(this: Sequence<string>): string {
            const names = this.joinToString({ separator: ", " });
            if (names.length === 0) {
                return "";
            } else {
                return "Hello " + names + " !";
            }
        }

        augmentSequenceWithOperator("greetAll", greetAll);

        const names = sequenceOf("John", "Bob", "Steve");
        const greetings = names.greetAll();
        expect(greetings).toBe("Hello John, Bob, Steve !");
    });
});

class FarewellAll {
    farewellAll(this: Sequence<string>): string {
        const names = this.joinToString({ separator: ", " });
        if (names.length === 0) {
            return "";
        } else {
            return "Farewell " + names + " !";
        }
    }
}

declare module "../src/Sequence" {
    export default interface Sequence<T> extends FarewellAll {
    }
}

describe("User defined operation mixin", () => {
    it("should augment Sequence implementation prototype", () => {
        augmentSequenceWithMixin(FarewellAll);
        const names = sequenceOf("John", "Bob", "Steve");
        const greetings = names.farewellAll();
        expect(greetings).toBe("Farewell John, Bob, Steve !");
    });
});
