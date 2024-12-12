# My Awesome TypeScript Library

A simple utility library with helpful functions, now with TypeScript support.

## Installation

```bash
npm install my-awesome-library
```

## Usage

```typescript
import { AwesomeLibrary } from 'my-awesome-library';

// Generate a random number between 1 and 10
console.log(AwesomeLibrary.randomNumber(1, 10));

// Capitalize a string
console.log(AwesomeLibrary.capitalize('hello')); // 'Hello'

// Check if a number is even
console.log(AwesomeLibrary.isEven(4)); // true

// Check if a value is a number
console.log(AwesomeLibrary.isNumber(42)); // true
```

## Methods

- `randomNumber(min, max)`: Generates a random number in a given range
- `capitalize(str)`: Capitalizes the first letter of a string
- `isEven(num)`: Checks if a number is even
- `isNumber(value)`: Checks if a value is a valid number

## TypeScript Support

This library is written in TypeScript and provides full type definitions.

## License

MIT