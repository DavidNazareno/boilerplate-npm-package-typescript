const formatCurrency = (amount: number): string => {
  return `$${amount.toFixed(2)}`
}

export default formatCurrency
