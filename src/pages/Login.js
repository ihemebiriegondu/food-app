import React from 'react'

import loginHeaderImage from '../assests/bon-vivant-qom5MPOER-I-unsplash 5.png'
import '../css/login.css'

const login = () => {
  return (
    <div className='mainlogin'>
      <div className='mainlogin-div'>
          <div className='login-img-div'>
            <img src={loginHeaderImage} alt='login header img' />
            <div></div>
          </div>
          <div className='login-form-div'>
            <form>
              <h3>Welcome Back!</h3>
              <div>
                <input type={'email'} placeholder='Your Email address' />
              </div>
              <div>
                <input type={'password'} placeholder='Your Password' />
              </div>
              <div className='btn-div'>
                <button>Login</button>
              </div>
              <div className='option-div'>
                <p>Create an account</p>
                <p>Forgot Password</p>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default login