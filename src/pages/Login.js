import React from 'react'

import loginHeaderImage from '../assests/bon-vivant-qom5MPOER-I-unsplash 5.png'
import { BsFillExclamationCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import '../css/login.css'


function showBtnLoginFunction() {
  const loginPasswordInput = document.querySelector("#login-password input")

  if (loginPasswordInput.type === 'password') {
    loginPasswordInput.type = 'text'
  } else {
    loginPasswordInput.type = 'password'
  }
}


function validateLogin(event) {

  const loginEmailInput = document.querySelector("#login-email input");
  const loginPasswordInput = document.querySelector("#login-password input");
  const myAlert = document.getElementById("login-alert");

  let signupEmailInput = localStorage.getItem("Email");
  let signupPasswordInput = localStorage.getItem("password");

  if (loginEmailInput.value === '' || loginPasswordInput.value === '' || loginEmailInput.value !== signupEmailInput || loginPasswordInput.value !== signupPasswordInput) {
    myAlert.classList.add("active");

    setTimeout(hideAlert, 3000)
    function hideAlert() {
      myAlert.classList.remove("active");
    }
    event.preventDefault();
  } else {
    document.getElementById("form1").action = '/dashboard'
  }
}




const Login = () => {
  let navigate = useNavigate();

  return (
    <div className='mainlogin'>
      <div className='myalert' id='login-alert'>
        <BsFillExclamationCircleFill className='exclamation-icon' />
        <p>Incorrect Details</p>
      </div>
      <div className='mainlogin-div'>
        <div className='login-img-div'>
          <img src={loginHeaderImage} alt='login header img' />
          <div></div>
        </div>
        <div className='login-form-div'>
          <form onSubmit={(event) => {
            validateLogin(event)
          }} id='form1'>
            <h3>Welcome Back!</h3>
            <div className='input-div' id='login-email'>
              <input type={'email'} placeholder='Your Email address' />
            </div>
            <div className='input-div password-div' id='login-password'>
              <input type={'password'} placeholder='Your Password' />
              <p onClick={showBtnLoginFunction}>show</p>
            </div>
            <div className='btn-div'>
              <button type='submit'>Login</button>
            </div>
            <div className='option-div'>
              <p onClick={() => { navigate("/signup") }}>Create an account</p>
              <p>Forgot Password</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login