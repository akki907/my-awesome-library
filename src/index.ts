// src/index.ts

// Import all utility modules
import * as ArrayUtils from './utilities/arrays';
import * as StringUtils from './utilities/strings';
import * as NumberUtils from './utilities/numbers';
import * as DateUtils from './utilities/dates';
import * as ObjectUtils from './utilities/objects';
import * as UUIDUtils from './utilities/uuid';
import * as helperUtils from './utilities/helper';
/**
 * The `AwesomeLibrary` class provides a collection of utility functions for various data types,
 * including numbers, objects, strings, arrays, dates, and UUIDs. It re-exports all utility functions
 * directly on the class for easy access and also exposes the utility modules for more granular access.
 *
 * ## Number Utilities
 * - `randomNumber`: Generates a random number.
 * - `formatNumber`: Formats a number according to specified options.
 * - `roundTo`: Rounds a number to a specified number of decimal places.
 * - `findMax`: Finds the maximum value in an array of numbers.
 * - `findMin`: Finds the minimum value in an array of numbers.
 *
 * ## Object Utilities
 * - `deepClone`: Creates a deep clone of an object.
 * - `deepEqual`: Checks if two objects are deeply equal.
 * - `compactObject`: Removes falsy values from an object.
 * - `omit`: Omits specified keys from an object.
 * - `pick`: Picks specified keys from an object.
 * - `invertObject`: Inverts the keys and values of an object.
 *
 * ## String Utilities
 * - `truncateString`: Truncates a string to a specified length.
 * - `isValidEmail`: Validates if a string is a valid email address.
 * - `toSlug`: Converts a string to a URL-friendly slug.
 * - `capitalize`: Capitalizes the first letter of a string.
 *
 * ## Array Utilities
 * - `shuffleArray`: Shuffles the elements of an array.
 * - `removeDuplicates`: Removes duplicate elements from an array.
 * - `sortByKey`: Sorts an array of objects by a specified key.
 * - `chunk`: Splits an array into chunks of a specified size.
 * - `difference`: Returns the difference between two arrays.
 * - `intersect`: Returns the intersection of two arrays.
 *
 * ## Date Utilities
 * - `formatDate`: Formats a date according to specified options.
 * - `daysBetween`: Calculates the number of days between two dates.
 * - `addDays`: Adds a specified number of days to a date.
 * - `isSameDay`: Checks if two dates are the same day.
 *
 * ## UUID Utility
 * - `generateUUID`: Generates a UUID.
 *
 * ## Exposed Utility Modules
 * - `array`: Access to all array utility functions.
 * - `string`: Access to all string utility functions.
 * - `number`: Access to all number utility functions.
 * - `date`: Access to all date utility functions.
 * - `object`: Access to all object utility functions.
 * - `uuid`: Access to the UUID utility function.
 */

const AwesomeLibrary = {
  ...ArrayUtils,
  ...StringUtils,
  ...NumberUtils,
  ...DateUtils,
  ...ObjectUtils,
  ...UUIDUtils,
  ...helperUtils,
};

// Export modules and the main class
export * as ArrayUtils from './utilities/arrays';
export * as StringUtils from './utilities/strings';
export * as NumberUtils from './utilities/numbers';
export * as DateUtils from './utilities/dates';
export * as ObjectUtils from './utilities/objects';
export * as UUIDUtils from './utilities/uuid';
export * as helperUtils from './utilities/helper';
export default AwesomeLibrary;
