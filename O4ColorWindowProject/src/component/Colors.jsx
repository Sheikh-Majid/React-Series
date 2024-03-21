import React ,{ useState} from 'react'

const Colors = () => {

    const [color, setcolor] = useState("");

    const changeR = () => {
        document.body.style.backgroundColor = "red";
    }
     const changeY = () => {
        document.body.style.backgroundColor = "yellow";
    }
     const changeG = () => {
        document.body.style.backgroundColor = "green";
    }
     const changeB = () => {
        document.body.style.backgroundColor = "blue";
    }
     const changeC = () => {
        document.body.style.backgroundColor = "cyan";
    }
      const changeP = () => {
        document.body.style.backgroundColor = "purple";
    }
      const changePP = () => {
        document.body.style.backgroundColor = "pink";
    }
      const changeO = () => {
        document.body.style.backgroundColor = "orange";
    }
     const changeBB = () => {
        document.body.style.backgroundColor = "black";
    }
     const changeW = () => {
        document.body.style.backgroundColor = "white";
    }
    const changeGr = () => {
        document.body.style.backgroundColor = "gray";
    }
     const changeL = () => {
        document.body.style.backgroundColor = "lime";
    }






  return ( 
    <div >
          <div className='flex flex-row bg-pink-200  p-8 rounded-xl cursor-pointer'>
              <div className='bg-red-600 p-2 mr-2 rounded-xl' onClick={() => setcolor("red")}>Red</div>
              <div className='bg-yellow-200 p-2 mr-2 rounded-xl' onClick={changeY}>Yellow</div>
              <div className='bg-green-600 p-2 mr-2 text-white rounded-xl' onClick={changeG}>Green</div>
              <div className='bg-blue-500 p-2 mr-2 rounded-xl' onClick={changeB}>Blue</div>
              <div className='bg-purple-500 p-2 mr-2 rounded-xl text-white' onClick={changeP}>Purple</div>
              <div className='bg-pink-300 p-2 mr-2 rounded-xl' onClick={changePP}>Pink</div>
              <div className='bg-orange-300 p-2 mr-2 rounded-xl' onClick={changeO}>Orange</div>
              <div className='bg-black p-2 mr-2 rounded-xl text-white' onClick={changeBB}>Black</div>
              <div className='bg-white p-2 mr-2 rounded-xl' onClick={changeW}>White</div>
              <div className='bg-gray-500 p-2 mr-2 rounded-xl text-white' onClick={changeGr}>Gray</div>
              <div className='bg-lime-400 p-2 mr-2 rounded-xl' onClick={changeL}>Lime</div>     
              <div className='bg-cyan-300 p-2 mr-2 rounded-xl' onClick={changeC}>Cyan</div>
         </div>
    </div>
  )
}

export default Colors
