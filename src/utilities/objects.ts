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
