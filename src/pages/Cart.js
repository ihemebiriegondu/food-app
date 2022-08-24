import React from 'react'

import firstMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 5 (3).png'
import secondMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 6.png'

import '../css/cart.css'

const Cart = () => {
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

            <ul>
              <li className='row align-items-center'>
                <div className='col-7 first-row-of-checkout'>
                  <img src={firstMenuFood} alt='first food img' />
                  <div>
                    <p className='foodname'>Stir Fry Pasta</p>
                    <p className='remove'>Remove</p>
                  </div>
                </div>
                <p className='col-1 other-p'>3</p>
                <p className='col-2 other-p'>N 1,000.00</p>
                <p className='col-2 other-p'>N 3,000.00</p>
              </li>

              <li className='row align-items-center'>
                <div className='col-7 first-row-of-checkout'>
                  <img src={secondMenuFood} alt='first food img' />
                  <div>
                    <p className='foodname'>Stir Fry Pasta</p>
                    <p className='remove'>Remove</p>
                  </div>
                </div>
                <p className='col-1 other-p'>3</p>
                <p className='col-2 other-p'>N 1,000.00</p>
                <p className='col-2 other-p'>N 3,000.00</p>
              </li>
              
            </ul>
          </div>

          <div className='total-div'>
            <p>Total: <span>N 30,000.00</span></p>
          </div>

          <div className='button-div'>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart