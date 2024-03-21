import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';


import './App.css'

function App() {
   
  // let count = 10;
  let[count, setCount] = useState(10);
  const addvalue = () => {
    if (count == 20) {
    //  toast('Here is your toast.');
      toast.success("You limit are over for A Day!")
   //   console.log("You limit are over for A Day!")
      return;
    } else {
     setCount(count+1) 
   }
   
  }

  const RemoveValue = () => {
   
    if (count == 1) {
      toast.error("You can't go below than 1 value!")
      return;
    } else {
      setCount(count-1)
    }
    

  }

  return (
    <>
      <h1 className='heading'>Welcome 2nd Mini Project in React</h1>
      <h2> Counter App {count }</h2>

      <br />

      <button className='btn1' onClick={addvalue}> Add</button>
      {count}
      <br />
      <button className='btn2' onClick={RemoveValue}>Remove</button>
      {count}
        <Toaster />

    </>
  )
}

export default App
