"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwesomeLibrary = void 0;
// src/index.ts
class AwesomeLibrary {
    // Previous existing methods...
    static randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    static capitalize(str) {
        if (!str)
            return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    static isEven(num) {
        return num % 2 === 0;
    }
    static isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }
    // New String Utilities
    /**
     * Truncates a string to a specified length
     * @param str - Input string
     * @param maxLength - Maximum length of the string
     * @param suffix - Suffix to add if truncated (default: '...')
     * @returns Truncated string
     */
    static truncateString(str, maxLength, suffix = '...') {
        if (str.length <= maxLength)
            return str;
        return str.slice(0, maxLength) + suffix;
    }
    /**
     * Checks if a string is a valid email
     * @param email - Email to validate
     * @returns Whether the email is valid
     */
    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    /**
     * Converts a string to slug format
     * @param str - Input string
     * @returns Slug-formatted string
     */
    static toSlug(str) {
        return str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-');
    }
    // New Number Utilities
    /**
     * Formats a number with commas as thousand separators
     * @param num - Number to format
     * @returns Formatted number string
     */
    static formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    /**
     * Generates a random UUID
     * @returns Unique UUID string
     */
    static generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    /**
     * Rounds a number to a specified number of decimal places
     * @param num - Number to round
     * @param decimalPlaces - Number of decimal places
     * @returns Rounded number
     */
    static roundTo(num, decimalPlaces = 2) {
        const factor = Math.pow(10, decimalPlaces);
        return Math.round(num * factor) / factor;
    }
    // Array Utilities
    /**
     * Shuffles an array randomly
     * @param array - Input array
     * @returns Shuffled array
     */
    static shuffleArray(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
    /**
     * Removes duplicate values from an array
     * @param array - Input array
     * @returns Array with unique values
     */
    static removeDuplicates(array) {
        return [...new Set(array)];
    }
    // Date Utilities
    /**
     * Formats a date to a readable string
     * @param date - Date to format
     * @param format - Format string (default: 'MM/DD/YYYY')
     * @returns Formatted date string
     */
    static formatDate(date, format = 'MM/DD/YYYY') {
        const pad = (n) => n.toString().padStart(2, '0');
        return format
            .replace('YYYY', date.getFullYear().toString())
            .replace('MM', pad(date.getMonth() + 1))
            .replace('DD', pad(date.getDate()));
    }
    /**
     * Calculates days between two dates
     * @param date1 - First date
     * @param date2 - Second date
     * @returns Number of days between dates
     */
    static daysBetween(date1, date2) {
        const oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((date1.getTime() - date2.getTime()) / oneDay));
    }
}
exports.AwesomeLibrary = AwesomeLibrary;
// Export as default and named export
exports.default = AwesomeLibrary;
