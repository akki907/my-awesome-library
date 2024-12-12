// src/utilities/string.ts

/**
 * Capitalizes the first letter of a string
 * @param str - Input string
 * @returns Capitalized string
 */
export function capitalize(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to a specified length
 * @param str - Input string
 * @param maxLength - Maximum length of the string
 * @param suffix - Suffix to add if truncated (default: '...')
 * @returns Truncated string
 */
export function truncateString(
    str: string,
    maxLength: number,
    suffix: string = '...'
): string {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + suffix;
}

/**
 * Checks if a string contains only alphanumeric characters
 * @param str - The input string
 * @returns True if the string is alphanumeric, false otherwise
 */
export function isAlphaNumeric(str: string): boolean {
    const alphaNumericRegex = /^[a-z0-9]+$/i;
    return alphaNumericRegex.test(str);
}

/**
 * Counts the number of words in a string
 * @param str - The input string
 * @returns The word count
 */
export function countWords(str: string): number {
    return str.trim().split(/\s+/).length;
}

/**
 * Converts a string to kebab-case (dash-separated)
 * @param str - The input string
 * @returns The kebab-case formatted string
 */
export function toKebabCase(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
}

/**
 * Converts a string to camelCase format
 * @param str - The input string
 * @returns The camelCase formatted string
 */
export function toCamelCase(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
            index === 0 ? match.toLowerCase() : match.toUpperCase()
        )
        .replace(/\s+/g, '');
}

/**
 * Checks if a string is a valid email
 * @param email - Email to validate
 * @returns Whether the email is valid
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Converts a string to slug format
 * @param str - Input string
 * @returns Slug-formatted string
 */
export function toSlug(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-');
}