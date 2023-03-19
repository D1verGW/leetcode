import { describe, expect, test } from '@jest/globals';

function runningSum(nums: number[]): number[] {
    return nums.reduce((acc, cur, i) => {
        acc[i] = acc[i - 1] ? acc[i - 1] + cur : cur;

        return acc;
    }, []);
}

describe('1480. Running sum of 1d Array. Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums', () => {
    test.each([
        { nums: [1], expected: [1] },
        { nums: [1, 2], expected: [1, 3] },
        { nums: [1, 2, 3, 4], expected: [1, 3, 6, 10] },
        { nums: [1, 1, 1, 1, 1], expected: [1, 2, 3, 4, 5] },
        { nums: [3, 1, 2, 10, 1], expected: [3, 4, 6, 16, 17] },
        { nums: [3, 1, 5, 10, 1], expected: [3, 4, 9, 19, 20] },
        { nums: [3, 1, 100, 14123, 1], expected: [3, 4, 104, 14227, 14228] },
    ])(`$nums => $expected`, ({ nums, expected }) => {
        expect(runningSum(nums)).toEqual(expected);
    });
});
