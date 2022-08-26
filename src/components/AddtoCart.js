import React from 'react'


import firstMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 5 (4).png'

import '../css/addtocart.css'
import AddtoCartSection from './AddtoCartSection';
import Counter from './Reactcounter';

const AddtoCart = () => {
    return (
        <div className='backdrop addtocart-backdrop'>
            <div className='addtocart-container'>
                <div>
                    <div className=''>
                        <img src={firstMenuFood} alt='first-img' id='foodImage' />
                    </div>
                    <h4 id='foodName'>Blueberry Toasts and smoothie</h4>
                    <p>Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.
                    </p>
                    <div className='cart-amount-div'>
                        <p>NGN <span id='foodAmount'>2000</span>.00</p>
                        <p>10-20 Mins</p>
                        <p>10 Pcs Avail</p>
                    </div>

                    <div className='add-to-cart-button-container'>
                        <div className='add-to-cart-button-counter'>
                            <Counter />
                        </div>
                        
                        <AddtoCartSection />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddtoCart