// src/utilities/array.ts

/**
 * Shuffles an array randomly
 * @param array - Input array
 * @returns Shuffled array
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

/**
 * Sorts an array of objects by a key
 * @param array - Input array
 * @param key - Key to sort by
 * @returns Sorted array
 */
export function sortByKey<T>(array: T[], key: keyof T): T[] {
  return [...array].sort((a, b) => (a[key] > b[key] ? 1 : -1));
}

/**
 * Chunks an array into smaller arrays
 * @param array - Input array
 * @param size - Chunk size
 * @returns Chunked array
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

/**
 * Finds the difference between two arrays
 * @param array1 - First array
 * @param array2 - Second array
 * @returns Difference between arrays
 */
export function difference<T>(array1: T[], array2: T[]): T[] {
  return array1.filter((item) => !array2.includes(item));
}

/**
 * Finds the intersection of two arrays
 * @param array1 - First array
 * @param array2 - Second array
 * @returns Intersection of arrays
 */
export function intersect<T>(array1: T[], array2: T[]): T[] {
  return array1.filter((item) => array2.includes(item));
}

/**
 * Removes duplicate values from an array
 * @param array - Input array
 * @returns Array with unique values
 */
export function removeDuplicates<T>(array: T[]): T[] {
  return [...new Set(array)];
}
