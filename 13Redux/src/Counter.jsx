import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './feature/Counter/CounterSlice'
const Counter = () => {
    const count = useSelector((state) => state.counter)
  return (
      <>
          {count}
      </>
  )
}

export default Counter