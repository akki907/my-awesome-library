import exp from 'constants';

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

/**
 * Returns a new date object representing the start of the day (00:00:00)
 * @param date - The input date
 * @returns The start of the day
 */
export function startOfDay(date: Date): Date {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
}

/**
 * Returns a new date object representing the end of the day (23:59:59)
 * @param date - The input date
 * @returns The end of the day
 */
export function endOfDay(date: Date): Date {
  const newDate = new Date(date);
  newDate.setHours(23, 59, 59, 999);
  return newDate;
}

/**
 * Returns the current date and time
 * @returns The current date and time
 */
export function now(): Date {
  return new Date();
}

/**
 * Returns the current date
 * @returns The current date
 */
export function today(): Date {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * Returns the current year
 * @returns The current year
 */
export function currentYear(): number {
  return new Date().getFullYear();
}

/**
 * Returns the current month
 * @returns The current month
 */
export function currentMonth(): number {
  return new Date().getMonth() + 1;
}

/**
 * Returns the current day
 * @returns The current day
 */
export function currentDay(): number {
  return new Date().getDate();
}

/**
 * Returns the current hour
 * @returns The current hour
 */
export function currentHour(): number {
  return new Date().getHours();
}

/**
 * Returns the current minute
 * @returns The current minute
 */
export function currentMinute(): number {
  return new Date().getMinutes();
}

/**
 * Returns the current second
 * @returns The current second
 */
export function currentSecond(): number {
  return new Date().getSeconds();
}

/**
 * Returns the current millisecond
 * @returns The current millisecond
 */
export function currentMillisecond(): number {
  return new Date().getMilliseconds();
}

/**
 * Returns the current day of the week
 * @returns The current day of the week
 */
export function currentDayOfWeek(): number {
  return new Date().getDay();
}

/**
 * Returns the current month name
 * @returns The current month name
 */
export function currentMonthName(): string {
  return new Date().toLocaleString('default', { month: 'long' });
}

/**
 * Returns the current day name
 * @returns The current day name
 */
export function currentDayName(): string {
  return new Date().toLocaleString('default', { weekday: 'long' });
}

/**
 * Returns the number of days in a month
 * @param year - The year
 * @param month - The month
 * @returns The number of days in the month
 */
export function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

/**
 * Returns the number of days in the current month
 * @returns The number of days in the current month
 */
export function daysInCurrentMonth(): number {
  return daysInMonth(currentYear(), currentMonth());
}

/**
 * Checks if a year is a leap year
 * @param year - The year
 * @returns Whether the year is a leap year
 * @see https://en.wikipedia.org/wiki/Leap_year
 * @example
 * isLeapYear(2020); //=> true
 * isLeapYear(2021); //=> false
 * isLeapYear(1900); //=> false
 * isLeapYear(2000); //=> true
 * isLeapYear(2004); //=> true
 * isLeapYear(2008); //=> true
 * isLeapYear(2012); //=> true
 * isLeapYear(2016); //=> true
 * isLeapYear(2024); //=> true
 */

export const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

/**
 * Returns the days of the week
 * @returns The days of the week
 */
export function daysOfWeek(): string[] {
  return [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
}

/**
 * Returns the months of the year
 * @returns The months of the year
 */
export function monthsOfYear(): string[] {
  return [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
}

/**
 * Returns the current Unix timestamp
 * @returns The current Unix timestamp
 */
export function unixTimestamp(): number {
  return Math.floor(Date.now() / 1000);
}

/**
 * Returns the Unix timestamp for a date
 * @param date - The input date
 * @returns The Unix timestamp for the date
 */
export function unixTimestampFromDate(date: Date): number {
  return Math.floor(date.getTime() / 1000);
}

/**
 * Returns the date from a Unix timestamp
 * @param timestamp - The Unix timestamp
 * @returns The date from the timestamp
 */
export function dateFromUnixTimestamp(timestamp: number): Date {
  return new Date(timestamp * 1000);
}

/**
 * Returns the current time in milliseconds
 * @returns The current time in milliseconds
 */
export function currentTime(): number {
  return Date.now();
}

/**
 * Returns the time from a Unix timestamp
 * @param timestamp - The Unix timestamp
 * @returns The time from the timestamp
 */
export function timeFromUnixTimestamp(timestamp: number): number {
  return timestamp * 1000;
}

/**
 * Returns the Unix timestamp from the current time in milliseconds
 * @returns The Unix timestamp from the current time in milliseconds
 */
export function unixTimestampFromTime(time: number): number {
  return Math.floor(time / 1000);
}

/**
 * Returns the current time in seconds
 * @returns The current time in seconds
 */
export function currentTimeInSeconds(): number {
  return Math.floor(Date.now() / 1000);
}

/**
 * Returns the current time in minutes
 * @returns The current time in minutes
 */
export function currentTimeInMinutes(): number {
  return Math.floor(Date.now() / 1000 / 60);
}

/**
 * Returns the time from a Unix timestamp in minutes
 * @param timestamp - The Unix timestamp
 * @returns The time from the timestamp in minutes
 */
export function timeInMinutesFromUnixTimestamp(timestamp: number): number {
  return timestamp / 60;
}

/**
 * Returns the Unix timestamp from the current time in minutes
 * @returns The Unix timestamp from the current time in minutes
 */
export function unixTimestampFromTimeInMinutes(time: number): number {
  return time * 60;
}

/**
 * Returns the current time in hours
 * @returns The current time in hours
 */
export function currentTimeInHours(): number {
  return Math.floor(Date.now() / 1000 / 60 / 60);
}

/**
 * Returns the time from a Unix timestamp in hours
 * @param timestamp - The Unix timestamp
 * @returns The time from the timestamp in hours
 */
export function timeInHoursFromUnixTimestamp(timestamp: number): number {
  return timestamp / 60 / 60;
}

/**
 * Returns the Unix timestamp from the current time in hours
 * @returns The Unix timestamp from the current time in hours
 */
export function unixTimestampFromTimeInHours(time: number): number {
  return time * 60 * 60;
}

/**
 * Returns the current time in days
 * @returns The current time in days
 */
export function currentTimeInDays(): number {
  return Math.floor(Date.now() / 1000 / 60 / 60 / 24);
}

/**
 * Returns the time from a Unix timestamp in days
 * @param timestamp - The Unix timestamp
 * @returns The time from the timestamp in days
 */
export function timeInDaysFromUnixTimestamp(timestamp: number): number {
  return timestamp / 60 / 60 / 24;
}

/**
 * Returns the Unix timestamp from the current time in days
 * @returns The Unix timestamp from the current time in days
 */
export function unixTimestampFromTimeInDays(time: number): number {
  return time * 60 * 60 * 24;
}

/**
 * Gets the difference between two dates in days
 * @param startDate - The starting date
 * @param endDate - The ending date
 * @returns The difference in days
 */
export function getDateDifferenceInDays(
  startDate: Date,
  endDate: Date
): number {
  const start = startDate.getTime();
  const end = endDate.getTime();
  const diffInMilliseconds = end - start;
  const millisecondsInADay = 1000 * 60 * 60 * 24;

  return Math.floor(diffInMilliseconds / millisecondsInADay);
}

/**
 * Adds a specific number of days to a given date
 * @param date - The original date
 * @param daysToAdd - The number of days to add
 * @returns A new date with the added days
 */
export function addDaysToDate(date: Date, daysToAdd: number): Date {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + daysToAdd);
  return newDate;
}

/**
 * Checks if a date is in the past
 * @param date - The date to check
 * @returns True if the date is in the past, false otherwise
 */
export function isDateInThePast(date: Date): boolean {
  const now = new Date();
  return date < now;
}

/**
 * Gets the start (Monday) and end (Sunday) of the week for a given date
 * @param date - The date for which to find the week range
 * @returns An object containing the start and end dates of the week
 */
export function getWeekRange(date: Date): {
  startOfWeek: Date;
  endOfWeek: Date;
} {
  const startOfWeek = new Date(date);
  const endOfWeek = new Date(date);

  const dayOfWeek = date.getDay();
  const diffToStart = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Adjust for Monday start of the week
  startOfWeek.setDate(date.getDate() - diffToStart);
  startOfWeek.setHours(0, 0, 0, 0); // Start at midnight

  const diffToEnd = dayOfWeek === 0 ? 0 : 7 - dayOfWeek; // Adjust for Sunday end of the week
  endOfWeek.setDate(date.getDate() + diffToEnd);
  endOfWeek.setHours(23, 59, 59, 999); // End at 11:59:59.999 PM

  return { startOfWeek, endOfWeek };
}

/**
 * Checks if a given date is a weekend (Saturday or Sunday)
 * @param date - The date to check
 * @returns True if the date is a weekend, false otherwise
 */
export function isWeekend(date: Date): boolean {
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6; // Sunday is 0, Saturday is 6
}

/**
 * Calculates the number of weeks between two dates
 * @param date1 - The first date
 * @param date2 - The second date
 * @returns The number of weeks between the two dates
 */
export function getWeeksBetween(date1: Date, date2: Date): number {
  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
  const diffInMilliseconds = Math.abs(date2.getTime() - date1.getTime());
  return diffInMilliseconds / oneWeekInMilliseconds;
}

/**
 * Gets the start and end of the month for a given date
 * @param date - The date to calculate the start and end of the month
 * @returns An object containing the start and end dates of the month
 */
export function getMonthRange(date: Date): {
  startOfMonth: Date;
  endOfMonth: Date;
} {
  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return {
    startOfMonth,
    endOfMonth,
  };
}

/**
 * Adds business days to a date (excluding weekends)
 * @param date - The date to start from
 * @param businessDays - The number of business days to add
 * @returns The new date after adding business days
 */
export function addBusinessDays(date: Date, businessDays: number): Date {
  let currentDate = new Date(date);
  let daysAdded = 0;

  while (daysAdded < businessDays) {
    currentDate.setDate(currentDate.getDate() + 1);
    // If the new date is not Saturday or Sunday, increment the count
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      daysAdded++;
    }
  }

  return currentDate;
}

/**
 * Checks if a date is between two other dates
 * @param targetDate - The date to check
 * @param startDate - The start date of the range
 * @param endDate - The end date of the range
 * @returns True if the target date is between the range, false otherwise
 */
export function isDateInRange(
  targetDate: Date,
  startDate: Date,
  endDate: Date
): boolean {
  return targetDate >= startDate && targetDate <= endDate;
}

/**
 * Gets the last day (Sunday) of the week for a given date
 * @param date - The date to calculate the last day of the week
 * @returns The last day of the week (Sunday)
 */
export function getLastDayOfWeek(date: Date): Date {
  const lastDay = new Date(date);
  const day = lastDay.getDay();
  const difference = 6 - day; // Sunday is the last day of the week (index 6)
  lastDay.setDate(lastDay.getDate() + difference);
  return lastDay;
}

/**
 * Gets the week number of the year for a given date
 * @param date - The date to calculate the week number
 * @returns The week number of the year
 */
export function getWeekNumber(date: Date): number {
  const startDate = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor(
    (date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  return Math.ceil((days + startDate.getDay() + 1) / 7);
}

/**
 * Gets the first day (Monday) of the week for a given date
 * @param date - The date to calculate the first day of the week
 * @returns The first day of the week (Monday)
 */
export function getFirstDayOfWeek(date: Date): Date {
  const firstDay = new Date(date);
  const day = firstDay.getDay();
  const difference = day === 0 ? -6 : 1 - day; // If Sunday (0), set difference to -6 (Monday is day 1)
  firstDay.setDate(firstDay.getDate() + difference);
  return firstDay;
}

/**
 * Adds a specified number of years to a date
 * @param date - The date to start from
 * @param years - The number of years to add
 * @returns The new date after adding the specified number of years
 */
export function addYears(date: Date, years: number): Date {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
}

/**
 * Adds a specified number of months to a date
 * @param date - The date to start from
 * @param months - The number of months to add
 * @returns The new date after adding the specified number of months
 */
export function addMonths(date: Date, months: number): Date {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
}

/**
 * Gets the current quarter of the year
 * @returns The current quarter (1, 2, 3, or 4)
 */
export function getCurrentQuarter(): number {
  const month = new Date().getMonth() + 1; // Months are zero-indexed (0-11)
  return Math.ceil(month / 3); // Divide the month by 3 and round up to get the quarter
}

/**
 * Checks if a date is in the future compared to the current date
 * @param date - The date to check
 * @returns True if the date is in the future, false otherwise
 */
export function isFutureDate(date: Date): boolean {
  return date > new Date();
}

/**
 * Gets the number of days in the month for a given date
 * @param date - The date to calculate the number of days
 * @returns The number of days in the month
 */
export function getDaysInMonth(date: Date): number {
  const startOfNextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  const lastDayOfMonth = new Date(startOfNextMonth.getTime() - 1);
  return lastDayOfMonth.getDate();
}

/**
 * Gets the number of days in the current month
 * @returns The number of days in the current month
 */

export function isValidDate(date: Date): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}

/**
 * Checks if a date is in the past compared to the current date
 * @param date - The date to check
 * @returns True if the date is in the past, false otherwise
 */

export function isPastDate(date: Date): boolean {
  return date < new Date();
}

/**
 * Gets the number of days in the current month
 * @returns The number of days in the current month
 */

export function isSameMonth(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth()
  );
}

/**
 * Gets the number of days in the current month
 * @returns The number of days in the current month
 */

export function isSameYear(date1: Date, date2: Date): boolean {
  return date1.getFullYear() === date2.getFullYear();
}

/**
 * Gets the number of days in the current month
 * @returns The number of days in the current month
 */

export function isToday(date: Date): boolean {
  return isSameDay(date, new Date());
}

/**
 * Gets the number of days in the current month
 * @returns The number of days in the current month
 */
export function isTomorrow(date: Date): boolean {
  const tomorrow = addDays(new Date(), 1);
  return isSameDay(date, tomorrow);
}

/**
 * Gets the number of days in the current month
 * @returns The number of days in the current month
 */
export function isYesterday(date: Date): boolean {
  const yesterday = addDays(new Date(), -1);
  return isSameDay(date, yesterday);
}

/**
 * Gets the number of days in the current month
 * @returns The number of days in the current month
 */
export function isThisMonth(date: Date): boolean {
  return isSameMonth(date, new Date());
}

/**
 * Gets the number of days in the current month
 * @returns The number of days in the current month
 */

export function isThisYear(date: Date): boolean {
  return isSameYear(date, new Date());
}

/**
 * Returns the current date and time in the specified format
 * @param format - The format string
 * @returns The formatted date and time
 */
export function getCurrentDateTime(format = 'yyyy-MM-dd HH:mm:ss'): string {
  const date = new Date();
  const map: Record<string, number> = {
    yyyy: date.getFullYear(),
    MM: date.getMonth() + 1,
    dd: date.getDate(),
    HH: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds(),
  };

  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (match) => {
    return String(map[match]).padStart(2, '0');
  });
}

/**
 * Formats a date to a locale-specific string
 * @param date - The date to format
 * @param locale - The locale code (default: 'en-US')
 * @param options - Intl.DateTimeFormat options to customize the format
 * @returns A formatted date string
 */
export function formatDateToLocaleString(
  date: Date | string | number,
  locale: string = 'en-US',
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj =
    typeof date === 'string' || typeof date === 'number'
      ? new Date(date)
      : date;

  if (isNaN(dateObj.getTime())) {
    throw new Error('Invalid date provided');
  }

  return dateObj.toLocaleString(locale, options);
}
