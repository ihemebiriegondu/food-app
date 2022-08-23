import React from 'react'

import signupHeaderImage from '../assests/bon-vivant-qom5MPOER-I-unsplash 5 (1).png'
import { useNavigate } from 'react-router-dom'

import '../css/signup.css'

const Signup = () => {
  let navigate = useNavigate();

  return (
    <div className='mainsignup'>
      <div className='mainsignup-div'>
        <div className='signup-img-div'>
          <img src={signupHeaderImage} alt='signup header img' />
          <div></div>
        </div>
        <div className='signup-form-div'>
          <form>
            <h3>Welcome to Lilies!</h3>
            <div>
              <input type={'text'} placeholder='Your First Name' />
            </div>
            <div>
              <input type={'email'} placeholder='Your Email address' />
            </div>
            <div>
              <input type={'password'} placeholder='Your Password' />
            </div>
            <div className='btn-div'>
              <button>sign up</button>
            </div>
            <div className='option-div'>
              <p>Already have an account. <span onClick={() => { navigate("/login") }}>LOGIN</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup