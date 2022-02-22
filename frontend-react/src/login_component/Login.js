import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login'>
      <form className='form'>
          <div className="input__container">
            
            <input type="text" placeholder='Username'  required className="input"/>

          </div>
          <div className="input__container">
           
            <input type="password" placeholder='Password' required className="input" />
            
          </div>
          <div>
            <button className='login__btn'>Login</button>
          </div>
        </form>  
    </div>
  )
}

export default Login