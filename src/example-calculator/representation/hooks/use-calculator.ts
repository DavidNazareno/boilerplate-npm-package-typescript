import Calculator from 'example-calculator/calculator'
import { useState } from 'react'

/**
 * useCalculator Hook
 * This hook provides methods for basic arithmetic operations using the Calculator class.
 */
const useCalculator = () => {
  const [result, setResult] = useState<number | null>(null)
  const calculator = new Calculator()

  const add = (a: number, b: number) => {
    const res = calculator.add(a, b)
    setResult(res)
  }

  const subtract = (a: number, b: number) => {
    const res = calculator.subtract(a, b)
    setResult(res)
  }

  const multiply = (a: number, b: number) => {
    const res = calculator.multiply(a, b)
    setResult(res)
  }
  const divide = (a: number, b: number) => {
    try {
      const res = calculator.divide(a, b)
      setResult(res)
    } catch (error) {
      setResult(null)
      console.error((error as Error).message)
      throw new Error((error as Error).message)
    }
  }
  return { result, add, subtract, multiply, divide }
}

export default useCalculator
