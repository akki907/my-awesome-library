// src/utilities/date.ts

/**
 * Formats a date to a readable string
 * @param date - Date to format
 * @param format - Format string (default: 'MM/DD/YYYY')
 * @returns Formatted date string
 */
export function formatDate(date: Date, format: string = 'MM/DD/YYYY'): string {
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
export function daysBetween(date1: Date, date2: Date): number {
    const oneDay = 24 * 60 * 60 * 1000;

    return Math.round(Math.abs((date1.getTime() - date2.getTime()) / oneDay));
}

/**
 * Adds days to a date
 * @param date - Input date
 * @param days - Number of days to add
 * @returns New date after adding days
 */
export function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

/**
 * Checks if two dates are on the same day
 * @param date1 - First date
 * @param date2 - Second date
 * @returns Whether the dates are the same day
 */
export function isSameDay(date1: Date, date2: Date): boolean {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}