
import { configureStore } from '@reduxjs/toolkit'

import CounterReducer from '../feature/Counter/CounterSlice'

export const store = configureStore({
    reducer: {
      counter : CounterReducer
  },
})