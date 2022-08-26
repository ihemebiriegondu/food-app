import React from 'react'
import '../css/gobackbutton.css'
import { IoMdArrowRoundBack } from 'react-icons/io'

const GobackButton = ({ buttontext }) => {
    function hideOrderBackdrop() {
        const orderBackdrop = document.querySelector(".orders-backdrop");
        if (orderBackdrop.classList.contains("active")) {
            orderBackdrop.classList.remove("active")
        }
    }

    function hideCartBackdrop() {
        const cartBackdrop = document.querySelector(".cart-backdrop");
        if (cartBackdrop.classList.contains("active")) {
            cartBackdrop.classList.remove("active")
        }
    }

    function hideCheckoutBackdrop() {
        const checkoutBackdrop = document.querySelector(".checkout-backdrop");
        if (checkoutBackdrop.classList.contains("active")) {
            checkoutBackdrop.classList.remove("active")
        }
    }

    return (
        <button className='goback mt-5' onClick={() => {
            hideOrderBackdrop();
            hideCartBackdrop();
            hideCheckoutBackdrop();
        }}><IoMdArrowRoundBack className='me-3' />{buttontext}</button>
    )
}

export default GobackButton