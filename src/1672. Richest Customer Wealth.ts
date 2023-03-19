import { describe, expect, test } from "@jest/globals";

function maximumWealth(accounts: number[][]): number {
  return accounts.reduce((acc, cur) => {
    const currentUserWealth = cur.reduce((acc, cur) => acc + cur, 0);
    return currentUserWealth > acc ? currentUserWealth : acc;
  }, 0);
}

describe("1672. Richest Customer Wealth", () => {
  test(`Given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.`, () => {
    expect(
      maximumWealth([
        [1, 2, 3],
        [3, 2, 1],
      ])
    ).toEqual(6);
    expect(
      maximumWealth([
        [1, 5],
        [7, 3],
        [3, 5],
      ])
    ).toEqual(10);
    expect(
      maximumWealth([
        [2, 8, 7],
        [7, 1, 3],
        [1, 9, 5],
      ])
    ).toEqual(17);
  });
});
