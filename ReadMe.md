# Awesome Utility Library

A comprehensive TypeScript utility library with a wide range of helpful functions.

## Installation

```bash
npm install @akki907/my-awesome-library
```

## Usage

```typescript
import { AwesomeLibrary } from '@akki907/my-awesome-library';

// String Utilities
console.log(AwesomeLibrary.truncateString('Hello World', 5)); // 'Hello...'
console.log(AwesomeLibrary.isValidEmail('test@example.com')); // true
console.log(AwesomeLibrary.toSlug('Hello World!')); // 'hello-world'

// Number Utilities
console.log(AwesomeLibrary.formatNumber(1000000)); // '1,000,000'
console.log(AwesomeLibrary.generateUUID()); // 'f47ac10b-58cc-4372-a567-0e02b2c3d479'

// Array Utilities
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(AwesomeLibrary.removeDuplicates(numbers)); // [1, 2, 3, 4, 5]

// Date Utilities
const date = new Date();
console.log(AwesomeLibrary.formatDate(date)); // '12/25/2023'
```

## Methods

### String Utilities

- `truncateString(str, maxLength, suffix)`: Truncate a string
- `isValidEmail(email)`: Validate email address
- `toSlug(str)`: Convert string to URL-friendly slug

### Number Utilities

- `formatNumber(num)`: Add thousand separators
- `generateUUID()`: Create a unique identifier
- `roundTo(num, decimalPlaces)`: Round to specific decimal places

### Array Utilities

- `shuffleArray(array)`: Randomly shuffle array
- `removeDuplicates(array)`: Remove duplicate values

### Date Utilities

- `formatDate(date, format)`: Format date to string
- `daysBetween(date1, date2)`: Calculate days between dates

## License

MIT

```

New Features Added:
1. String Utilities
   - String truncation
   - Email validation
   - Slug generation

2. Number Utilities
   - Number formatting
   - UUID generation
   - Precise rounding

3. Array Utilities
   - Array shuffling
   - Duplicate removal

4. Date Utilities
   - Date formatting
   - Days between dates calculation

Would you like me to elaborate on any of these new functions or add any specific utility methods?
```
