// test/index.test.ts
import { AwesomeLibrary } from '../src/index';

describe('AwesomeLibrary', () => {
  // Number Utilities
  describe('Number Utilities', () => {
    test('randomNumber generates number in range', () => {
      const min = 1;
      const max = 10;
      const num = AwesomeLibrary.randomNumber(min, max);

      expect(num).toBeGreaterThanOrEqual(min);
      expect(num).toBeLessThanOrEqual(max);
    });

    test('formatNumber adds commas to large numbers', () => {
      expect(AwesomeLibrary.formatNumber(1000000)).toBe('1,000,000');
      expect(AwesomeLibrary.formatNumber(1234567890)).toBe('1,234,567,890');
    });

    test('roundTo rounds numbers correctly', () => {
      expect(AwesomeLibrary.roundTo(3.14159, 2)).toBe(3.14);
      expect(AwesomeLibrary.roundTo(9.9999)).toBe(10);
      expect(AwesomeLibrary.roundTo(5.5, 0)).toBe(6);
    });

    test('findMax returns maximum value', () => {
      expect(AwesomeLibrary.findMax([1, 2, 3, 4, 5])).toBe(5);
      expect(AwesomeLibrary.findMax([10, 5, 8, 3])).toBe(10);
      expect(AwesomeLibrary.findMax([])).toBeUndefined();
    });

    test('findMin returns minimum value', () => {
      expect(AwesomeLibrary.findMin([1, 2, 3, 4, 5])).toBe(1);
      expect(AwesomeLibrary.findMin([10, 5, 8, 3])).toBe(3);
      expect(AwesomeLibrary.findMin([])).toBeUndefined();
    });
  });

  // String Utilities
  describe('String Utilities', () => {
    test('truncateString shortens strings correctly', () => {
      expect(AwesomeLibrary.truncateString('Hello, World!', 5)).toBe(
        'Hello...'
      );
      expect(AwesomeLibrary.truncateString('Short string', 50)).toBe(
        'Short string'
      );
    });
    test('isValidEmail validates email addresses', () => {
      // Valid email addresses
      expect(AwesomeLibrary.isValidEmail('test@example.com')).toBe(true);
      expect(AwesomeLibrary.isValidEmail('user.name+tag@example.co.uk')).toBe(
        true
      );

      // Invalid email addresses
      expect(AwesomeLibrary.isValidEmail('invalid-email')).toBe(false);
      expect(AwesomeLibrary.isValidEmail('missing@domain')).toBe(false);
      expect(AwesomeLibrary.isValidEmail('@missing-username.com')).toBe(false);
    });

    test('toSlug converts string to slug', () => {
      expect(AwesomeLibrary.toSlug('Hello World!')).toBe('hello-world');
      expect(AwesomeLibrary.toSlug('  Test String  ')).toBe('test-string');
      expect(AwesomeLibrary.toSlug('Special @ Characters!!!')).toBe(
        'special-characters'
      );
    });
  });

  // Array Utilities
  describe('Array Utilities', () => {
    test('shuffleArray randomizes array', () => {
      const original = [1, 2, 3, 4, 5];
      const shuffled = AwesomeLibrary.shuffleArray(original);

      expect(shuffled).not.toEqual(original);
      expect(shuffled.sort()).toEqual(original.sort());
    });

    test('removeDuplicates eliminates duplicate values', () => {
      expect(AwesomeLibrary.removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([
        1, 2, 3, 4, 5,
      ]);
      expect(AwesomeLibrary.removeDuplicates(['a', 'b', 'b', 'c'])).toEqual([
        'a',
        'b',
        'c',
      ]);
    });
  });

  // Date Utilities
  describe('Date Utilities', () => {
    test('formatDate formats dates correctly', () => {
      const date = new Date('2023-12-25');
      expect(AwesomeLibrary.formatDate(date)).toBe('12/25/2023');

      // Custom format
      expect(AwesomeLibrary.formatDate(date, 'YYYY-MM-DD')).toBe('2023-12-25');
    });

    test('daysBetween calculates days between dates', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-12-31');
      expect(AwesomeLibrary.daysBetween(date1, date2)).toBe(364);

      // Swap dates to check absolute value
      expect(AwesomeLibrary.daysBetween(date2, date1)).toBe(364);
    });
  });

  // UUID Utility
  describe('UUID Utility', () => {
    test('generateUUID creates unique identifier', () => {
      const uuid1 = AwesomeLibrary.generateUUID();
      const uuid2 = AwesomeLibrary.generateUUID();

      expect(uuid1).not.toBe(uuid2);
      expect(uuid1.length).toBe(36);

      // Verify UUID v4 format
      const uuidRegex =
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      expect(uuidRegex.test(uuid1)).toBe(true);
    });
  });
});
