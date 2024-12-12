"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// test/index.test.ts
const index_1 = require("./index");
describe('AwesomeLibrary', () => {
    test('randomNumber generates number in range', () => {
        const num = index_1.AwesomeLibrary.randomNumber(1, 10);
        expect(num).toBeGreaterThanOrEqual(1);
        expect(num).toBeLessThanOrEqual(10);
    });
    test('capitalize works correctly', () => {
        expect(index_1.AwesomeLibrary.capitalize('hello')).toBe('Hello');
        expect(index_1.AwesomeLibrary.capitalize('')).toBe('');
    });
    test('isEven identifies even numbers', () => {
        expect(index_1.AwesomeLibrary.isEven(2)).toBe(true);
        expect(index_1.AwesomeLibrary.isEven(3)).toBe(false);
    });
    test('isNumber checks number validity', () => {
        expect(index_1.AwesomeLibrary.isNumber(42)).toBe(true);
        expect(index_1.AwesomeLibrary.isNumber('42')).toBe(false);
        expect(index_1.AwesomeLibrary.isNumber(NaN)).toBe(false);
    });
});
