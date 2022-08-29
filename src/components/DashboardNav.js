import React from 'react'

import { Link } from 'react-router-dom'
import Logo from '../assests/Group 12.png'

import { AiFillHome } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { IoCalendarClear } from 'react-icons/io5'
import { FaShoppingCart } from 'react-icons/fa'
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri'

import '../css/dashboardnav.css'

const DashboardNav = () => {

    function openNav() {
        const dashboardNav = document.querySelector(".dashboard-nav");
        dashboardNav.classList.toggle("active")

        const contentsToBeHidden = document.querySelectorAll(".content-to-be-hidden");
        for (let i = 0; i < contentsToBeHidden.length; i++) {
            contentsToBeHidden[i].classList.toggle("active");
        }

        const myNav = document.querySelector(".mynav")
        myNav.classList.toggle("active");

        const menuIconOpen = document.getElementById("menu-icon-open");
        const menuIconClose = document.getElementById("menu-icon-close");

        if (dashboardNav.classList.contains("active")) {
            menuIconOpen.classList.add("d-none");
            menuIconClose.classList.remove("d-none");
        } else {
            menuIconOpen.classList.remove("d-none");
            menuIconClose.classList.add("d-none");
        }
    }

    function addActiveToLinkFunction(e) {
        let i, links;

        links = document.getElementsByClassName("dasboard-active-link");
        for (i = 0; i < links.length; i++) {
            links[i].className = links[i].className.replace(" active", "");
        }
        e.currentTarget.className += " active";
    }

    function closeProfile() {
        const myProfile = document.querySelector(".mainProfile");
        if (myProfile.classList.contains("active")) {
            myProfile.classList.remove("active")
        }
    }

    function openProfile() {
        const myProfile = document.querySelector(".mainProfile");

        myProfile.classList.add("active")
    }

    function openYourOrders() {
        const orderBackdrop = document.querySelector(".orders-backdrop");

        orderBackdrop.classList.add("active")
    }

    function openCart() {
        const cartBackdrop = document.querySelector(".cart-backdrop");

        cartBackdrop.classList.add("active")
    }

    return (
        <nav className='dashboard-nav'>
            <div className='dashboard-menu-icon d-xl-none d-block text-center pt-5'>
                <span onClick={openNav}>
                    <RiMenu2Line className='fs-4' id='menu-icon-open' />
                    <RiCloseLine className='fs-2 d-none' id='menu-icon-close' />
                </span>
            </div>

            <div className='dashboard-navbrand content-to-be-hidden'>
                <Link to='/' className='dashboard-navbrandLink'>
                    <img src={Logo} alt='page logo'></img>
                    <h4>Lilies</h4>
                </Link>
            </div>

            <ul className='dashboard-links'>
                <li><Link onClick={(e) => {
                    addActiveToLinkFunction(e)
                    closeProfile()
                }} className='link active dasboard-active-link mb-3' to='/dashboard'><AiFillHome className='dashboard-icon' /> <span className='content-to-be-hidden'>Dashboard</span></Link></li>

                <li><p className='link dasboard-active-link' onClick={(e) => {
                    addActiveToLinkFunction(e)
                    openProfile();
                }} ><BiUserCircle className='dashboard-icon' /> <span className='content-to-be-hidden'>Your Profile</span></p></li>

                <li><p className='link link-with-tag mb-5' onClick={() => {
                    openYourOrders();
                }}><span><IoCalendarClear className='dashboard-icon' /> <span className='content-to-be-hidden'> Orders</span></span> <span className='dashboard-tags order-tag content-to-be-hidden' id='ordersAmount'>0</span></p></li>

                <li><p onClick={() => {
                    openCart();
                }} className='link link-with-tag' to='/cart'><span><FaShoppingCart className='dashboard-icon' /><span className='content-to-be-hidden'>  Your Cart</span></span> <span className='dashboard-tags cart-tag content-to-be-hidden' id='cartAmount'>0</span></p></li>
            </ul>
        </nav>
    )
}

export default DashboardNav