import React from 'react'

import googleDownload from '../assests/Google Play Badge.png'
import appleDownload from '../assests/App Store Badge.png'
import firstFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 1.png'
import secondFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 2.png'
import thirdFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 3.png'
import forthFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 4.png'

import socialIcon1 from '../assests/Social Icons.png'
import socialIcon2 from '../assests/Social Icons (1).png'
import socialIcon3 from '../assests/Social Icons (2).png'

import '../css/home.css'
import Homecards from '../components/Homecards'

const home = () => {
    return (
        <div className='mainHome'>
            <div className='mainHomeSubDiv'>
                <section className='first-section'>
                    <div className='first-section-intro'>
                        <h1>Order <span>food</span> anytime, anywhere</h1>
                        <p>Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!</p>
                        <div className='buttons-div'>
                            <a href='/' target={'_blank'} ><img src={googleDownload} alt='google download icon'></img></a>
                            <a href='/' target={'_blank'} ><img src={appleDownload} alt='apple download icon'></img></a>
                        </div>
                    </div>
                    <div className='img-div'>
                        <div className='img-sub-div'>
                            <img src={firstFood} alt='intro food'></img>
                        </div>
                    </div>
                </section>

                <section className='second-section'>
                    <div>
                        <h1>Special Meals of the day!</h1>
                        <p>Check our sepecials of the day and get discounts on all our meals and swift delivery to what ever location within Ilorin.</p>
                    </div>
                </section>

                <section className='third-section'>
                    <div className='third-section-cards-container'>
                        <Homecards HomeCardImage={secondFood} HomeCardTitle={'Stir fry Pasta'} HomeCardText={'Stir fry pasta yada yada yada because of Sesan'} />
                        <Homecards HomeCardImage={thirdFood} HomeCardTitle={'Meat Balls'} HomeCardText={'Stir fry pasta yada yada yada because of Sesan'} />
                        <Homecards HomeCardImage={forthFood} HomeCardTitle={'Burger Meal'} HomeCardText={'Stir fry pasta yada yada yada because of Sesan'} />
                    </div>
                </section>

                <section className='forth-section'>
                    <div className='forth-section-div'>
                        <div className='getnotified'>
                            <h5>Get notified when we update!</h5>
                            <p>Get notified when we add new items to our specials menu, update our price list of have promos!</p>
                        </div>
                        <div className='notifiedinput'>
                            <div>
                                <input type={'text'} placeholder='gregphillips@gmail.com' />
                                <button type='button'>Get notified</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer>
                <div className='footer-div'>
                    <div className='quick-links'>
                        <div className='quick-links-div'>
                            <h6>Company</h6>
                            <a href='/' target={'_blank'}>About Us</a>
                            <a href='/' target={'_blank'}>Careers</a>
                            <a href='/' target={'_blank'}>Contact Us</a>
                        </div>

                        <div className='quick-links-div'>
                            <h6>Support</h6>
                            <a href='/' target={'_blank'}>Help Centers</a>
                            <a href='/' target={'_blank'}>Safety Centers</a>
                        </div>

                        <div className='quick-links-div'>
                            <h6>Legal</h6>
                            <a href='/' target={'_blank'}>Cookies Policy</a>
                            <a href='/' target={'_blank'}>Privacy Policy</a>
                            <a href='/' target={'_blank'}>Terms of Service</a>
                            <a href='/' target={'_blank'}>Dispute resolution</a>
                        </div>

                        <div className='quick-links-div'>
                            <h6>Install App</h6>
                            <a href='/' target={'_blank'} ><img src={googleDownload} alt='google download icon'></img></a>
                            <a href='/' target={'_blank'} style={{ marginTop: '24.25px' }} ><img src={appleDownload} alt='apple download icon'></img></a>
                        </div>
                    </div>
                    <hr />
                    <div className='copyright'>
                        <p>© 2021 LILIES, All rights reserved</p>
                        <div>
                            <img src={socialIcon1} alt='social icons' />
                            <img src={socialIcon2} alt='social icons' />
                            <img src={socialIcon3} alt='social icons' />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default home