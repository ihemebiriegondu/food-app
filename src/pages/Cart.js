import React from 'react'

import GobackButton from '../components/GobackButton'

import '../css/cart.css'

const Cart = () => {

  function openCheckout() {
    const checkoutBackdrop = document.querySelector(".checkout-backdrop");
    checkoutBackdrop.classList.add("active")

    const cartBackdrop = document.querySelector(".cart-backdrop");
    if (cartBackdrop.classList.contains("active")) {
      cartBackdrop.classList.remove("active")
    }
  }

  return (
    <div className='backdrop cart-backdrop'>
      <div className='cart-container'>
        <div>
          <h4>Your Cart</h4>

          <div className='table-container'>
            <div className='tableHeader row'>
              <p className='col-7'>Item</p>
              <p className='col-1'>Qty</p>
              <p className='col-2'>Unit Price</p>
              <p className='col-2'>Sub-total</p>
            </div>

            <ul id='cart-list'>

            </ul>

          </div>

          <div className='total-div'>
            <p>Total: <span>N 30,000.00</span></p>
          </div>

          <div className='button-div'>
            <button onClick={openCheckout}>Checkout</button>
          </div>
        </div>

        <GobackButton buttontext={'Go Back'} />
      </div>
    </div>
  )
}

export default Cart