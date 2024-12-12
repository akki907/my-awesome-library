// test/index.test.ts
import { AwesomeLibrary } from '../src/index';

describe('AwesomeLibrary', () => {
    // Existing tests...
    test('randomNumber generates number in range', () => {
        const num = AwesomeLibrary.randomNumber(1, 10);
        expect(num).toBeGreaterThanOrEqual(1);
        expect(num).toBeLessThanOrEqual(10);
    });

    // String Utilities
    test('truncateString works correctly', () => {
        expect(AwesomeLibrary.truncateString('Hello World', 5)).toBe('Hello...');
        expect(AwesomeLibrary.truncateString('Short', 10)).toBe('Short');
    });

    test('isValidEmail validates email addresses', () => {
        expect(AwesomeLibrary.isValidEmail('test@example.com')).toBe(true);
        expect(AwesomeLibrary.isValidEmail('invalid-email')).toBe(false);
    });

    test('toSlug converts string to slug', () => {
        expect(AwesomeLibrary.toSlug('Hello World!')).toBe('hello-world');
        expect(AwesomeLibrary.toSlug('  Test String  ')).toBe('test-string');
    });

    // Number Utilities
    test('formatNumber adds commas', () => {
        expect(AwesomeLibrary.formatNumber(1000000)).toBe('1,000,000');
    });

    test('generateUUID creates unique identifier', () => {
        const uuid1 = AwesomeLibrary.generateUUID();
        const uuid2 = AwesomeLibrary.generateUUID();
        expect(uuid1).not.toBe(uuid2);
        expect(uuid1.length).toBe(36);
    });

    test('roundTo rounds numbers correctly', () => {
        expect(AwesomeLibrary.roundTo(3.14159, 2)).toBe(3.14);
        expect(AwesomeLibrary.roundTo(9.9999)).toBe(10);
    });

    // Array Utilities
    test('shuffleArray randomizes array', () => {
        const original = [1, 2, 3, 4, 5];
        const shuffled = AwesomeLibrary.shuffleArray(original);

        expect(shuffled).not.toEqual(original);
        expect(shuffled.sort()).toEqual(original.sort());
    });

    test('removeDuplicates eliminates duplicate values', () => {
        expect(AwesomeLibrary.removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
            .toEqual([1, 2, 3, 4, 5]);
    });

    // Date Utilities
    test('formatDate formats dates correctly', () => {
        const date = new Date('2023-12-25');
        expect(AwesomeLibrary.formatDate(date)).toBe('12/25/2023');
    });

    test('daysBetween calculates days between dates', () => {
        const date1 = new Date('2023-01-01');
        const date2 = new Date('2023-12-31');
        expect(AwesomeLibrary.daysBetween(date1, date2)).toBe(364);
    });
});