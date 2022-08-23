import React from 'react'
import DashboardNav from '../components/DashboardNav'

import '../css/dashboard.css'


const Dashboard = () => {
    return (
        <div className='mainDashboard'>
            <div className='row'>
                <div className='col-2 mynav'>
                    <DashboardNav />
                </div>
                <div className='col-10'>

                </div>
            </div>
        </div>

    )
}

export default Dashboard