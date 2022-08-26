function AddtoCartSection() {

    function addToCartFunction() {

        const foodImage = document.getElementById("foodImage").src;
        const foodName = document.getElementById("foodName").textContent;
        const foodAmount = document.getElementById("foodAmount").textContent;
        const foodQuantity = document.getElementById("value-itself").textContent;

        const totalAmount = foodAmount * foodQuantity
        const totalFoodAmount = totalAmount.toString();

        const foods = [
            {foodImage: foodImage,
            foodName: foodName,
            foodAmount: foodAmount,
            foodQuantity: foodQuantity,
            totalFoodAmount: totalFoodAmount}
        ]

        window.localStorage.setItem('allFoods', JSON.stringify(foods));
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

/*
 addToCartFunction();

 

function addToCartFunction() {
        

        localStorage.setItem("foods", JSON.stringify([...JSON.parse(localStorage.getItem("foods") || "[]"),
        {  }]));
    } */