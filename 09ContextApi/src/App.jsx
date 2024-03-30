import  { useContext } from 'react'

import './App.css'
import { MyContext } from './Hooks/UseValue'

function App() {
    const{value , increment , decrement}  = useContext(MyContext)

  return (
    <>
      <h1 className='text-2xl , bg-pink-600 p-16 rounded-lg'> Increase or Decrease the Value Through Context Api</h1>
      <div className='mt-5 text-3xl text-green-600'> value : {value}</div>
      <button className='bg-pink-600 text-white mr-2 mt-3 border-blue-700' onClick={increment}>click here to Incre</button>
      <button className='bg-pink-600 text-white mt-3' onClick={decrement}>click here to decre</button>
    </>
  )
}

export default App
