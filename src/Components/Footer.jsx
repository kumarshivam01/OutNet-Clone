import React from 'react'
import '../Style/Footer.css'
export default function Footer() {
    return (
        <>
        <hr />  
            <div className='footer_container'>
                <div className='left_footer_main'>
                    <p style={{marginLeft:"35px", fontWeight:"500"}}>Help and Information</p>
                    <div className='left_footer'>
                        <div>
                            <ul>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Affiliates</a></li>
                                <li><a href="">Careers</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Help</a></li>
                                <li><a href="">Clothing Care Guide</a></li>
                                <li><a href="">Fit Analytics</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Terms and Conditions</a></li>
                                <li><a href="">Our Considered Pledge</a></li>
                            </ul>
                        </div>
                        <div>
                        <ul>
                                <li><a href="">Payment</a></li>
                                <li><a href="">Delivery</a></li>
                                <li><a href="">Returns</a></li>
                                <li><a href="">Track your Order</a></li>
                                <li><a href="">Create a Return</a></li>
                                <li><a href="">Track your Return</a></li>
                                <li><a href="">Cookie Policy</a></li>
                                <li><a href="">Cookie Center</a></li>
                                <li><a href="">Our Resale Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='payment_logo'>

                    </div>
                </div>
                <div className='right_footer'>
                    <p>Want to stay stylishly in the know?</p>
                    <span className='span1'>Sign up today for email exclusives including early access to Sale, the latest</span><br /><span className='span1'>trends and arrivals from your favorite designers and can’t miss</span><br /><span className='span1'>promotions.</span>
                    
                    <div className='input_subscribe'>
                        <input placeholder='Enter your Email Address' type="text" />
                        <button className='subscribe'>Subscribe</button>
                    </div>
                    <p style={{marginTop:"30px"}}>24/7 Customer Care</p>
                    <div className='mob_no'>
                        <p>+44 330 022 4250</p>
                    </div>
                    <div className='email_id'>
                        <p>customercare@theoutnet.com</p>
                    </div>
                    <div className='stay_social'>
                        <p>Stay Social</p>
                        <div className='svg_logo'>

                        </div>
                    </div>
                </div>

            </div>
            <hr />  
            <div className='bottom_footer'>
                <button>NET-A-PORTER</button>
                <button>MR PORTER</button>
                <div>
                    <span className='span2'>© 2009 - 2022 THE OUTNET , part of YOOX NET-A-PORTER GROUP.</span><br />
                    <span className='span2'>The individuals featured on this site do not endorse THE OUTNET or the products shown.</span>
                </div>
            </div>
        </>
    )
}
