import { describe, test, expect } from '@jest/globals';

function numberOfSteps(num: number): number {
    let steps = 0;

    for (let i = num; i > 0; i) {
        if (i % 2 === 0) {
            i /= 2;
        } else {
            i -= 1;
        }

        steps++;
    }

    return steps;
}

describe('1342. Number of Steps to Reduce a Number to Zero', () => {
    test(`Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.`, () => {
        expect(numberOfSteps(14)).toEqual(6);
        expect(numberOfSteps(8)).toEqual(4);
        expect(numberOfSteps(123)).toEqual(12);
    });
});
