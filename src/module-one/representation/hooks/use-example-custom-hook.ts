import { useState } from 'react'

const UseExampleCustomHook = () => {
  const [result, setResult] = useState<number>(0)

  const calculate = (a: number, b: number) => {
    setResult(a + b)
  }

  return {
    result,
    calculate,
  }
}

export default UseExampleCustomHook
