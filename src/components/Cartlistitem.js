import React from 'react'

const Cartlistitem = ({ allFoodsData }) => {
    return (
        <ul id='cart-list'>
            {
                allFoodsData && allFoodsData?.map((item, index) => (
                    <li className='row align-items-center'>
                        <div className='col-7 first-row-of-checkout'>
                            <img src={item?.foodImage} alt='first food img' />
                            <div>
                                <p className='foodname'>{item?.foodName}</p>
                                <p className='remove remove-btn'>Remove</p>
                            </div>
                        </div>
                        <p className='col-1 other-p'>{item?.foodQuantity}</p>
                        <p className='col-2 other-p'>N <span>{item?.foodAmount}</span>.00</p>
                        <p className='col-2 other-p'>N <span>{item?.totalFoodAmount}</span>.00</p>
                    </li>
                ))

            }
        </ul>
    )
}

export default Cartlistitem
