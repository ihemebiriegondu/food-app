import React from 'react'

import firstMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 5 (3).png'
import secondMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 6.png'

const Cartlist = () => {


    const ul = document.querySelector("#cart-list");
    let foods = Array.from(JSON.parse(localStorage.getItem("foods")));

    console.log(foods)

    foods.forEach(food => {
        const li = document.createElement("li");
        li.innerHTML = `
                    <div id="img-div">
                        <img id="www" src="./images/logo-websites-31321.png" alt="">
                    </div>
                    <div id="div">
                        <div id="links-div">
                            <div id="links-sub-div">
                            <div>
                                <p id="original-link">${food.originalLink}</p>
                                <p class="bubbed-link">${food.bubbedLink}</p>
                            </div>
                            <p id="link-time">${food.clickedDate} ${food.clickedTime}</p>
                        </div>
                        </div>
                        <div id="btn-div">
                            <button id="detailed"><a href="#">Detailed stats</a></button>
                            <button class="copy" id="${food.bubbedLink}" onclick="copyTextFunction()">
                            <img src="./images/icons8-copy-17.png" alt="">Copy</button>
                    </div>
                `
        ul.insertBefore(li, ul.children[0]);
    })

    localStorage.removeItem('myLinks');



    return (
        <ul id='cart-list'>
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
    )
}

export default Cartlist