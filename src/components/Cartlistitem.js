import React from 'react'

const Cartlistitem = ({ allFoodsData }) => {
    return (
        <ul id='cart-list'>
            {
                allFoodsData && allFoodsData?.map((item, index) => (
                    <li className='row align-items-center'>

                    </li>
                ))

            }
        </ul>
    )
}

export default Cartlistitem
