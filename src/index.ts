// src/index.ts

// Import all utility modules
import * as ArrayUtils from './utilities/arrays';
import * as StringUtils from './utilities/strings';
import * as NumberUtils from './utilities/numbers';
import * as DateUtils from './utilities/dates';
import * as ObjectUtils from './utilities/objects';
import * as UUIDUtils from './utilities/uuid';

export class AwesomeLibrary {
    // Re-export all utility functions directly on the class

    // Number Utilities
    static randomNumber = NumberUtils.randomNumber;
    static formatNumber = NumberUtils.formatNumber;
    static roundTo = NumberUtils.roundTo;
    static findMax = NumberUtils.findMax;
    static findMin = NumberUtils.findMin;

    // String Utilities
    static truncateString = StringUtils.truncateString;
    static isValidEmail = StringUtils.isValidEmail;
    static toSlug = StringUtils.toSlug;
    static capitalize = StringUtils.capitalize;

    // Array Utilities
    static shuffleArray = ArrayUtils.shuffleArray;
    static removeDuplicates = ArrayUtils.removeDuplicates;
    static sortByKey = ArrayUtils.sortByKey;
    static chunk = ArrayUtils.chunk;
    static difference = ArrayUtils.difference;
    static intersect = ArrayUtils.intersect;


    // Date Utilities
    static formatDate = DateUtils.formatDate;
    static daysBetween = DateUtils.daysBetween;
    static addDays = DateUtils.addDays;
    static isSameDay = DateUtils.isSameDay;


    // UUID Utility
    static generateUUID = UUIDUtils.generateUUID;

    // Expose utility modules for more granular access
    static array = ArrayUtils;
    static string = StringUtils;
    static number = NumberUtils;
    static date = DateUtils;
    static object = ObjectUtils;
    static uuid = UUIDUtils;
}

// Export modules and the main class
export * as ArrayUtils from './utilities/arrays';
export * as StringUtils from './utilities/strings';
export * as NumberUtils from './utilities/numbers';
export * as DateUtils from './utilities/dates';
export * as ObjectUtils from './utilities/objects';
export * as UUIDUtils from './utilities/uuid';

export default AwesomeLibrary;