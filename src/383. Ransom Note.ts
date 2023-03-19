import { describe, test, expect } from '@jest/globals';

function canConstruct(ransomNote: string, magazine: string): boolean {
    // create dictionary from magazine, where key is letter and value is quantity of this letter
    const dictionary = [...magazine].reduce((acc, v) => {
        acc[v] = acc[v] ? acc[v] + 1 : 1;
        return acc;
    }, {});

    const isDictionaryHasNotEnoughLetters = [...ransomNote].some(letter => {
        const letterValue = dictionary[letter];

        // letter exist in dictionary and have enough unused quantity
        if (typeof letterValue !== undefined && letterValue > 0) {
            dictionary[letter]--; // mark letter in dictionary as used
            return false;
        }

        return true;
    });

    return !isDictionaryHasNotEnoughLetters;
}

describe('383. Ransom Note. Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise. Each letter in magazine can only be used once in ransomNote.', () => {
    test.each([
        { ransomNote: 'a', magazine: 'b', expected: false },
        { ransomNote: 'aa', magazine: 'ab', expected: false },
        { ransomNote: 'aa', magazine: 'aab', expected: true },
        { ransomNote: 'a', magazine: 'a', expected: true },
        { ransomNote: 'red', magazine: 'der', expected: true },
        { ransomNote: 'faraway', magazine: 'aaafryw', expected: true },
        { ransomNote: 'faraway', magazine: 'aafryz', expected: false },
    ])(`RansomNote $ransomNote, magazine $magazine, expected $expected`, ({ magazine, ransomNote, expected }) => {
        expect(canConstruct(ransomNote, magazine)).toEqual(expected);
    });
});
