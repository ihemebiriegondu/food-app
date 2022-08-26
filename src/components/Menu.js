import React from 'react'

import '../css/menu.css'

function updateModal(event) {
    const button = event.target;

    const dataName = button.getAttribute("data-name");
    const dataImage = button.getAttribute("data-image");
    const dataAmount = button.getAttribute("data-amount");
    const dataLongInfo = button.getAttribute("data-longinfo");

   document.getElementById("foodImage").src = dataImage;
   document.getElementById("foodName").textContent = dataName;
   document.getElementById("foodAmount").textContent = dataAmount;
   document.getElementById("foodInfoForAdd").textContent = dataLongInfo
}

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
                                <p>N {item?.foodAmount}</p>
                                <p onClick={(event) => {
                                    updateModal(event);
                                    openAddToCart();
                                }} className='add-to-cart-button' data-name={item?.foodName} data-image={item?.foodImage} data-amount={item?.foodAmount} data-longinfo={item?.foodInfoForAdd}
                                >Add to cart</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Menu