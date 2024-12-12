// src/utilities/object.ts

/**
 * Deep clones an object
 * @param obj - Object to clone
 * @returns Cloned object
 */
export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Merges two objects together
 * @param target - Target object
 * @param source - Source object
 * @returns Merged object
 */
export function mergeObjects<T>(target: T, source: Partial<T>): T {
    return Object.assign({}, target, source);
}

/**
 * Gets the keys of an object
 * @param obj - Input object
 * @returns Object keys
 */
export function getObjectKeys(obj: object): string[] {
    return Object.keys(obj);
}

/**
 * Gets the values of an object
 * @param obj - Input object
 * @returns Object values
 */
export function getObjectValues<T>(obj: Record<string, T>): T[] {
    return Object.values(obj);
}

/**
 * Checks if an object is empty
 * @param obj - Input object
 * @returns Whether the object is empty
 */
export function isEmptyObject(obj: object): boolean {
    return Object.keys(obj).length === 0;
}

/**
 * Picks specific keys from an object
 * @param obj - Input object
 * @param keys - Keys to pick
 * @returns Object with picked keys
 */
export function pick<T extends object, K extends keyof T>(
    obj: T,
    keys: K[]
): Pick<T, K> {
    return keys.reduce(
        (result, key) => {
            if (key in obj) {
                result[key] = obj[key];
            }
            return result;
        },
        {} as Pick<T, K>
    );
}

/**
 * Omits specific keys from an object
 * @param obj - Input object
 * @param keys - Keys to omit
 * @returns Object with omitted keys
 */
export function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    const result = { ...obj };
    for (const key of keys) {
        delete result[key];
    }
    return result;
}

/**
 * Checks if an object has a key
 * @param obj - Input object
 * @param key - Key to check
 * @returns Whether the object has the key
 */
export function hasKey(obj: object, key: string): boolean {
    return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * Merges two objects deeply
 * @param target - Target object
 * @param source - Source object
 * @returns Merged object
 */
export function mergeDeep(target: any, source: any): any {
    for (const key in source) {
        if (source[key] && typeof source[key] === 'object') {
            target[key] = target[key] || {};
            mergeDeep(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

/**
 * Converts an object to an array of key-value pairs
 * @param obj - Input object
 * @returns Array of key-value pairs
 */
export function toEntries<T>(obj: Record<string, T>): [string, T][] {
    return Object.entries(obj);
}

/**
 * Checks if a value is a plain object
 * @param value - Value to check
 * @returns Whether the value is a plain object
 */
export function isPlainObject(value: unknown): boolean {
    return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * Recursively freezes an object to make it immutable
 * @param obj - Input object
 * @returns Frozen object
 */
export function freezeObject<T extends object>(obj: T): T {
    Object.freeze(obj);
    Object.keys(obj).forEach((key) => {
        if (
            typeof (obj as Record<string, any>)[key] === 'object' &&
            (obj as Record<string, any>)[key] !== null &&
            !Object.isFrozen((obj as Record<string, any>)[key])
        ) {
            freezeObject((obj as Record<string, any>)[key]);
        }
    });
    return obj;
}


/**
 * Performs a shallow comparison of two objects
 * @param obj1 - First object
 * @param obj2 - Second object
 * @returns Whether the objects are shallowly equal
 */
export function shallowEqual(obj1: Record<string, any>, obj2: Record<string, any>): boolean {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    return keys1.every((key) => obj1[key] === obj2[key]);
}

/**
 * Performs a deep comparison of two objects
 * @param obj1 - First object
 * @param obj2 - Second object
 * @returns Whether the objects are deeply equal
 */
export function deepEqual(obj1: any, obj2: any): boolean {
    if (obj1 === obj2) return true;
    if (
        typeof obj1 !== 'object' ||
        obj1 === null ||
        typeof obj2 !== 'object' ||
        obj2 === null
    ) {
        return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    return keys1.every((key) => deepEqual(obj1[key], obj2[key]));
}

/**
 * Inverts the keys and values of an object
 * @param obj - Input object
 * @returns Inverted object
 */
export function invertObject<T extends string | number>(obj: Record<string, T>): Record<T, string> {
    return Object.keys(obj).reduce((result, key) => {
        result[obj[key]] = key;
        return result;
    }, {} as Record<T, string>);
}

/**
 * Maps over the properties of an object
 * @param obj - Input object
 * @param callback - Callback function
 * @returns Mapped object
 */
export function mapObject<T, U>(
    obj: Record<string, T>,
    callback: (value: T, key: string) => U
): Record<string, U> {
    return Object.keys(obj).reduce((result, key) => {
        result[key] = callback(obj[key], key);
        return result;
    }, {} as Record<string, U>);
}

/**
 * Filters object properties based on a predicate
 * @param obj - Input object
 * @param predicate - Predicate function
 * @returns Filtered object
 */
export function filterObject<T>(
    obj: Record<string, T>,
    predicate: (value: T, key: string) => boolean
): Record<string, T> {
    return Object.keys(obj).reduce((result, key) => {
        if (predicate(obj[key], key)) {
            result[key] = obj[key];
        }
        return result;
    }, {} as Record<string, T>);
}

/**
 * Flattens a nested object into a single-level object
 * @param obj - Input object
 * @param prefix - Key prefix (used for recursion)
 * @returns Flattened object
 */
export function flattenObject(obj: Record<string, any>, prefix = ''): Record<string, any> {
    return Object.keys(obj).reduce((acc, key) => {
        const value = obj[key];
        const prefixedKey = prefix ? `${prefix}.${key}` : key;
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            Object.assign(acc, flattenObject(value, prefixedKey));
        } else {
            acc[prefixedKey] = value;
        }
        return acc;
    }, {} as Record<string, any>);
}

/**
 * Converts a flattened object back into a nested structure
 * @param obj - Flattened object
 * @returns Nested object
 */
export function unflattenObject(obj: Record<string, any>): object {
    return Object.keys(obj).reduce((result, key) => {
        key.split('.').reduce((acc: Record<string, any>, part, index, parts) => {
            if (index === parts.length - 1) {
                acc[part] = obj[key];
            } else {
                acc[part] = acc[part] || {};
            }
            return acc[part];
        }, result as Record<string, any>);
        return result;
    }, {} as Record<string, any>);
}

/**
 * Groups object entries based on a key selector function
 * @param obj - Input object
 * @param selector - Key selector function
 * @returns Grouped object
 */
export function groupBy<T>(
    obj: Record<string, T>,
    selector: (value: T, key: string) => string
): Record<string, T[]> {
    return Object.keys(obj).reduce((acc, key) => {
        const groupKey = selector(obj[key], key);
        if (!acc[groupKey]) acc[groupKey] = [];
        acc[groupKey].push(obj[key]);
        return acc;
    }, {} as Record<string, T[]>);
}

/**
 * Removes `null` or `undefined` values from an object
 * @param obj - Input object
 * @returns Compact object
 */
export function compactObject<T>(obj: Record<string, T | null | undefined>): Record<string, T> {
    return Object.keys(obj).reduce((acc, key) => {
        if (obj[key] != null) {
            acc[key] = obj[key] as T;
        }
        return acc;
    }, {} as Record<string, T>);
}

/**
 * Safely retrieves a deeply nested value from an object
 * @param obj - Input object
 * @param path - Array of keys representing the path
 * @returns Nested value or `undefined`
 */
export function getNestedValue(obj: any, path: string[]): any {
    return path.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

/**
 * Safely sets a deeply nested value in an object
 * @param obj - Target object
 * @param path - Array of keys representing the path
 * @param value - Value to set
 * @returns Modified object
 */
export function setNestedValue(obj: any, path: string[], value: any): any {
    path.reduce((acc, key, index) => {
        if (index === path.length - 1) {
            acc[key] = value;
        } else {
            acc[key] = acc[key] || {};
        }
        return acc[key];
    }, obj);
    return obj;
}

/**
 * Renames keys of an object based on a mapping
 * @param obj - Input object
 * @param keyMap - Mapping of old keys to new keys
 * @returns Object with renamed keys
 */
export function renameKeys<T>(obj: Record<string, T>, keyMap: Record<string, string>): Record<string, T> {
    return Object.keys(obj).reduce((acc, key) => {
        const newKey = keyMap[key] || key;
        acc[newKey] = obj[key];
        return acc;
    }, {} as Record<string, T>);
}

/**
 * Finds keys present in one object but not another
 * @param obj1 - First object
 * @param obj2 - Second object
 * @returns Array of keys in `obj1` but not `obj2`
 */
export function difference(obj1: object, obj2: object): string[] {
    const keys1 = new Set(Object.keys(obj1));
    const keys2 = new Set(Object.keys(obj2));
    return [...keys1].filter((key) => !keys2.has(key));
}

/**
 * Finds keys common between two objects
 * @param obj1 - First object
 * @param obj2 - Second object
 * @returns Array of keys common to both objects
 */
export function intersection(obj1: object, obj2: object): string[] {
    const keys1 = new Set(Object.keys(obj1));
    const keys2 = new Set(Object.keys(obj2));
    return [...keys1].filter((key) => keys2.has(key));
}
