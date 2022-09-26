// - Implement the `counter` function according to requirements:
// - Function accepts a number as the first argument. This number represents the initial value for the counter.
// - If no value passed to a function, use `0` as initial value.
// - Function returns array with two function:
// - First function allows us to get the current counter value.
// - Second function increases the internal counter value by one.
// - Multiple calls of `counter` function create independent instances of counter


export const counter = (initialValue = 0) => {
    let value = initialValue

    const get = () => value
    const next = () => value++

    return [get, next]
}

// export function counter() {
// }
// const [getA, nextA] = counter(1);
// getA(); // 1
// nextA();
// getA(); // 2
// const [getB, nextB] = counter(10);
// nextB();
// getA(); // 2
// getB(); // 11
// nextA();
// getA(); // 3
// getB(); // 11