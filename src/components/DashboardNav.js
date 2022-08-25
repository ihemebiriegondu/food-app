import React from 'react'
import { Container, Navbar, Offcanvas } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import Logo from '../assests/Group 12.png'

import { AiFillHome } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { IoCalendarClear } from 'react-icons/io5'
import { FaShoppingCart } from 'react-icons/fa'
import { RiMenu2Line } from 'react-icons/ri'

import '../css/dashboardnav.css'

const DashboardNav = () => {
    return (
        <nav className='dashboard-nav'>
            <div className='dashboard-menu-icon d-xl-none d-block text-center pt-5'>
                <RiMenu2Line className='fs-4' aria-controls={`dashboard-offcanvas`} />
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
                <li><Link className='link link-with-tag' to='/orders'><span><IoCalendarClear className='dashboard-icon' /> <span className='content-to-be-hidden'> Orders</span></span> <span className='dashboard-tags order-tag content-to-be-hidden'>6</span></Link></li>
                <li><Link className='link link-with-tag' to='/cart'><span><FaShoppingCart className='dashboard-icon' /><span className='content-to-be-hidden'> Your Cart</span></span> <span className='dashboard-tags cart-tag content-to-be-hidden'>6</span></Link></li>
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
                >
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