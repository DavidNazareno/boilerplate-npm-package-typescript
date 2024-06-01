import React, { useState } from 'react'
import { useCalculator } from '../hooks'
/**
 * CalculatorComponent
 * This component provides a user interface for performing basic arithmetic operations.
 */
const CalculatorComponent: React.FC = () => {
  const { result, add, subtract, multiply, divide } = useCalculator()
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />
      <div>
        <button onClick={() => add(a, b)}>Add</button>
        <button onClick={() => subtract(a, b)}>Subtract</button>
        <button onClick={() => multiply(a, b)}>Multiply</button>
        <button onClick={() => divide(a, b)}>Divide</button>
      </div>
      <h2>Result: {result !== null ? result : 'Error'}</h2>
    </div>
  )
}

export default CalculatorComponent
