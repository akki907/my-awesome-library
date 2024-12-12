// test/index.test.ts
import { AwesomeLibrary } from './index';

describe('AwesomeLibrary', () => {
    test('randomNumber generates number in range', () => {
        const num = AwesomeLibrary.randomNumber(1, 10);
        expect(num).toBeGreaterThanOrEqual(1);
        expect(num).toBeLessThanOrEqual(10);
    });

    test('capitalize works correctly', () => {
        expect(AwesomeLibrary.capitalize('hello')).toBe('Hello');
        expect(AwesomeLibrary.capitalize('')).toBe('');
    });

    test('isEven identifies even numbers', () => {
        expect(AwesomeLibrary.isEven(2)).toBe(true);
        expect(AwesomeLibrary.isEven(3)).toBe(false);
    });

    test('isNumber checks number validity', () => {
        expect(AwesomeLibrary.isNumber(42)).toBe(true);
        expect(AwesomeLibrary.isNumber('42')).toBe(false);
        expect(AwesomeLibrary.isNumber(NaN)).toBe(false);
    });
});