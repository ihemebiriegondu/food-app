import React from 'react'

import '../css/menu.css'

const Menu = ({ menuData }) => {

    function openAddToCart() {
        const addtocartBackdrop = document.querySelector(".addtocart-backdrop");

        addtocartBackdrop.classList.add("active")
    }

    return (
        <div className='row row-cols-lg-3 row-cols-sm-2 row-cols-1'>

            {
                menuData && menuData?.map((item, index) => (
                    <div className='col m-auto'>
                        <div className='menu-card'>
                            <div><img src={item?.foodImage} alt="first food" /></div>
                            <div><h6>{item?.foodName}</h6></div>
                            <div><p>{item?.foodInfo}</p></div>
                            <div className='menu-amount-container'>
                                <p>{item?.foodAmount}</p>
                                <p onClick={openAddToCart} className='add-to-cart-button'>Add to cart</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Menu