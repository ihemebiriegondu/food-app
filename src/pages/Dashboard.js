import React, { useEffect } from 'react'
import DashboardNav from '../components/DashboardNav'
import AddtoCart from '../components/AddtoCart.js'

import firstMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 4.png'
import secondMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 2.png'
import thirdMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 3.png'
import forthMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 1.png'
import fifthMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 5 (4).png'
import sixthMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 10.png'


import '../css/dashboard.css'
import Menu from '../components/Menu'
import Checkout from '../components/Checkout'
import Cart from './Cart'
import Orders from './Orders'
import Profile from './Profile'

const menuData = [
    { foodImage: firstMenuFood, foodName: 'Burger Meal', foodInfo: 'The in-house pasta and chicken by chef Moose', foodAmount: '500', foodInfoForAdd: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.' },
    { foodImage: secondMenuFood, foodName: 'Stir Fry Pasta', foodInfo: 'The in-house pasta and chicken by chef Moose', foodAmount: '1500', foodInfoForAdd: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.' },
    { foodImage: thirdMenuFood, foodName: 'Meat Balls', foodInfo: 'The in-house pasta and chicken by chef Moose', foodAmount: '1000', foodInfoForAdd: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.' },
    { foodImage: forthMenuFood, foodName: 'Stir Fry Pasta', foodInfo: 'The in-house pasta and chicken by chef Moose', foodAmount: '2000', foodInfoForAdd: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.' },
    { foodImage: fifthMenuFood, foodName: 'Blueberry Toasts and smoothie', foodInfo: 'The in-house pasta and chicken by chef Moose', foodAmount: '3000', foodInfoForAdd: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.' },
    { foodImage: sixthMenuFood, foodName: 'Stir Fry Pasta', foodInfo: 'The in-house pasta and chicken by chef Moose', foodAmount: '1000', foodInfoForAdd: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.' }
]


const Dashboard = () => {

    useEffect(() => {
        getTime();
        updatePP();
    }, [])

    function getTime() {
        const d = new Date();
        let hour = d.getHours();

        if (hour <= 12) {
            let greeting = "Good morning, "
            document.getElementById("greeting").textContent = greeting;
        } else if (hour <= 15) {
            let greeting = "Good afternoon, "
            document.getElementById("greeting").textContent = greeting;
        } else if (hour <= 23) {
            let greeting = "Good evening, "
            document.getElementById("greeting").textContent = greeting;
        }
    }

    
  function updatePP() {

    if (localStorage.getItem("profilePicture") == null) {
      localStorage.setItem("profilePicture", document.getElementById("alternate-img").src)
      document.getElementById("profile-image").src = document.getElementById("alternate-img").src;
    } else {
      document.getElementById("profile-image").src = localStorage.getItem("profilePicture")
    }
  }


    if (localStorage.getItem("name") == null) {
        document.getElementById("person-name").textContent = "User"
    }
    const newName = localStorage.getItem("name");

    const profilePicture = localStorage.getItem("profilePicture");

    return (
        <div className='mainDashboard'>
            <div className='row'>
                <div className='col-xl-3 col-sm-1 col-2 p-0'></div>
                <div className='p-0 mynav'>
                    <DashboardNav />
                </div>

                <div className='col-xl-9 col-sm-11 col-10 dashboard-container'>
                    <div className='dashboard-container-div'>
                        <div className='dashboard-header'>
                            <div>
                                <h2><span id='greeting'>Good morning, </span><span id='person-name'>{newName}</span></h2>
                                <p>What delicious meal are you craving today?</p>
                            </div>
                            <div>
                                <div>
                                    <div className='dashboard-hero-img-div'>
                                        <img src={profilePicture} alt='person img' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Menu menuData={menuData} />
                        </div>
                    </div>
                </div>
            </div>
            <Profile />
            <AddtoCart />
            <Checkout />
            <Cart />
            <Orders />
        </div>

    )
}

export default Dashboard