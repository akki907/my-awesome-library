"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwesomeLibrary = void 0;
// src/index.ts
class AwesomeLibrary {
    /**
     * Generates a random number between min and max
     * @param min - Minimum value
     * @param max - Maximum value
     * @returns Random number
     */
    static randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /**
     * Capitalizes the first letter of a string
     * @param str - Input string
     * @returns Capitalized string
     */
    static capitalize(str) {
        if (!str)
            return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    /**
     * Checks if a number is even
     * @param num - Input number
     * @returns Whether the number is even
     */
    static isEven(num) {
        return num % 2 === 0;
    }
    /**
     * Checks if a value is a valid number
     * @param value - Value to check
     * @returns Whether the value is a number
     */
    static isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }
}
exports.AwesomeLibrary = AwesomeLibrary;
// Export as default and named export
exports.default = AwesomeLibrary;
