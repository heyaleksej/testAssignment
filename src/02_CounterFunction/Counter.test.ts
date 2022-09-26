import React from 'react';
import { counter } from './Counter';


test("Counter should be work correctly", () => {
    const [getA, nextA] = counter(1);
    expect(getA()).toBe(1);
    nextA();
    expect(getA()).toBe(2);

    const [getB, nextB] = counter(10);
    nextB();
    expect(getA()).toBe(2);
    expect(getB()).toBe(11);

    nextA();
    expect(getA()).toBe(3);
    expect(getB()).toBe(11);
});