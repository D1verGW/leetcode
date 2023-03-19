import { describe, test, expect } from '@jest/globals';

function twoSum(nums: number[], target: number): number[] {
    const numsHashMap = nums.reduce((acc, num, currentIndex) => {
        acc[num] = acc[num] ? [...acc[num], currentIndex] : [currentIndex];
        return acc;
    }, {});

    return nums.reduce((acc, currentNum, currentIndex) => {
        if (acc.length === 2) {
            return acc;
        }

        acc[0] = currentIndex;

        const nextNumber = target - currentNum;
        const nextNumberIndexes = numsHashMap[nextNumber];

        if (nextNumberIndexes) {
            const nextNumberIndex = nextNumberIndexes.find(index => index !== currentIndex);

            if (nextNumberIndex) {
                acc[1] = nextNumberIndex;
                return acc;
            }
        }

        return acc;
    }, []);
}

describe('1. Two Sum. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.', () => {
    test.each([
        { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
        { nums: [3, 2, 4], target: 6, expected: [1, 2] },
        { nums: [3, 3], target: 6, expected: [0, 1] },
        { nums: [3, 2, 3], target: 6, expected: [0, 2] },
        { nums: [3, 2, 4], target: 6, expected: [1, 2] },
        { nums: [2, 5, 5, 11], target: 10, expected: [1, 2] },
        { nums: [3, 2, 3], target: 6, expected: [0, 2] },
        { nums: [3, 3], target: 6, expected: [0, 1] },
        { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
        { nums: [3, 2, 4], target: 6, expected: [1, 2] },
        { nums: [3, 3], target: 6, expected: [0, 1] },
        { nums: [3, 2, 3], target: 6, expected: [0, 2] },
        { nums: [3, 2, 4], target: 6, expected: [1, 2] },
        { nums: [3, 2, 3], target: 6, expected: [0, 2] },
        { nums: [3, 3], target: 6, expected: [0, 1] },
        { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
        { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    ])('%j', ({ nums, target, expected }) => {
        expect(twoSum(nums, target)).toEqual(expected);
    });
});
