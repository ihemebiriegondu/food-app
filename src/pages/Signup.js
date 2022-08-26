import React from 'react'

import signupHeaderImage from '../assests/bon-vivant-qom5MPOER-I-unsplash 5 (1).png'
import { BsFillExclamationCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import '../css/signup.css'

const Signup = () => {

  let navigate = useNavigate();

  return (
    <div className='mainsignup'>
      <div className='myalert' id='login-alert'>
        <BsFillExclamationCircleFill className='exclamation-icon' />
        <p>Incomplete Details</p>
      </div>
      <div className='mainsignup-div'>
        <div className='signup-img-div'>
          <img src={signupHeaderImage} alt='signup header img' />
          <div></div>
        </div>
        <div className='signup-form-div'>
          <form onSubmit={window['validateSignUp']} id='form2'>
            <h3>Welcome to Lilies!</h3>
            <div className='input-div' id='signup-name'>
              <input type={'text'} placeholder='Your First Name' />
            </div>
            <div className='input-div' id='signup-email'>
              <input type={'email'} placeholder='Your Email address' />
            </div>
            <div className='input-div password-div' id='signup-password'>
              <input type={'password'} placeholder='Your Password' />
              <p onClick={window['showBtnSignUpFunction']}>show</p>
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