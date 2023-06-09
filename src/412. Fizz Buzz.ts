import { describe, test, expect } from '@jest/globals';

function fizzBuzz(n: number): string[] {
    const result = Array.from({ length: n });

    return result.map((_, i) => {
        const value = i + 1;

        if (value % 3 === 0 && value % 5 === 0) return 'FizzBuzz';
        if (value % 3 === 0) return 'Fizz';
        if (value % 5 === 0) return 'Buzz';

        return value.toString();
    });
}

describe('412. Fizz Buzz. Given an integer n, return a string array answer (1-indexed) where: answer[i] == "FizzBuzz" if i is divisible by 3 and 5. answer[i] == "Fizz" if i is divisible by 3. answer[i] == "Buzz" if i is divisible by 5. answer[i] == i if non of the above conditions are true.', () => {
    test.each([
        { n: 3, expected: ['1', '2', 'Fizz'] },
        { n: 5, expected: ['1', '2', 'Fizz', '4', 'Buzz'] },
        { n: 15, expected: ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'] },
    ])(`$n => $expected`, ({ n, expected }) => {
        expect(fizzBuzz(n)).toEqual(expected);
    });
});
