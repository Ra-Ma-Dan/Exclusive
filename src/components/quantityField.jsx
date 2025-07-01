import { useState } from 'react'

export default function QuantityField() {
  const [quantity, setQuantity] = useState(1)

  const decrease = () => {
    setQuantity(prev => Math.max(1, prev - 1))  // minimum 1
  }

  const increase = () => {
    setQuantity(prev => prev + 1)
  }

  const onChange = (e) => {
    const val = e.target.value
    if (val === '') {
      setQuantity('') // allow empty while editing
      return
    }
    const num = Number(val)
    if (!isNaN(num) && num >= 1) {
      setQuantity(num)
    }
  }

  return (
    <div className="inline-flex items-center border rounded overflow-hidden">
      <button
        onClick={decrease}
        className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-6xl font-bold"
        aria-label="Decrease quantity"
      >
        –
      </button>
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={onChange}
        className="w-20 text-center text-6xl outline-none"
      />
      <button
        onClick={increase}
        className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-6xl font-bold"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}