import OperationInput from 'example-calculator/core/interfaces/operation-input'

/**
 * Multiplication Operation
 * This function multiplies two numbers.
 */
const multiplication = (input: OperationInput): number => {
  return input.a * input.b
}

export default multiplication
