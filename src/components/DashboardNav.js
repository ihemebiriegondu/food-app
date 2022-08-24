import React from 'react'

import { Link } from 'react-router-dom'
import Logo from '../assests/Group 12.png'

import { AiFillHome } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { IoCalendarClear } from 'react-icons/io5'
import { FaShoppingCart } from 'react-icons/fa'

import '../css/dashboardnav.css'

const DashboardNav = () => {
    return (
        <nav className='dashboard-nav'>
            <div className='dashboard-navbrand d-xl-block d-none'>
                <Link to='/' className='dashboard-navbrandLink'>
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
        </nav>
    )
}

export default DashboardNav