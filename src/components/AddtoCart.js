import React from 'react'

import firstMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 5 (4).png'

import '../css/addtocart.css'

const AddtoCart = () => {
    return (
        <div className='backdrop addtocart-backdrop'>
            <div className='addtocart-container'>
                <div>
                    <div className=''>
                        <img src={firstMenuFood} alt='first-img' />
                    </div>
                    <h4>Blueberry Toasts and smoothie</h4>
                    <p>Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.
                    </p>
                    <div className='cart-amount-div'>
                        <p>NGN 2000.00</p>
                        <p>10-20 Mins</p>
                        <p>10 Pcs Avail</p>
                    </div>

                    <div className='add-to-cart-button-container'>
                        <div className='add-to-cart-button-counter'>
                            <span>-</span>
                            <span>3</span>
                            <span>+</span>
                        </div>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddtoCart