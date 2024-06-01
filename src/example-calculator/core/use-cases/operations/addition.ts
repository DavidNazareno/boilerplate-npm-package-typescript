import OperationInput from 'example-calculator/core/interfaces/operation-input'

/**
 * Addition Operation
 * This function adds two numbers.
 */
const addition = (input: OperationInput): number => {
  return input.a + input.b
}

export default addition
