import { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { storeContext } from '../Context.jsx/FileContext'

// eslint-disable-next-line react/prop-types
const Navbar = ({setLogin}) => {
    const[menu,setMenu] = useState("Home")
    const {getTotalAmount} = useContext(storeContext)
  return (
    <div className="Navbar">
    <Link to='/'><img src={assets.logo} alt='Logo' className='logo' /></Link>
    <ul className='menu'>
        <Link to='/' className={menu === 'Home' ? 'active': ''} onClick={() => setMenu('Home')}>Home</Link>
        <a href='#exploreMenu'  className={menu === 'Menu' ? 'active': ''} onClick={() => setMenu('Menu')}>Menu</a>
        <a href='#foodDownload'  className={menu === 'Mobile-app' ? 'active': ''} onClick={() => setMenu('Mobile-app')}>Mobile-app</a>
        <a href='#footer'    className={menu === 'Contact us' ? 'active': ''} onClick={() => setMenu('Contact us')}>Contact us</a>
    </ul>
    <div className='navbar-right'>
        <img src={assets.search_icon} alt=''/>
        <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt=''/></Link>
            <div className={getTotalAmount()===0?<></>:'dot'}></div>
        </div>
        <button onClick={()=> setLogin(true)}>sign in</button>
    </div>
    </div>
  )
}

export default Navbar
