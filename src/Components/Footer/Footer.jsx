import {assets} from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer" id="footer">
    <div className="footer-content">
    <div className="footer-content-left">
        <img src={assets.logo} alt='logo'/>
        <p>At Tomato, we’re passionate about connecting food lovers with their favorite restaurants. Whether you are craving local eats or international cuisines, we deliver fresh, hot meals right to your doorstep.</p>
        <div className='footer-socail-icons'>
            <img src={assets.facebook_icon} alt=''/>
            <img src={assets.twitter_icon}/>
            <img src={assets.linkedin_icon}/>
        </div>
    </div>
    <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
    </div>
    <div className="footer-content-right">
       <h2>GET IN TOUCH</h2>
       <ul>
        <li>+91 9205053877</li>
        <li>support@tomato.com</li>
       </ul>
       </div>
    </div>
    <hr/>
    <p className='copyright'>CopyRight 2024 © Tomato.com. All rights reserved.</p>
    </div>
  )
}

export default Footer
