import React from 'react'

import { Link } from 'react-router-dom'
import Logo from '../assests/Group 12.png'
import menuIcon from '../assests/icons8-menu-24.png'

import { AiFillHome } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { BsFillCalendarFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'

import '../css/dashboardnav.css'

const DashboardNav = () => {
    return (
        <nav className='dashboard-nav'>
            <div className='dashboard-navbrand'>
                <Link to='/' className='dashboard-navbrandLink'>
                    <img src={Logo} alt='page logo'></img>
                    <h4>Lilies</h4>
                </Link>
            </div>

            <ul className='dashboard-links'>
                <li><Link className='link' to='/dashboard'><AiFillHome /> Dashboard</Link></li>
                <li><Link className='link' to='/profile'><BiUserCircle /> Your Profile</Link></li>
                <li><Link className='link' to='/orders'><BsFillCalendarFill /> Orders</Link></li>
                <li><Link className='link' to='/cart'><FaShoppingCart /> Your Cart</Link></li>
            </ul>

            <div className='menu-icon-container'>
                <img src={menuIcon} alt='menu icon' />
            </div>
        </nav>
    )
}

export default DashboardNav