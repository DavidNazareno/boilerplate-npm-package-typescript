# Utils

The `utils` folder contains utility functions, constants, and configurations that are used throughout your package. These utilities provide common functionality that can be reused across different parts of the package, ensuring consistency and reducing code duplication.

## Purpose

The primary purpose of the `utils` folder is to:

1. **Provide Utility Functions**: Implement reusable functions that perform common tasks.
2. **Define Constants**: Store constant values that are used across the package.
3. **Manage Configuration**: Handle configuration settings and environment variables in a centralized manner.

## What to Put Here

### Utility Functions

- **Reusable Functions**: Implement functions that perform common, generic tasks that can be used in multiple places.
- **Examples**: Data manipulation functions, formatting utilities, helper functions.

### Constants

- **Constant Values**: Define constant values that are used throughout the package to avoid magic numbers and strings.
- **Examples**: API endpoints, error messages, default values.

### Configuration

- **Configuration Settings**: Manage configuration settings and environment variables.
- **Examples**: Configuration files, environment-specific settings.

## Example Structure
utils
│
├── constants.ts # Define constant values
├── config.ts # Manage configuration settings
├── helpers.ts # Implement utility functions
└── index.ts # Exporting utilities
