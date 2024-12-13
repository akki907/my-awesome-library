/**
 * Converts an RGB color to a hexadecimal color code
 * @param r - The red value (0-255)
 * @param g - The green value (0-255)
 * @param b - The blue value (0-255)
 * @returns The hexadecimal color code
 */
export function rgbToHex(r: number, g: number, b: number): string {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
}

/**
 * Generates a random hexadecimal color code
 * @returns A random color code
 */
export function generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * Memoizes a function to cache its results based on input arguments
 * @param func - The function to memoize
 * @returns A memoized version of the function
 */
export function memoize<T extends (...args: any[]) => any>(func: T): T {
    const cache: Record<string, any> = {};
    return function (...args: any[]): any {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        }
        const result = func(...args);
        cache[key] = result;
        return result;
    } as T;
}

/**
 * Debounces a function to delay its execution until after a certain amount of time has passed
 * @param func - The function to debounce
 * @param delay - The time in milliseconds to wait before executing the function after the last call
 * @returns A debounced version of the function
 */
export function debounce(func: Function, delay: number): Function {
    let timer: NodeJS.Timeout;

    return function (...args: any[]) {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

/**
 * Throttles a function to execute it at most once in a given time period
 * @param func - The function to throttle
 * @param delay - The time in milliseconds to wait before allowing the next call
 * @returns A throttled version of the function
 */
export function throttle(func: Function, delay: number): Function {
    let lastTime = 0;

    return function (...args: any[]) {
        const now = Date.now();
        if (now - lastTime >= delay) {
            func(...args);
            lastTime = now;
        }
    };
}
