import { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
// eslint-disable-next-line react/prop-types
const LoginPopUp = ({setLogin}) => {
    const [currlog,setCurrLog] = useState("Signup")
  return (
    <div className='login'>
    <form className='login-container'>
    <div className='login-container-title'>
      <h2>{currlog}</h2>
      <img src={assets.cross_icon} alt='' onClick={() => setLogin(false)}/>
    </div>
    <div className='login-inputs'>
        {currlog==='Signup'?<input type='text' placeholder='Enter name here' required />:<></>}
        <input type='email' placeholder='Enter email here' required />
        <input type='password' placeholder='Enter password here' required />
    </div>
    <button>{currlog==='Signup'?"Create account":"Login"}</button>
    <div className='login-condition'>
        <input type='checkbox' required/>
        <p>By continuing, I agree to the terms and conditions of use and privacy policy</p>
    </div>
    {currlog==='Login'?
    <p>Create a new account?<span onClick={() => setCurrLog('Signup')}>click here</span></p>:
    <p>Already have an account?<span onClick={() => setCurrLog('Login')}>login here</span></p>}
    </form>
    </div>
  )
}

export default LoginPopUp
