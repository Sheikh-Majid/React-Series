
import './App.css'
import ExamProps from './Component/ExamProps'
import Prop from './Component/Prop'

function App() {
  
  return (
    <>
      <h1 className='bg-green-400 p-10 rounded-xl'>WelCome to Third Project</h1>
      <Prop brand="Adidas" rs={2000}  cart={"Show Now"} />
      <Prop brand={"Niki"} Prices={50000} cart={"AddTocart"} />
      <ExamProps />
    </>
  )
}

export default App
