import OperationInput from 'example-calculator/core/interfaces/operation-input'

/**
 * Subtraction Operation
 * This function subtracts the second number from the first number.
 */
const subtraction = (input: OperationInput): number => {
  return input.a - input.b
}

export default subtraction
