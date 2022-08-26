import React from 'react'
import '../css/checkout.css'
import GobackButton from './GobackButton'


const Checkout = () => {
    return (
        <div className='backdrop checkout-backdrop'>
            <div className='checkout-container'>
                <div>
                    <h4>Checkout</h4>
                    <form>
                        <div>
                            <input type={'tel'} placeholder='Card Number' />
                        </div>
                        <div>
                            <input type={'tel'} placeholder='Exp Date' />
                        </div>
                        <div>
                            <input type={'tel'} placeholder='CVV/CVV2' />
                        </div>
                        <div>
                            <input type={'tel'} placeholder='Card Pin' />
                        </div>
                        <button>Make Payment</button>
                    </form>
                </div>

                <div className='gobackdiv'>
                    <GobackButton buttontext={'Go Back'} />
                </div>
            </div>
        </div>
    )
}

export default Checkout