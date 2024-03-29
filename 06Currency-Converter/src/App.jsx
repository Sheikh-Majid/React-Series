import { useEffect, useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useAuth from './Hooks/useAuth'

function App() {
  
  

  
  const [count, setCount] = useState(0)
  const [islogin, login, logout] = useAuth();

  return (
    <>
      <h1 className='text-pink-600 text-4xl font-serif'>Currency-Converter App</h1>
     
      <InputBox />
      
      <div className='flex justify-items-center bg-pink-200' >
        {
          <>
           <button onClick={logout} >Logout</button>
            <button onClick={login}>Login</button>
          </>
        
          }
      </div>

    </>
  )
}

export default App
