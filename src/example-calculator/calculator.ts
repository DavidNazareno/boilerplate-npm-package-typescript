import OperationInput from './core/interfaces/operation-input'
import addition from './core/use-cases/operations/addition'
import division from './core/use-cases/operations/division'
import multiplication from './core/use-cases/operations/multiplication'
import subtraction from './core/use-cases/operations/subtraction'

class Calculator {
  add(a: number, b: number) {
    const input: OperationInput = {
      a,
      b,
    }
    return addition(input)
  }

  subtract(a: number, b: number) {
    const input: OperationInput = {
      a,
      b,
    }
    return subtraction(input)
  }

  divide(a: number, b: number) {
    if (b === 0) {
      throw new Error('Cannot divide by zero')
    }
    return division({ a, b })
  }

  multiply(a: number, b: number) {
    return multiplication({ a, b })
  }
}

export default Calculator
