import OperationInput from 'example-calculator/core/interfaces/operation-input'

/**
 * Division Operation
 * This function divides the first number by the second number.
 */
const division = (input: OperationInput): number => {
  if (input.b === 0) {
    throw new Error('Cannot divide by zero')
  }
  return input.a / input.b
}

export default division
