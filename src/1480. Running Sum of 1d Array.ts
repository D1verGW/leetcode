import { describe, expect, test } from '@jest/globals';

function runningSum(nums: number[]): number[] {
    return nums.reduce((acc, cur, i) => {
        acc[i] = acc[i - 1] ? acc[i - 1] + cur : cur;

        return acc;
    }, []);
}

describe('1480. Running sum of 1d Array', () => {
    test(`Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums`, () => {
        expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
        expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
        expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
    });
});
