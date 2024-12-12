// src/utilities/number.ts

/**
 * Generates a random number between min and max (inclusive)
 * @param min - Minimum number
 * @param max - Maximum number
 * @returns Random number
 */
export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Checks if a number is even
 * @param num - Input number
 * @returns Whether the number is even
 */
export function isEven(num: number): boolean {
  return num % 2 === 0;
}

/**
 * Checks if a number is odd
 * @param num - Input number
 * @returns Whether the number is odd
 */
export function isOdd(num: number): boolean {
  return Math.abs(num % 2) === 1;
}

/**
 * Checks if a value is a number
 * @param value - Value to check
 * @returns Whether the value is a number
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * Finds the maximum number in an array
 * @param array - Input array
 * @returns Maximum number
 */
export function findMax<T extends number>(array: T[]): T | undefined {
  return array.length > 0 ? (Math.max(...array) as T) : undefined;
}

/**
 * Finds the minimum number in an array
 * @param array - Input array
 * @returns Minimum number
 */
export function findMin<T extends number>(array: T[]): T | undefined {
  return array.length > 0 ? (Math.min(...array) as T) : undefined;
}

/**
 * Formats a number with commas as thousand separators
 * @param num - Number to format
 * @returns Formatted number string
 */
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Rounds a number to a specified number of decimal places
 * @param num - Number to round
 * @param decimalPlaces - Number of decimal places
 * @returns Rounded number
 */
export function roundTo(num: number, decimalPlaces: number = 2): number {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
}
