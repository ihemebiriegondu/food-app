import React, { useEffect } from 'react'

import { CgPen } from 'react-icons/cg'
import { BsFillExclamationCircleFill } from 'react-icons/bs'
import heroPerson from '../assests/icons8-male-user-48.png'

import '../css/profile.css'

function validateUpdatedProfile(event) {
  const profileEmail = document.getElementById("profile-email");
  const profileName = document.getElementById("profile-name");
  const myAlert = document.getElementById("profile-alert");

  if (profileEmail.value === "" || profileName.value === "") {
    event.preventDefault();

    myAlert.classList.add("active");

    setTimeout(hideAlert, 3000)
    function hideAlert() {
      myAlert.classList.remove("active");
    }

    document.getElementById("alert-message").textContent = "Email address and Name field cannnot be empty!"
  } else {
    localStorage.setItem("Email", profileEmail.value)
    localStorage.setItem("name", profileName.value);
  }
}

function validateUpdatedPassword(event) {
  const profileOldPassword = document.getElementById("profile-oldpassword");
  const profileNewPassword = document.getElementById("profile-newpassword");
  const myAlert = document.getElementById("profile-alert");

  if (profileOldPassword.value === "" && profileNewPassword.value === "") {
    event.preventDefault();

    myAlert.classList.add("active");

    setTimeout(hideAlert, 3000)
    function hideAlert() {
      myAlert.classList.remove("active");
    }

    document.getElementById("alert-message").textContent = "Change password input fields cannot be empty"
  } else if ((profileOldPassword.value === "") || profileOldPassword.value !== localStorage.getItem("password")) {
    event.preventDefault();

    myAlert.classList.add("active");

    setTimeout(hideAlert, 3000)
    function hideAlert() {
      myAlert.classList.remove("active");
    }

    document.getElementById("alert-message").textContent = "Old password is not correct"
  } else if (profileOldPassword.value !== "" && profileNewPassword.value === "") {
    event.preventDefault();

    myAlert.classList.add("active");

    setTimeout(hideAlert, 3000)
    function hideAlert() {
      myAlert.classList.remove("active");
    }

    document.getElementById("alert-message").textContent = "New password cannot be empty"
  } else if (profileOldPassword.value === profileNewPassword.value) {
    event.preventDefault();

    myAlert.classList.add("active");

    setTimeout(hideAlert, 3000)
    function hideAlert() {
      myAlert.classList.remove("active");
    }

    document.getElementById("alert-message").textContent = "Old password cannot be the same as new password"
  } else {
    localStorage.setItem("password", profileNewPassword.value);
  }
}


const Profile = () => {
  useEffect(() => {
    updatePP()
  }, [])

  function updatePP() {

    if (localStorage.getItem("profilePicture") == null) {
      localStorage.setItem("profilePicture", document.getElementById("alternate-img").src)
      document.getElementById("profile-image").src = document.getElementById("alternate-img").src;
    } else {
      document.getElementById("profile-image").src = localStorage.getItem("profilePicture")
    }
  }

  function loadProfileImage(event) {
    localStorage.setItem("profilePicture", URL.createObjectURL(event.target.files[0]))
    document.getElementById("profile-image").src = localStorage.getItem("profilePicture");
  }




  if (localStorage.getItem("name") == null) {
    document.getElementById("person-name").textContent = "User"
  }
  const newName = localStorage.getItem("name");
  let signupEmailInput = localStorage.getItem("Email");


  return (
    <div className='mainProfile col-xl-9 col-sm-11 col-10'>
      <img className='d-none' src={heroPerson} alt='person img for storing' id='alternate-img' />

      <div className='myalert' id='profile-alert'>
        <BsFillExclamationCircleFill className='exclamation-icon' />
        <p id='alert-message'></p>
      </div>

      <div className='profile-container'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <div className='profile-intro-div m-auto d-flex align-items-baseline'>
            <div className='profile-img-div me-4'>
              <img src={heroPerson} alt='person img' id='profile-image' />
            </div>
            <div className=''>
              <input id="profile-image-file" type="file" capture onChange={(event) => {
                loadProfileImage(event)
              }} />
              <label for='profile-image-file'>
                <p className=''>Change <CgPen /></p>
              </label>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={(event) => {
            validateUpdatedProfile(event)
          }}>
            <h6 className='mb-5'>Personal details</h6>

            <div className='row row-cols-2'>
              <div>
                <label for='profile-name'>Name</label>
                <input id='profile-name' type={'text'} name="profile-name" defaultValue={newName} />
              </div>

              <div>
                <label for='profile-email'>Email</label>
                <input id='profile-email' type={'email'} defaultValue={signupEmailInput} />
              </div>
            </div>

            <div className='pb-5'>
              <button type='submit'>Save changes</button>
            </div>
          </form>


          <form onSubmit={(event) => {
            validateUpdatedPassword(event)
          }}>
            <h6 className='mb-5 mt-5'>Change password</h6>

            <div className='row row-cols-2'>
              <div>
                <label for='profile-oldpassword'>Old password</label>
                <input id='profile-oldpassword' type={'password'} />
              </div>
              <div>
                <label for='profile-newpassword'>New password</label>
                <input id='profile-newpassword' type={'password'} />
              </div>
            </div>

            <div>
              <button type='submit'>Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile