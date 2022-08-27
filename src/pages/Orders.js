import React from 'react'

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

                        <ul id='orders-list'>

                        </ul>
                    </div>
                </div>
                <GobackButton buttontext={'Go back'} />
            </div>
        </div>
    )
}

export default Orders