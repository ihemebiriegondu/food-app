import React from 'react'

import firstMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 5 (3).png'
import secondMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 6.png'
import GobackButton from '../components/GobackButton'

import '../css/orders.css'

const Orders = () => {

    return (
        <div className='backdrop orders-backdrop'>
            <div className='orders-container'>
                <div>
                    <h4>Your Orders</h4>

                    <div className='table-container'>
                        <div className='tableHeader row'>
                            <p className='col-lg-7 col-6'>Item</p>
                            <p className='col-1'>Qty</p>
                            <p className='col-lg-2 col-3'>Price</p>
                            <p className='col-2'>Status</p>
                        </div>

                        <ul>
                            <li className='row'>
                                <div className='col-lg-7 col-6 first-row-of-checkout'>
                                    <img src={firstMenuFood} alt='first food img' />
                                    <div>
                                        <p className='foodname'>Stir Fry Pasta</p>
                                        <p className='remove'>Remove</p>
                                    </div>
                                </div>
                                <p className='col-1 other-p'>3</p>
                                <p className='col-lg-2 col-3 other-p'>N 1,000.00</p>
                                <p className='col-2 delivered-p'>Delivered</p>
                            </li>

                            <li className='row'>
                                <div className='col-lg-7 col-6 first-row-of-checkout'>
                                    <img src={secondMenuFood} alt='first food img' />
                                    <div>
                                        <p className='foodname'>Stir Fry Pasta</p>
                                        <p className='remove'>Remove</p>
                                    </div>
                                </div>
                                <p className='col-1 other-p'>3</p>
                                <p className='col-lg-2 col-3 other-p'>N 1,000.00</p>
                                <p className='col-2 pending-p'>Cooking</p>
                            </li>

                        </ul>
                    </div>
                </div>
                <GobackButton buttontext={'Go back'} />
            </div>
        </div>
    )
}

export default Orders