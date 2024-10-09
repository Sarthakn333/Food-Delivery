import { Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'

function App() {
   const [login,setLogin] = useState(false)

  return (
    <>
    {login ? <LoginPopUp setLogin={setLogin}/> : <></>}
    <div className='app'>
    <Navbar setLogin={setLogin}/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/placeOrder' element={<PlaceOrder />}></Route>
    </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
