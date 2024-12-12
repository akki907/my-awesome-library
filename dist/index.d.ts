export declare class AwesomeLibrary {
    static randomNumber(min: number, max: number): number;
    static capitalize(str: string): string;
    static isEven(num: number): boolean;
    static isNumber(value: unknown): value is number;
    /**
     * Truncates a string to a specified length
     * @param str - Input string
     * @param maxLength - Maximum length of the string
     * @param suffix - Suffix to add if truncated (default: '...')
     * @returns Truncated string
     */
    static truncateString(str: string, maxLength: number, suffix?: string): string;
    /**
     * Checks if a string is a valid email
     * @param email - Email to validate
     * @returns Whether the email is valid
     */
    static isValidEmail(email: string): boolean;
    /**
     * Converts a string to slug format
     * @param str - Input string
     * @returns Slug-formatted string
     */
    static toSlug(str: string): string;
    /**
     * Formats a number with commas as thousand separators
     * @param num - Number to format
     * @returns Formatted number string
     */
    static formatNumber(num: number): string;
    /**
     * Generates a random UUID
     * @returns Unique UUID string
     */
    static generateUUID(): string;
    /**
     * Rounds a number to a specified number of decimal places
     * @param num - Number to round
     * @param decimalPlaces - Number of decimal places
     * @returns Rounded number
     */
    static roundTo(num: number, decimalPlaces?: number): number;
    /**
     * Shuffles an array randomly
     * @param array - Input array
     * @returns Shuffled array
     */
    static shuffleArray<T>(array: T[]): T[];
    /**
     * Removes duplicate values from an array
     * @param array - Input array
     * @returns Array with unique values
     */
    static removeDuplicates<T>(array: T[]): T[];
    /**
     * Formats a date to a readable string
     * @param date - Date to format
     * @param format - Format string (default: 'MM/DD/YYYY')
     * @returns Formatted date string
     */
    static formatDate(date: Date, format?: string): string;
    /**
     * Calculates days between two dates
     * @param date1 - First date
     * @param date2 - Second date
     * @returns Number of days between dates
     */
    static daysBetween(date1: Date, date2: Date): number;
}
export default AwesomeLibrary;
