# Core

The `core` folder contains the fundamental logic and interfaces that define the core functionality of the package. This folder is central to the architecture of your package, providing the essential structures and contracts that other parts of the package will rely on.

## Purpose

The primary purpose of the `core` folder is to:

1. Define interfaces that establish the contracts and structures used across the package.
2. Implement the core use cases that is independent of external frameworks or technologies.
3. Ensure that the essential logic is modular, reusable, and easily testable.

## What to Put Here

### Interfaces

- **TypeScript Interfaces**: Define the shape and contract of the data structures and services used in your package.
- **Examples**: Service interfaces, data models, configuration interfaces.

### Core Logic

- **Use Cases**: Implement the core functionalities and algorithms that are central to the package.
- **Examples**: Calculation algorithms, data processing functions, core utilities.

## Example Structure

core
│
├── interfaces
│ └── interface.ts # Example interface
│
├── use-cases
│ └── use-case-number-1.ts # Core business logic implementation
│
└── index.ts # Exporting core functionalities