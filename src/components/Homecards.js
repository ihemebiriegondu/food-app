import React from 'react'

import '../css/home-cards.css'

const Homecards = ({HomeCardImage, HomeCardTitle, HomeCardText}) => {
    return (
        <div className='Home-cards'>
            <div>
                <img src={HomeCardImage} alt='food img'></img>
            </div>
            <h6>{HomeCardTitle}</h6>
            <p>{HomeCardText}</p>
        </div>
    )
}

export default Homecards