import React from 'react'
import '../Style/LandingPage.css'
import { Link } from 'react-router-dom'
import { NavBar } from './NavBar'
import { SignUp } from './Signup'
export default function LandingPage() {
  return (
    <>
    
    <h2 className='landing_heading'>THE OUTNET</h2>
        <div className='landing_page'>
            <div className='landing_div'>
                <Link to="women">
                <img className='landing_img' src="https://www.theoutnet.com/cms/ycm/resource/blob/1218416/93c218c3b1058f05611a23fcef93f0b9/pre-hp-main-1-womenswear-image-data.jpg/w1400_q80.jpg" alt="" />
                </Link>
                <Link to="/women"><p className='landing_para'>WOMEN</p></Link>
                <li>Just In</li>
                <li>Bestsellers</li>
                <li>Designers</li>
                <li>Clothing</li>
                <li>Shoes</li>
                <li>Bags</li>
                <li>Accessories</li>
                
            </div>
            <div className='landing_div'>
           <Link to="/men"> <img className='landing_img' src="https://www.theoutnet.com/cms/ycm/resource/blob/1218420/b175e45775e06eb40db8d9deb3b00814/pre-hp-main-2-menswear-1--data.jpg/w1400_q80.jpg" alt="" /></Link>
                <Link to="/men"><p className='landing_para'>MEN</p></Link>
                <li>Just In</li>
                <li>Bestsellers</li>
                <li>Designers</li>
                <li>Clothing</li>
                <li>Shoes</li>
                <li>Bags</li>
                <li>Accessories</li>               
            </div>
        </div>
    </>
  )
}
