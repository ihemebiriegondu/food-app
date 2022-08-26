import React from "react";
import { useEffect } from "react";
import '../css/cart.css'

function AddtoCartSection() {

    useEffect(() => {
        loadCartFunction()
    }, [])

    function loadCartFunction() {
        if (localStorage.getItem("allFoods") == null) return;

        let allFoods = Array.from(JSON.parse(localStorage.getItem("allFoods")));

        allFoods.forEach(food => {
            const cartList = document.getElementById("cart-list");

            const lifirst = document.createElement("li");
            lifirst.innerHTML =

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
            cartList.insertBefore(lifirst, cartList.children[0]);
            const cartListList = document.querySelectorAll("#cart-list li")
            document.getElementById("cartAmount").textContent = cartListList.length;

            const cartListToAdd = document.querySelectorAll("#cart-list li #amounttoadd")
            let cartListSum = 0;

            for (let i = 0; i < cartListToAdd.length; i++) {
                const newCartListToAdd = parseInt(cartListToAdd[i].textContent)
                cartListSum += newCartListToAdd;
            }
            document.getElementById("totalCheckoutValue").textContent = cartListSum;

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

        const cartList = document.getElementById("cart-list")

        if (foodQuantity === "" || foodQuantity === "0") return;


        localStorage.setItem("allFoods", JSON.stringify([...JSON.parse(localStorage.getItem("allFoods") || "[]"),
        {
            foodImage: Image.src,
            foodName: Name.textContent,
            foodAmount: Amount.textContent,
            foodQuantity: Quantity.textContent,
            totalFoodAmount: totalAmount.toString()
        }]));


        const licart = document.createElement("li");
        licart.innerHTML =

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
                <p class='col-2 other-p'>N <span id='amounttoadd'>${totalAmount.toString()}</span>.00</p>
            </div>
        `;
        cartList.insertBefore(licart, cartList.children[0]);
        const cartListList = document.querySelectorAll("#cart-list li")
        document.getElementById("cartAmount").textContent = cartListList.length;

        const cartListToAdd = document.querySelectorAll("#cart-list li #amounttoadd")
        let cartListSum = 0;

        for (let i = 0; i < cartListToAdd.length; i++) {
            const newCartListToAdd = parseInt(cartListToAdd[i].textContent)
            cartListSum += newCartListToAdd;
        }
        document.getElementById("totalCheckoutValue").textContent = cartListSum;

        Quantity.textContent = "0";


        /*var current_tasks = document.querySelectorAll(".remove");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }*/

        /*function removeTask(event) {
      let allFoods = Array.from(JSON.parse(localStorage.getItem("allFoods")));
      allFoods.forEach(food => {
        if (food.food === event.parentNode.children[1].value) {
          allFoods.splice(allFoods.indexOf(food), 1);
        }
      });
      localStorage.setItem("allFoods", JSON.stringify(allFoods));
      event.parentElement.remove();
    } */

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