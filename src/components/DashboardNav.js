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

    function openYourOrders() {
        //const openorderbtns = document.querySelectorAll(".your-order-open");
        const orderBackdrop = document.querySelector(".orders-backdrop");

        orderBackdrop.classList.add("active")
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
                <li><Link className='link active' to='/dashboard'><AiFillHome className='dashboard-icon' /> <span className='content-to-be-hidden'>Dashboard</span></Link></li>
                <li><Link className='link' to='/profile'><BiUserCircle className='dashboard-icon' /> <span className='content-to-be-hidden'>Your Profile</span></Link></li>
                <li><p className='link link-with-tag your-order-open' onClick={openYourOrders}><span><IoCalendarClear className='dashboard-icon' /> <span className='content-to-be-hidden'> Orders</span></span> <span className='dashboard-tags order-tag content-to-be-hidden'>6</span></p></li>
                <li><Link className='link link-with-tag' to='/cart'><span><FaShoppingCart className='dashboard-icon' /><span className='content-to-be-hidden'>  Your Cart</span></span> <span className='dashboard-tags cart-tag content-to-be-hidden'>6</span></Link></li>
            </ul>
        </nav>

        /*
        <Navbar bg="transparent" expand='md' className="m-0 p-0 dashboard-nav">
            <Container fluid className="p-0">
                <Navbar.Toggle className="shadow-none diff-menu-icon bg-transparent border-0 pt-5" aria-controls={`dashboard-offcanvas`} />
                <Navbar.Offcanvas className=''
                    id={`dashboard-offcanvas`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="start"
                >a
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="p-0 d-block">
                        <div className='dashboard-navbrand d-xl-block d-none'>
                            <Link to='/' className='dashboard-navbrandLink align-items-center justify-content-center'>
                                <img src={Logo} alt='page logo'></img>
                                <h4>Lilies</h4>
                            </Link>
                        </div>

                        <ul className='dashboard-links d-xl-block d-none'>
                            <li><Link className='link active' to='/dashboard'><AiFillHome className='dashboard-icon me-3' /> <span>Dashboard</span></Link></li>
                            <li><Link className='link' to='/profile'><BiUserCircle className='dashboard-icon me-3' /> <span>Your Profile</span></Link></li>
                            <li><Link className='link link-with-tag' to='/orders'><span><IoCalendarClear className='dashboard-icon me-3' /> Orders</span> <span className='dashboard-tags order-tag'>6</span></Link></li>
                            <li><Link className='link link-with-tag' to='/cart'><span><FaShoppingCart className='dashboard-icon me-3' /> Your Cart</span> <span className='dashboard-tags cart-tag'>6</span></Link></li>
                        </ul>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
         */
    )
}

export default DashboardNav