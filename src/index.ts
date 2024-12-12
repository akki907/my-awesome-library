// src/index.ts
export class AwesomeLibrary {
    // Previous existing methods...
    static randomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static capitalize(str: string): string {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static isEven(num: number): boolean {
        return num % 2 === 0;
    }

    static isNumber(value: unknown): value is number {
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
    static truncateString(
        str: string,
        maxLength: number,
        suffix: string = '...'
    ): string {
        if (str.length <= maxLength) return str;
        return str.slice(0, maxLength) + suffix;
    }

    /**
     * Checks if a string is a valid email
     * @param email - Email to validate
     * @returns Whether the email is valid
     */
    static isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Converts a string to slug format
     * @param str - Input string
     * @returns Slug-formatted string
     */
    static toSlug(str: string): string {
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
    static formatNumber(num: number): string {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    /**
     * Generates a random UUID
     * @returns Unique UUID string
     */
    static generateUUID(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    /**
     * Rounds a number to a specified number of decimal places
     * @param num - Number to round
     * @param decimalPlaces - Number of decimal places
     * @returns Rounded number
     */
    static roundTo(num: number, decimalPlaces: number = 2): number {
        const factor = Math.pow(10, decimalPlaces);
        return Math.round(num * factor) / factor;
    }

    // Array Utilities
    /**
     * Shuffles an array randomly
     * @param array - Input array
     * @returns Shuffled array
     */
    static shuffleArray<T>(array: T[]): T[] {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ];
        }
        return shuffledArray;
    }

    /**
     * Removes duplicate values from an array
     * @param array - Input array
     * @returns Array with unique values
     */
    static removeDuplicates<T>(array: T[]): T[] {
        return [...new Set(array)];
    }

    // Date Utilities
    /**
     * Formats a date to a readable string
     * @param date - Date to format
     * @param format - Format string (default: 'MM/DD/YYYY')
     * @returns Formatted date string
     */
    static formatDate(date: Date, format: string = 'MM/DD/YYYY'): string {
        const pad = (n: number) => n.toString().padStart(2, '0');

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
    static daysBetween(date1: Date, date2: Date): number {
        const oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((date1.getTime() - date2.getTime()) / oneDay));
    }
}

// Export as default and named export
export default AwesomeLibrary;
