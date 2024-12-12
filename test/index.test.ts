// test/index.test.ts
import AwesomeLibrary, { ObjectUtils } from '../src/index';

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

    // Object Utilities

    describe('Object Utility Functions', () => {
        test('deepClone should create a deep copy of an object', () => {
            const obj = { a: 1, b: { c: 2 } };
            const cloned = AwesomeLibrary.deepClone(obj);
            expect(cloned).toEqual(obj);
            expect(cloned).not.toBe(obj);
            expect(cloned.b).not.toBe(obj.b);
        });

        test('mergeObjects should merge two objects shallowly', () => {
            const target = { a: 1, b: 2 };
            const source = { b: 3, c: 4 };
            const merged = AwesomeLibrary.mergeObjects(target, source);
            expect(merged).toEqual({ a: 1, b: 3, c: 4 });
        });

        test('getObjectKeys should return the keys of an object', () => {
            const obj = { a: 1, b: 2, c: 3 };
            expect(AwesomeLibrary.getObjectKeys(obj)).toEqual(['a', 'b', 'c']);
        });

        test('getObjectValues should return the values of an object', () => {
            const obj = { a: 1, b: 2, c: 3 };
            expect(AwesomeLibrary.getObjectValues(obj)).toEqual([1, 2, 3]);
        });

        test('isEmptyObject should check if an object is empty', () => {
            expect(AwesomeLibrary.isEmptyObject({})).toBe(true);
            expect(AwesomeLibrary.isEmptyObject({ a: 1 })).toBe(false);
        });

        test('pick should select specific keys from an object', () => {
            const obj = { a: 1, b: 2, c: 3 };
            expect(AwesomeLibrary.pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
        });

        test('omit should remove specific keys from an object', () => {
            const obj = { a: 1, b: 2, c: 3 };
            expect(AwesomeLibrary.omit(obj, ['b'])).toEqual({ a: 1, c: 3 });
        });

        test('hasKey should check if an object has a specific key', () => {
            const obj = { a: 1, b: 2 };
            expect(AwesomeLibrary.hasKey(obj, 'a')).toBe(true);
            expect(AwesomeLibrary.hasKey(obj, 'c')).toBe(false);
        });

        test('mergeDeep should merge two objects deeply', () => {
            const target = { a: { b: 1 } };
            const source = { a: { c: 2 }, d: 3 };
            expect(AwesomeLibrary.mergeDeep(target, source)).toEqual({
                a: { b: 1, c: 2 },
                d: 3,
            });
        });

        test('toEntries should convert an object to key-value pairs', () => {
            const obj = { a: 1, b: 2 };
            expect(AwesomeLibrary.toEntries(obj)).toEqual([
                ['a', 1],
                ['b', 2],
            ]);
        });

        test('isPlainObject should check if a value is a plain object', () => {
            expect(AwesomeLibrary.isPlainObject({})).toBe(true);
            expect(AwesomeLibrary.isPlainObject([])).toBe(false);
            expect(AwesomeLibrary.isPlainObject(null)).toBe(false);
        });

        test('freezeObject should recursively freeze an object', () => {
            const obj = { a: { b: 1 } };
            const frozen = AwesomeLibrary.freezeObject(obj);
            expect(Object.isFrozen(frozen)).toBe(true);
            expect(Object.isFrozen(frozen.a)).toBe(true);
        });

        test('shallowEqual should compare two objects shallowly', () => {
            const obj1 = { a: 1, b: 2 };
            const obj2 = { a: 1, b: 2 };
            const obj3 = { a: 1, b: 3 };
            expect(AwesomeLibrary.shallowEqual(obj1, obj2)).toBe(true);
            expect(AwesomeLibrary.shallowEqual(obj1, obj3)).toBe(false);
        });

        test('deepEqual should compare two objects deeply', () => {
            const obj1 = { a: { b: 1 } };
            const obj2 = { a: { b: 1 } };
            const obj3 = { a: { b: 2 } };
            expect(AwesomeLibrary.deepEqual(obj1, obj2)).toBe(true);
            expect(AwesomeLibrary.deepEqual(obj1, obj3)).toBe(false);
        });

        test('invertObject should invert keys and values of an object', () => {
            const obj = { a: 'x', b: 'y' };
            expect(AwesomeLibrary.invertObject(obj)).toEqual({ x: 'a', y: 'b' });
        });

        test('mapObject should map over the properties of an object', () => {
            const obj = { a: 1, b: 2 };
            const result = AwesomeLibrary.mapObject(obj, (value) => value * 2);
            expect(result).toEqual({ a: 2, b: 4 });
        });

        test('filterObject should filter properties of an object', () => {
            const obj = { a: 1, b: 2, c: 3 };
            const result = AwesomeLibrary.filterObject(obj, (value) => value > 1);
            expect(result).toEqual({ b: 2, c: 3 });
        });

        test('flattenObject should flatten a nested object', () => {
            const obj = { a: { b: 1, c: { d: 2 } } };
            expect(AwesomeLibrary.flattenObject(obj)).toEqual({
                'a.b': 1,
                'a.c.d': 2,
            });
        });

        test('unflattenObject should unflatten a flattened object', () => {
            const obj = { 'a.b': 1, 'a.c.d': 2 };
            expect(AwesomeLibrary.unflattenObject(obj)).toEqual({
                a: { b: 1, c: { d: 2 } },
            });
        });

        test('groupBy should group object entries by a selector function', () => {
            const obj = { a: 1, b: 2, c: 1 };
            const grouped = AwesomeLibrary.groupBy(obj, (value) =>
                value % 2 === 0 ? 'even' : 'odd'
            );
            expect(grouped).toEqual({ odd: [1, 1], even: [2] });
        });

        test('compactObject should remove null or undefined values from an object', () => {
            const obj = { a: 1, b: null, c: undefined, d: 2 };
            expect(AwesomeLibrary.compactObject(obj)).toEqual({ a: 1, d: 2 });
        });

        test('getNestedValue should retrieve a deeply nested value', () => {
            const obj = { a: { b: { c: 42 } } };
            expect(AwesomeLibrary.getNestedValue(obj, ['a', 'b', 'c'])).toBe(42);
        });

        test('setNestedValue should set a deeply nested value', () => {
            const obj = { a: { b: {} } };
            AwesomeLibrary.setNestedValue(obj, ['a', 'b', 'c'], 42);
            expect(obj).toEqual({ a: { b: { c: 42 } } });
        });

        test('renameKeys should rename keys of an object based on a mapping', () => {
            const obj = { a: 1, b: 2 };
            const renamed = AwesomeLibrary.renameKeys(obj, { a: 'x', b: 'y' });
            expect(renamed).toEqual({ x: 1, y: 2 });
        });

        test('difference should find keys present in one object but not another', () => {
            const obj1 = { a: 1, b: 2, c: 3 };
            const obj2 = { b: 2 };
            expect(AwesomeLibrary.difference(obj1, obj2)).toEqual(['a', 'c']);
        });

        test('intersection should find common keys between two objects', () => {
            const obj1 = { a: 1, b: 2, c: 3 };
            const obj2 = { b: 2, c: 4 };
            expect(AwesomeLibrary.intersection(obj1, obj2)).toEqual(['b', 'c']);
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

        test('addDays adds days to a date', () => {
            const date = new Date('2023-01-01');
            const newDate = AwesomeLibrary.addDays(date, 10);
            expect(newDate).toEqual(new Date('2023-01-11'));
        });

        test('isSameDay checks if two dates are the same day', () => {
            const date1 = new Date('2023-01-01');
            const date2 = new Date('2023-01-01');
            const date3 = new Date('2023-01-02');
            expect(AwesomeLibrary.isSameDay(date1, date2)).toBe(true);
            expect(AwesomeLibrary.isSameDay(date1, date3)).toBe(false);
        });

        test('startOfDay returns the start of the day', () => {
            const date = new Date('2023-01-01T12:34:56');
            expect(AwesomeLibrary.startOfDay(date)).toEqual(new Date('2023-01-01'));
        });

        test('isLeapYear checks if a year is a leap year', () => {
            expect(AwesomeLibrary.isLeapYear(2020)).toBe(true);
            expect(AwesomeLibrary.isLeapYear(2021)).toBe(false);
        });

        test('daysInMonth returns the number of days in a month', () => {
            expect(AwesomeLibrary.daysInMonth(2023, 2)).toBe(28);
            expect(AwesomeLibrary.daysInMonth(2020, 2)).toBe(29);
            expect(AwesomeLibrary.daysInMonth(2023, 12)).toBe(31);
        });

        test('isValidDate checks if a date is valid', () => {
            expect(AwesomeLibrary.isValidDate(new Date('2023-01-01'))).toBe(true);
            expect(AwesomeLibrary.isValidDate(new Date('invalid-date'))).toBe(false);
        });

        test('isWeekend checks if a date is a weekend', () => {
            const weekend = new Date('2023-01-01'); // Sunday
            const weekday = new Date('2023-01-02'); // Monday
            expect(AwesomeLibrary.isWeekend(weekend)).toBe(true);
            expect(AwesomeLibrary.isWeekend(weekday)).toBe(false);
        });

        test('isFutureDate checks if a date is in the future', () => {
            const futureDate = new Date(Date.now() + 86400000); // Tomorrow
            const pastDate = new Date(Date.now() - 86400000); // Yesterday
            expect(AwesomeLibrary.isFutureDate(futureDate)).toBe(true);
            expect(AwesomeLibrary.isFutureDate(pastDate)).toBe(false);
        });

        test('isPastDate checks if a date is in the past', () => {
            const futureDate = new Date(Date.now() + 86400000); // Tomorrow
            const pastDate = new Date(Date.now() - 86400000); // Yesterday
            expect(AwesomeLibrary.isPastDate(futureDate)).toBe(false);
            expect(AwesomeLibrary.isPastDate(pastDate)).toBe(true);
        });

        test('isSameMonth checks if two dates are in the same month', () => {
            const date1 = new Date('2023-01-01');
            const date2 = new Date('2023-01-15');
            const date3 = new Date('2023-02-01');
            expect(AwesomeLibrary.isSameMonth(date1, date2)).toBe(true);
            expect(AwesomeLibrary.isSameMonth(date1, date3)).toBe(false);
        });

        test('isSameYear checks if two dates are in the same year', () => {
            const date1 = new Date('2023-01-01');
            const date2 = new Date('2023-12-31');
            const date3 = new Date('2024-01-01');
            expect(AwesomeLibrary.isSameYear(date1, date2)).toBe(true);
            expect(AwesomeLibrary.isSameYear(date1, date3)).toBe(false);
        });

        test('isToday checks if a date is today', () => {
            const today = new Date();
            const tomorrow = new Date(Date.now() + 86400000);
            expect(AwesomeLibrary.isToday(today)).toBe(true);
            expect(AwesomeLibrary.isToday(tomorrow)).toBe(false);
        });

        test('isYesterday checks if a date is yesterday', () => {
            const yesterday = new Date(Date.now() - 86400000);
            const today = new Date();
            expect(AwesomeLibrary.isYesterday(yesterday)).toBe(true);
            expect(AwesomeLibrary.isYesterday(today)).toBe(false);
        });

        test('isTomorrow checks if a date is tomorrow', () => {
            const tomorrow = new Date(Date.now() + 86400000);
            const today = new Date();
            expect(AwesomeLibrary.isTomorrow(tomorrow)).toBe(true);
            expect(AwesomeLibrary.isTomorrow(today)).toBe(false);
        });

        test('isThisMonth checks if a date is in the current month', () => {
            const thisMonth = new Date();
            const nextMonth = new Date(Date.now() + 86400000 * 30);
            expect(AwesomeLibrary.isThisMonth(thisMonth)).toBe(true);
            expect(AwesomeLibrary.isThisMonth(nextMonth)).toBe(false);
        });

        test('isFutureDate checks if a date is in the future', () => {
            const futureDate = new Date(Date.now() + 86400000); // Tomorrow
            const pastDate = new Date(Date.now() - 86400000); // Yesterday
            expect(AwesomeLibrary.isFutureDate(futureDate)).toBe(true);
            expect(AwesomeLibrary.isFutureDate(pastDate)).toBe(false);
        });

        test('isPastDate checks if a date is in the past', () => {
            const futureDate = new Date(Date.now() + 86400000); // Tomorrow
            const pastDate = new Date(Date.now() - 86400000); // Yesterday
            expect(AwesomeLibrary.isPastDate(futureDate)).toBe(false);
            expect(AwesomeLibrary.isPastDate(pastDate)).toBe(true);
        });

        test('isSameMonth checks if two dates are in the same month', () => {
            const date1 = new Date('2023-01-01');
            const date2 = new Date('2023-01-15');
            const date3 = new Date('2023-02-01');
            expect(AwesomeLibrary.isSameMonth(date1, date2)).toBe(true);
            expect(AwesomeLibrary.isSameMonth(date1, date3)).toBe(false);
        });

        test('isSameYear checks if two dates are in the same year', () => {
            const date1 = new Date('2023-01-01');
            const date2 = new Date('2023-12-31');
            const date3 = new Date('2024-01-01');
            expect(AwesomeLibrary.isSameYear(date1, date2)).toBe(true);
            expect(AwesomeLibrary.isSameYear(date1, date3)).toBe(false);
        });

        test('isToday checks if a date is today', () => {
            const today = new Date();
            const tomorrow = new Date(Date.now() + 86400000);
            expect(AwesomeLibrary.isToday(today)).toBe(true);
            expect(AwesomeLibrary.isToday(tomorrow)).toBe(false);
        });

        test('isYesterday checks if a date is yesterday', () => {
            const yesterday = new Date(Date.now() - 86400000);
            const today = new Date();
            expect(AwesomeLibrary.isYesterday(yesterday)).toBe(true);
            expect(AwesomeLibrary.isYesterday(today)).toBe(false);
        });

        test('isTomorrow checks if a date is tomorrow', () => {
            const tomorrow = new Date(Date.now() + 86400000);
            const today = new Date();
            expect(AwesomeLibrary.isTomorrow(tomorrow)).toBe(true);
            expect(AwesomeLibrary.isTomorrow(today)).toBe(false);
        });

        test('isThisMonth checks if a date is in the current month', () => {
            const thisMonth = new Date();
            const nextMonth = new Date(Date.now() + 86400000 * 30);
            expect(AwesomeLibrary.isThisMonth(thisMonth)).toBe(true);
            expect(AwesomeLibrary.isThisMonth(nextMonth)).toBe(false);
        });

        test('isThisYear checks if a date is in the current year', () => {
            const thisYear = new Date();
            const nextYear = new Date(Date.now() + 86400000 * 365);
            expect(AwesomeLibrary.isThisYear(thisYear)).toBe(true);
            expect(AwesomeLibrary.isThisYear(nextYear)).toBe(false);
        });

        test('isSameDay checks if two dates are the same day', () => {
            const date1 = new Date('2023-01-01');
            const date2 = new Date('2023-01-01');
            const date3 = new Date('2023-01-02');
            expect(AwesomeLibrary.isSameDay(date1, date2)).toBe(true);
            expect(AwesomeLibrary.isSameDay(date1, date3)).toBe(false);
        });

        test('startOfDay returns the start of the day', () => {
            const date = new Date('2023-01-01T12:34:56');
            expect(AwesomeLibrary.startOfDay(date)).toEqual(new Date('2023-01-01'));
        });

        test('isLeapYear checks if a year is a leap year', () => {
            expect(AwesomeLibrary.isLeapYear(2020)).toBe(true);
            expect(AwesomeLibrary.isLeapYear(2021)).toBe(false);
        });

        test('daysInMonth returns the number of days in a month', () => {
            expect(AwesomeLibrary.daysInMonth(2023, 2)).toBe(28);
            expect(AwesomeLibrary.daysInMonth(2020, 2)).toBe(29);
            expect(AwesomeLibrary.daysInMonth(2023, 12)).toBe(31);
        });

        test('isValidDate checks if a date is valid', () => {
            expect(AwesomeLibrary.isValidDate(new Date('2023-01-01'))).toBe(true);
            expect(AwesomeLibrary.isValidDate(new Date('invalid-date'))).toBe(false);
        });

        test('isWeekend checks if a date is a weekend', () => {
            const weekend = new Date('2023-01-01'); // Sunday
            const weekday = new Date('2023-01-02'); // Monday
            expect(AwesomeLibrary.isWeekend(weekend)).toBe(true);
            expect(AwesomeLibrary.isWeekend(weekday)).toBe(false);
        });

        test('isFutureDate checks if a date is in the future', () => {
            const futureDate = new Date(Date.now() + 86400000); // Tomorrow
            const pastDate = new Date(Date.now() - 86400000); // Yesterday
            expect(AwesomeLibrary.isFutureDate(futureDate)).toBe(true);
            expect(AwesomeLibrary.isFutureDate(pastDate)).toBe(false);
        });

        test('isPastDate checks if a date is in the past', () => {
            const futureDate = new Date(Date.now() + 86400000); // Tomorrow
            const pastDate = new Date(Date.now() - 86400000); // Yesterday
            expect(AwesomeLibrary.isPastDate(futureDate)).toBe(false);
            expect(AwesomeLibrary.isPastDate(pastDate)).toBe(true);
        });

        test('isSameMonth checks if two dates are in the same month', () => {
            const date1 = new Date('2023-01-01');
            const date2 = new Date('2023-01-15');
            const date3 = new Date('2023-02-01');
            expect(AwesomeLibrary.isSameMonth(date1, date2)).toBe(true);
            expect(AwesomeLibrary.isSameMonth(date1, date3)).toBe(false);
        });

        test('isSameYear checks if two dates are in the same year', () => {
            const date1 = new Date('2023-01-01');
            const date2 = new Date('2023-12-31');
            const date3 = new Date('2024-01-01');
            expect(AwesomeLibrary.isSameYear(date1, date2)).toBe(true);
            expect(AwesomeLibrary.isSameYear(date1, date3)).toBe(false);
        });

        test('isToday checks if a date is today', () => {
            const today = new Date();
            const tomorrow = new Date(Date.now() + 86400000);
            expect(AwesomeLibrary.isToday(today)).toBe(true);
            expect(AwesomeLibrary.isToday(tomorrow)).toBe(false);
        });

        test('isYesterday checks if a date is yesterday', () => {
            const yesterday = new Date(Date.now() - 86400000);
            const today = new Date();
            expect(AwesomeLibrary.isYesterday(yesterday)).toBe(true);
            expect(AwesomeLibrary.isYesterday(today)).toBe(false);
        });

        test('isTomorrow checks if a date is tomorrow', () => {
            const tomorrow = new Date(Date.now() + 86400000);
            const today = new Date();
            expect(AwesomeLibrary.isTomorrow(tomorrow)).toBe(true);
            expect(AwesomeLibrary.isTomorrow(today)).toBe(false);
        });

        test('isThisMonth checks if a date is in the current month', () => {
            const thisMonth = new Date();
            const nextMonth = new Date(Date.now() + 86400000 * 30);
            expect(AwesomeLibrary.isThisMonth(thisMonth)).toBe(true);
            expect(AwesomeLibrary.isThisMonth(nextMonth)).toBe(false);
        });

        test('isThisYear checks if a date is in the current year', () => {
            const thisYear = new Date();
            const nextYear = new Date(Date.now() + 86400000 * 365);
            expect(AwesomeLibrary.isThisYear(thisYear)).toBe(true);
            expect(AwesomeLibrary.isThisYear(nextYear)).toBe(false);
        });

        test('isSameDay checks if two dates are the same day', () => {
            const date1 = new Date('2023-01-01');
            const date2 = new Date('2023-01-01');
            const date3 = new Date('2023-01-02');
            expect(AwesomeLibrary.isSameDay(date1, date2)).toBe(true);
            expect(AwesomeLibrary.isSameDay(date1, date3)).toBe(false);
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
