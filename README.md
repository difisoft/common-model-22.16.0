# Model Common

A TypeScript library module for Node.js.

## Installation

```bash
npm install model-common
```

## Usage

```typescript
import { Example } from 'model-common';

// Create a new instance
const example = new Example({ name: 'test', value: 42 });

// Get values
console.log(example.getName()); // 'test'
console.log(example.getValue()); // 42

// Update value
example.setValue(100);
console.log(example.getValue()); // 100
```

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Run tests:
   ```bash
   npm test
   ```

## Available Scripts

- `npm run build` - Build the project
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## License

MIT 