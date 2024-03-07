# Order Processing System

This is a simple order processing system implemented in TypeScript. It consists of multiple classes spread across different files for better organization and modularity.

## Files

- `item.ts`: Defines the interface for an item and exports it. An item includes properties such as name, value, description, and price.
- `orderItem.ts`: Implements the `OrderItem` class, which manages a collection of items and provides methods for calculating the price for each item.
- `orderProcessor.ts`: Extends the `OrderItem` class to implement order processing functionality. It includes methods for calculating the total cost, applying loyalty discounts, and formatting the order summary.
- `main.ts`: Initializes an `OrderProcessor` object with a customer name and processes an order.

## Usage

1. Install dependencies: Ensure you have Node.js and TypeScript installed on your system.
2. Compile TypeScript files: Use the TypeScript compiler (tsc) or any other build tool to compile the TypeScript files into JavaScript.
3. Run the main file: Execute the compiled `main.js` file using Node.js to process orders.

```bash
npx ts-node main.ts
