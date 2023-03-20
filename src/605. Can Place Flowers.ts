import { expect, test, describe } from '@jest/globals';

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let freeFlowerPlaces = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (freeFlowerPlaces >= n) {
            return true;
        }

        if (flowerbed[i] !== 0) {
            i++;
            continue;
        }

        if (!flowerbed[i] && !flowerbed[i + 1] && !flowerbed[i - 1]) {
            i++;
            freeFlowerPlaces++;
        }
    }

    return freeFlowerPlaces >= n;
}

describe('605. Can Place Flowers. You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.', () => {
    test.each([
        { flowerbed: [1], n: 0, expected: true },
        { flowerbed: [1], n: 1, expected: false },
        { flowerbed: [0], n: 1, expected: true },
        { flowerbed: [1, 0, 0, 0, 1], n: 1, expected: true },
        { flowerbed: [1, 0, 0, 0, 1], n: 2, expected: false },
        { flowerbed: [1, 0, 0, 0, 0, 1], n: 1, expected: true },
        { flowerbed: [1, 0, 0, 0, 0, 1], n: 2, expected: false },
        { flowerbed: [0, 0, 0, 0, 1], n: 1, expected: true },
        { flowerbed: [0, 0, 0, 0, 0, 1], n: 2, expected: true },
        { flowerbed: [0, 0, 0, 0, 0, 1], n: 3, expected: false },
        { flowerbed: [0, 0, 0, 0, 0, 0, 1], n: 3, expected: true },
        { flowerbed: [0, 0, 0, 0, 0, 0, 1], n: 4, expected: false },
        { flowerbed: [1, 0, 0, 0, 0, 0, 0, 1], n: 2, expected: true },
        { flowerbed: [1, 0, 0, 0, 0, 0, 0, 1], n: 4, expected: false },
        { flowerbed: [0, 0, 1, 0, 1], n: 1, expected: true },
    ])('$flowerbed => $n => $expected', ({ flowerbed, n, expected }) => {
        expect(canPlaceFlowers(flowerbed, n)).toEqual(expected);
    });
});
