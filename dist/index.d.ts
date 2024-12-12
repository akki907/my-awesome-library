export declare class AwesomeLibrary {
    /**
     * Generates a random number between min and max
     * @param min - Minimum value
     * @param max - Maximum value
     * @returns Random number
     */
    static randomNumber(min: number, max: number): number;
    /**
     * Capitalizes the first letter of a string
     * @param str - Input string
     * @returns Capitalized string
     */
    static capitalize(str: string): string;
    /**
     * Checks if a number is even
     * @param num - Input number
     * @returns Whether the number is even
     */
    static isEven(num: number): boolean;
    /**
     * Checks if a value is a valid number
     * @param value - Value to check
     * @returns Whether the value is a number
     */
    static isNumber(value: unknown): value is number;
}
export default AwesomeLibrary;
