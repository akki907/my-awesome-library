"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// test/index.test.ts
const index_1 = require("../src/index");
describe('AwesomeLibrary', () => {
    // Existing tests...
    test('randomNumber generates number in range', () => {
        const num = index_1.AwesomeLibrary.randomNumber(1, 10);
        expect(num).toBeGreaterThanOrEqual(1);
        expect(num).toBeLessThanOrEqual(10);
    });
    // String Utilities
    test('truncateString works correctly', () => {
        expect(index_1.AwesomeLibrary.truncateString('Hello World', 5)).toBe('Hello...');
        expect(index_1.AwesomeLibrary.truncateString('Short', 10)).toBe('Short');
    });
    test('isValidEmail validates email addresses', () => {
        expect(index_1.AwesomeLibrary.isValidEmail('test@example.com')).toBe(true);
        expect(index_1.AwesomeLibrary.isValidEmail('invalid-email')).toBe(false);
    });
    test('toSlug converts string to slug', () => {
        expect(index_1.AwesomeLibrary.toSlug('Hello World!')).toBe('hello-world');
        expect(index_1.AwesomeLibrary.toSlug('  Test String  ')).toBe('test-string');
    });
    // Number Utilities
    test('formatNumber adds commas', () => {
        expect(index_1.AwesomeLibrary.formatNumber(1000000)).toBe('1,000,000');
    });
    test('generateUUID creates unique identifier', () => {
        const uuid1 = index_1.AwesomeLibrary.generateUUID();
        const uuid2 = index_1.AwesomeLibrary.generateUUID();
        expect(uuid1).not.toBe(uuid2);
        expect(uuid1.length).toBe(36);
    });
    test('roundTo rounds numbers correctly', () => {
        expect(index_1.AwesomeLibrary.roundTo(3.14159, 2)).toBe(3.14);
        expect(index_1.AwesomeLibrary.roundTo(9.9999)).toBe(10);
    });
    // Array Utilities
    test('shuffleArray randomizes array', () => {
        const original = [1, 2, 3, 4, 5];
        const shuffled = index_1.AwesomeLibrary.shuffleArray(original);
        expect(shuffled).not.toEqual(original);
        expect(shuffled.sort()).toEqual(original.sort());
    });
    test('removeDuplicates eliminates duplicate values', () => {
        expect(index_1.AwesomeLibrary.removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
            .toEqual([1, 2, 3, 4, 5]);
    });
    // Date Utilities
    test('formatDate formats dates correctly', () => {
        const date = new Date('2023-12-25');
        expect(index_1.AwesomeLibrary.formatDate(date)).toBe('12/25/2023');
    });
    test('daysBetween calculates days between dates', () => {
        const date1 = new Date('2023-01-01');
        const date2 = new Date('2023-12-31');
        expect(index_1.AwesomeLibrary.daysBetween(date1, date2)).toBe(364);
    });
});