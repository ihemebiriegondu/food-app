import React from "react";
import '../css/cart.css'

function AddtoCartSection() {

    window.onload = loadCartFunction;

    function loadCartFunction() {
        if (localStorage.getItem("allFoods") == null) return;

        let allFoods = Array.from(JSON.parse(localStorage.getItem("allFoods")));
        console.log(allFoods)

        allFoods.forEach(food => {
            const list = document.getElementById("cart-list");

            const li = document.createElement("li");
            li.innerHTML =

                `   <div class='row align-items-center div'>
                        <div class='col-7 first-row-of-checkout'>
                            <img src=${food.foodImage} alt='first food img' />
                            <div>
                                <p class='foodname'>${food.foodName}</p>
                                <p class='remove' onclick="removeTask(this)">Remove</p>
                            </div>
                        </div>
                        <p class='col-1 other-p'>${food.foodQuantity}</p>
                        <p class='col-2 other-p'>N <span>${food.foodAmount}</span>.00</p>
                        <p class='col-2 other-p'>N <span>${food.totalFoodAmount}</span>.00</p>
                    </div>
                `;
            list.insertBefore(li, list.children[0]);
        });
    }

    function addToCartFunction() {

        const Image = document.getElementById("foodImage");
        const Name = document.getElementById("foodName");
        const Amount = document.getElementById("foodAmount");
        const foodAmount = document.getElementById("foodAmount").textContent;
        const Quantity = document.getElementById("value-itself");
        const foodQuantity = document.getElementById("value-itself").textContent;

        const totalAmount = foodAmount * foodQuantity

        const list = document.getElementById("cart-list")



        if (foodQuantity === "" || foodQuantity === "0") {
            return
        }

        localStorage.setItem("allFoods", JSON.stringify([...JSON.parse(localStorage.getItem("allFoods") || "[]"),
        {
            foodImage: Image.src,
            foodName: Name.textContent,
            foodAmount: Amount.textContent,
            foodQuantity: Quantity.textContent,
            totalFoodAmount: totalAmount.toString()
        }]));


        const li = document.createElement("li");
        li.innerHTML =

            `
            <div class='row align-items-center div'>
                <div class='col-7 first-row-of-checkout'>
                    <img src=${Image.src} alt='first food img' />
                    <div>
                        <p class='foodname'>${Name.textContent}</p>
                        <p class='remove' onclick="removeTask(this)">Remove</p>
                    </div>
                </div>
                <p class='col-1 other-p'>${Quantity.textContent}</p>
                <p class='col-2 other-p'>N <span>${Amount.textContent}</span>.00</p>
                <p class='col-2 other-p'>N <span>${totalAmount.toString()}</span>.00</p>
            </div>
        `;
        list.insertBefore(li, list.children[0]);


        /*var current_tasks = document.querySelectorAll(".remove");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }*/

    }

    function openCart() {
        const cartBackdrop = document.querySelector(".cart-backdrop");
        cartBackdrop.classList.add("active");

        const addToCartBackdrop = document.querySelector(".addtocart-backdrop");
        if (addToCartBackdrop.classList.contains("active")) {
            addToCartBackdrop.classList.remove("active")
        }
    }



    return <button onClick={() => {
        addToCartFunction();
        openCart();
    }}>Add to cart</button>;
}

export default AddtoCartSection