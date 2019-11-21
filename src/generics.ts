function log<T>(value: T): T {
    console.log(value);
    return value;
}
log<string[]>(['a', ',b', 'c'])
log(['a', ',b', 'c'])

// type Log = <T>(value: T) => T
// let myLog: Log = log

// interface Log<T> {
//     (value: T): T
// }
// let myLog: Log<number> = log
// myLog(1)

class Log<T> {
    run(value: T) {
        console.log(value)
        return value
    }
}
let log11 = new Log<number>()
log11.run(1)
let log21 = new Log()
log21.run({ a: 1 })

interface Length {
    length: number
}
function logAdvance<T extends Length>(value: T): T {
    console.log(value, value.length);
    return value;
}
logAdvance([1])
logAdvance('123')
logAdvance({ length: 3 })
