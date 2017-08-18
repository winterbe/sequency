import Sequence from "./Sequence";

function onEach<T>(this: Sequence<T>, action: (value: T) => void): Sequence<T> {
    return this.map(it => {
        action(it);
        return it;
    });
}

export default onEach;