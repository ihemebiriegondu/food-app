import React from 'react'
import { useEffect } from 'react'
import '../css/checkout.css'
import GobackButton from './GobackButton'
import { BsFillExclamationCircleFill } from 'react-icons/bs'

const Checkout = () => {
    useEffect(() => {
        reloadOrderFunction()
    }, [])

    function reloadOrderFunction() {
        let allFoods = Array.from(JSON.parse(localStorage.getItem("allFoods")));

        allFoods.forEach(food => {
            const ordersList = document.getElementById("orders-list");

            const lifirst = document.createElement("li");
            lifirst.innerHTML =

                `   <div class='row div'>
                        <div class='col-lg-7 col-6 first-row-of-checkout'>
                            <img src=${food.foodImage} alt='first food img' />
                            <div>
                                <p class='foodname'>${food.foodName}</p>
                                <p class='remove' onclick="removeTask(this)">Remove</p>
                            </div>
                        </div>
                        <p class='col-1 other-p'>${food.foodQuantity}</p>
                        <p class='col-lg-2 col-3 other-p'>N <span>${food.totalFoodAmount}</span>.00</p>
                        <p class='col-2 pending-p'>Cooking</p>
                    </div>
                `;
            ordersList.insertBefore(lifirst, ordersList.children[0]);

            const ordersListList = document.querySelectorAll("#orders-list li")
            document.getElementById("ordersAmount").textContent = ordersListList.length;
        });
    }




    function addToOrdersFunction() {

        let allFoods = Array.from(JSON.parse(localStorage.getItem("allFoods")));

        allFoods.forEach(food => {
            const ordersList = document.getElementById("orders-list");

            const lifirst = document.createElement("li");
            lifirst.innerHTML =

                `   <div class='row div'>
                        <div class='col-lg-7 col-6 first-row-of-checkout'>
                            <img src=${food.foodImage} alt='first food img' />
                            <div>
                                <p class='foodname'>${food.foodName}</p>
                                <p class='remove' onclick="removeTask(this)">Remove</p>
                            </div>
                        </div>
                        <p class='col-1 other-p'>${food.foodQuantity}</p>
                        <p class='col-lg-2 col-3 other-p'>N <span>${food.totalFoodAmount}</span>.00</p>
                        <p class='col-2 pending-p'>Cooking</p>
                    </div>
                `;
            ordersList.insertBefore(lifirst, ordersList.children[0]);

            const ordersListList = document.querySelectorAll("#orders-list li")
            document.getElementById("ordersAmount").textContent = ordersListList.length;
        });
    }





    function verifySubmit(event) {
        event.preventDefault();

        if (document.getElementById("card-no").value === "" || document.getElementById("card-exp").value === ""
            || document.getElementById("card-cvv").value === "" || document.getElementById("card-pin").value === "") {

            const myAlert = document.getElementById("checkout-alert");
            myAlert.classList.add("active");

            setTimeout(hideAlert, 3000)
            function hideAlert() {
                myAlert.classList.remove("active");
            }

        } else {
            addToOrdersFunction()

            const checkoutBackdrop = document.querySelector(".checkout-backdrop");
            if (checkoutBackdrop.classList.contains("active")) {
                checkoutBackdrop.classList.remove("active")
            }
            const orderBackdrop = document.querySelector(".orders-backdrop");
            orderBackdrop.classList.add("active");

            document.getElementById("card-no").value = ""
            document.getElementById("card-exp").value = ""
            document.getElementById("card-cvv").value = ""
            document.getElementById("card-pin").value = ""

        }
    }



    return (
        <div className='backdrop checkout-backdrop'>
            <div className='checkout-container'>
                <div className='myalert' id='checkout-alert'>
                    <BsFillExclamationCircleFill className='exclamation-icon' />
                    <p>Incorrect Details</p>
                </div>

                <div>
                    <h4>Checkout</h4>
                    <form id='form3' onSubmit={(event) => {
                        verifySubmit(event)
                    }}>
                        <div>
                            <input id='card-no' type={'tel'} placeholder='Card Number' />
                        </div>
                        <div>
                            <input id='card-exp' type={'tel'} placeholder='Exp Date' />
                        </div>
                        <div>
                            <input id='card-cvv' type={'tel'} placeholder='CVV/CVV2' />
                        </div>
                        <div>
                            <input id='card-pin' type={'tel'} placeholder='Card Pin' />
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