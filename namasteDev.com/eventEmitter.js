class EventEmitter {
    constructor() {
        this.mp = new Map;
    }

    on(eventName, callback) {
        if (!this.mp.get(eventName)) {
            this.mp.set(eventName, [{ callback: callback, shouldBeCalledOnce: false }]);
        } else {
            this.mp.set(eventName, [...this.mp.get(eventName), { callback: callback, shouldBeCalledOnce: false }]);
        }
        console.log(this.mp)
    }

    once(eventName, callback) {
        if (!this.mp.get(eventName)) {
            this.mp.set(eventName, [{ callback: callback, shouldBeCalledOnce: true }]);
        } else {
            this.mp.set(eventName, [this.mp.get(eventName), { callback: callback, shouldBeCalledOnce: true }]);
        }
        console.log(this.mp)
    }

    off(eventName, callback) {
        this.mp.set(eventName, this.mp.get(eventName).reduce((item) => {
            return item.callback !== callback
        }));
        console.log(this.mp)
    }

    emit(eventName, ...args) {
        let tempArr = []
        if (this.mp.get(eventName)) {
            for (let i = 0; i < this.mp.get(eventName).length; i++) {
                this.mp.get(eventName)[i].callback(...args);
                if (!this.mp.get(eventName)[i].shouldBeCalledOnce) {
                    tempArr.push(this.mp.get(eventName)[i])
                }
            }
        }
        this.mp.set(eventName, tempArr);
        console.log(this.mp)
    }
}

const emitter = new EventEmitter();
const log = (...args) => console.log(...args);
emitter.on('sayHello', log);
emitter.on('sayHello', () => {
    console.log("Naman")
});

emitter.emit('sayHello', 'Hi!');

// emitter.once('sayHello', log)
// emitter.emit('sayBye', 'Hi!');

module.exports = EventEmitter