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

describe('383. Ransom Note', () => {
    test(`Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise. Each letter in magazine can only be used once in ransomNote.`, () => {
        expect(canConstruct('a', 'b')).toEqual(false);
        expect(canConstruct('aa', 'ab')).toEqual(false);
        expect(canConstruct('aa', 'aab')).toEqual(true);
        expect(canConstruct('a', 'a')).toEqual(true);
        expect(canConstruct('red', 'der')).toEqual(true);
        expect(canConstruct('faraway', 'aaafryw')).toEqual(true);
        expect(canConstruct('faraway', 'aafryz')).toEqual(false);
    });
});
