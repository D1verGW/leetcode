import { describe, expect, test } from '@jest/globals';

function maximumWealth(accounts: number[][]): number {
    return accounts.reduce((acc, cur) => {
        const currentUserWealth = cur.reduce((acc, cur) => acc + cur, 0);

        return currentUserWealth > acc ? currentUserWealth : acc;
    }, 0);
}

describe('1672. Richest Customer Wealth. Given an m x n integer grid accounts where accounts[i][j] is the amount of money the customer [I] has in the bank [J]. Return the wealth that the richest customer has.', () => {
    test.each([
        {
            accounts: [
                [1, 2, 3],
                [3, 2, 1],
            ],
            expected: 6,
        },
        {
            accounts: [
                [1, 5],
                [7, 3],
                [3, 5],
            ],
            expected: 10,
        },
        {
            accounts: [
                [2, 8, 7],
                [7, 1, 3],
                [1, 9, 5],
            ],
            expected: 17,
        },
    ])('%j', ({ accounts, expected }) => {
        expect(maximumWealth(accounts)).toEqual(expected);
    });
});
