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

describe(`1342. Number of Steps to Reduce a Number to Zero. Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.`, () => {
    test.each([
        { num: 0, expected: 0 },
        { num: 1, expected: 1 },
        { num: 2, expected: 2 },
        { num: 3, expected: 3 },
        { num: 4, expected: 3 },
        { num: 5, expected: 4 },
        { num: 6, expected: 4 },
        { num: 7, expected: 5 },
        { num: 8, expected: 4 },
        { num: 9, expected: 5 },
        { num: 10, expected: 5 },
        { num: 11, expected: 6 },
        { num: 14, expected: 6 },
        { num: 123, expected: 12 },
        { num: 1230, expected: 16 },
        { num: 123123, expected: 26 },
        { num: 1231293, expected: 32 },
    ])(`$num => $expected steps to zero`, ({ num, expected }) => {
        expect(numberOfSteps(num)).toEqual(expected);
    });
});
