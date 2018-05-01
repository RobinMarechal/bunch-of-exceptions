export default class ExceptionSet {
    constructor(...exceptions) {
        this.size = 0;
        this.exceptions = [];

        exceptions.forEach((exc) => this.add(exc));
    }

    add(exception) {
        this.size++;
        this.exceptions.push(exception);
    }

    get(index) {
        return this.exceptions[index];
    }

    [Symbol.iterator]() {
        let index = 0;
        const size = this.size;
        const exceptions = this.exceptions;

        return {
            next: () => ({
                    value: exceptions[index++],
                    done: index === size,
                }
            ),
        };
    }
}