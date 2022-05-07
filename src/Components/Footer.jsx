import React from 'react'
import '../Style/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom'
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
                                <li><Link to="/aboutus">About Us</Link></li>
                                <li><Link to="">Affiliates</Link></li>
                                <li><Link to="">Careers</Link></li>
                                <li><Link to="">Contact Us</Link></li>
                                <li><Link to="">Help</Link></li>
                                <li><Link to="">Clothing Care Guide</Link></li>
                                <li><Link to="">Fit Analytics</Link></li>
                                <li><Link to="">Privacy Policy</Link></li>
                                <li><Link to="">Terms and Conditions</Link></li>
                                <li><Link to="">Our Considered Pledge</Link></li>
                            </ul>
                        </div>
                        <div>
                        <ul>
                                <li><Link to="">Payment</Link></li>
                                <li><Link to="">Delivery</Link></li>
                                <li><Link to="">Returns</Link></li>
                                <li><Link to="">Track your Order</Link></li>
                                <li><Link to="">Create a Return</Link></li>
                                <li><Link to="">Track your Return</Link></li>
                                <li><Link to="">Cookie Policy</Link></li>
                                <li><Link to="">Cookie Center</Link></li>
                                <li><Link to="">Our Resale Service</Link></li>
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
                            <span><FacebookIcon/></span> <span><TwitterIcon/></span> <span><YouTubeIcon></YouTubeIcon></span><span><InstagramIcon></InstagramIcon></span>
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
