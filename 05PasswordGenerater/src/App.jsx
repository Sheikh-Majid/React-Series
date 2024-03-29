import { useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {

  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const[charAllow , setCharAllow] = useState(false)
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  
  const passwordGernerator = useCallback(
    () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (number) {
        str += "0123456789";
      }
      if (charAllow) {
        str += "!@#$%^&*()";
      }

      for (let i = 0; i < length; i++) {
        pass += str.charAt(Math.floor(Math.random() * str.length )+1);
      }
      setPassword(pass);
    }
    , [length, number, charAllow, setPassword])
  
  useEffect(() => {
    passwordGernerator();
  },[number, charAllow, length , passwordGernerator])

  const CopyPasswordF = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    // passwordRef.current?.select();
    setPassword("");
    setCharAllow(false);
    setNumber(false);
    setLength(8);
    alert("Password Copied");
  },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg shadow-md bg-gray-800 px-6 py-6 my-8'>
        <h1 className='text-white text-center text-4xl'>Passwor Generator</h1>
        <input type="text"
          value={password}
          className='mt-3 px-3 py-2 w-full'
          readOnly
          placeholder='Password'
          ref={passwordRef}
         />
        <button onClick={CopyPasswordF} className='bg-blue-700 outline-none text-white px-2 py-2 mt-2'>copy</button>
        <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
            <input type="range"
              min={6}
              max={40}
              className='cursor-pointer'
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
          
            />
            <label className='text-white ml-3'>Length : { length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" 
              defaultChecked={charAllow}
              id='charInput'
              className='cursor-pointer  ml-2 mt-1'
              
              onChange={
                () => {
                  setCharAllow((prev) => !prev);
                }
              }
          
            />
            <label className='text-white '>character</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" 
              defaultChecked={number}
              id='NumInput'
              className='cursor-pointer  ml-2 mt-1'
              
              onChange={
                () => {
                  setNumber((prev) => !prev);
                }
              }
          
            />
            <label className='text-white '>Number</label>
        </div>
      </div>
      </div>
     
     
    </>
  )
}

export default App
