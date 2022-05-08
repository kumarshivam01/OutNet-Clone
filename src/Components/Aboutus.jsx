import "../Style/Aboutus.css"
import Footer from './Footer'
import { NavBar } from "./NavBar"
function AboutUs(){
    return(
         <>
         <NavBar/>
              <div className="center">
        <div  id="bold" className="margintop">ABOUT US</div>
        <div className="margintop">Launched in 2009, THE OUTNET has since established itself as the benchmark of luxury discount shopping, <br></br>offering over 350 designer fashion brands at exceptional prices of up to 70% off.</div>
        <div className="margintop">Strong relationships with leading luxury brands elevates THE OUTNET, with a dedicated buying team in <br />London purchasing over 90% of stock direct. THE OUTNET is renowned for high-end designer collaborations,<br />offering unique and limited-edition exclusives for its discerning global customers alongside in-house label Iris <br />  & Ink.</div>
        <div>



            <video controls>
                <source src="https://youtu.be/_uZw_rusvwE" type="video/mp4" />
            </video>
        </div>



        <div className="margintop">THE OUTNET caters to a global audience with a local and tailored approach, offering local language sites in <br />the Middle East and Japan and native checkout for all markets. With a focus on exceptional customer service,<br />THE OUTNET offers a seamless shopping experience across mobile, tablet and desktop, inspiring editorial <br />content, express worldwide shipping to over 100 countries and customer care services in 11 languages, <br /> available 24/7, 365 days a year.</div>
        <button id="buttonstyle" className="margintop">Apply Now</button>
        <div className="margintop1">WHAT YOU CAN EXPECT</div>
        <div className="grid">
            <div>
                <div ><img className="imgabout" src="https://www.theoutnet.com/cms/ycm/resource/blob/543560/7f7b2cb64bea2ef600548a451f0798be/picture-1-data.jpg/w1500_q80.jpg" alt="" /></div>
                 <div className="margintop" id="bold">JUST IN </div>
                 <div  className="margintop2">With a slew of new products 5 days a week, our Just-In pieces are sure to take your look to the next level</div>
                 <button id="buttonstyle" className="margintop">Apply Now</button>
            </div>
            <div>
                 <div ><img className="imgabout" src="https://www.theoutnet.com/cms/ycm/resource/blob/543552/89e5673aa9c72964eea07f9d06f3179d/picture-2-data.jpg/w1500_q80.jpg" alt="" /></div>
                 <div className="margintop" id="bold">MEET IRIS & INK </div>
                 <div  className="margintop2">Discover our in-house label Iris & Ink; designing reimagined wardrobe classics in luxe fabrications</div>
                 <button id="buttonstyle" className="margintop">Shop The Collection </button>
            </div>
            <div>
                 <div ><img className="imgabout" src="https://www.theoutnet.com/cms/ycm/resource/blob/543568/3863523a73b9700b04c58d1d04410e4a/picture-3-data.jpg/w1500_q80.jpg" alt="" /></div>
                 <div className="margintop" id="bold">ONE-STOP FOR INSPO </div>
                 <div  className="margintop2">Get instant style inspiration, the latest fashion trends and sought-out outfit ideas, right here</div>
                 <button id="buttonstyle" className="margintop">Read More</button>
            </div>
            <div>
                 <div ><img className="imgabout" src="https://www.theoutnet.com/cms/ycm/resource/blob/543600/52cec40c1df1a9783c1396f9380be76d/picture-3-data.jpg/w1500_q80.jpg" alt="" /></div>
                 <div className="margintop" id="bold">DESIGNERS TO LOVE</div>
                 <div  className="margintop2">Our site is brimming with top designers like Chloé and Valentino, and cool labels like GANNI and Sandro</div>
                 <button id="buttonstyle" className="margintop">Shop Now</button>
            </div>
            <div>
                 <div ><img className="imgabout" src="https://www.theoutnet.com/cms/ycm/resource/blob/543592/78122f20e1069ea33594e98f490ec82c/picture-4-data.jpg/w1500_q80.jpg" alt="" /></div>
                 <div className="margintop" id="bold">H–APP–Y SHOPPING</div>
                 <div  className="margintop2">Download the app to shop easy whilst on the go and access exclusive designer discounts</div>
                 <button id="buttonstyle" className="margintop">Download Now</button>
            </div>
            <div>
                 <div ><img className="imgabout" src="https://www.theoutnet.com/cms/ycm/resource/blob/543608/50a2ce765220251405d9350a091360f1/picture-5-data.jpg/w1500_q80.jpg" alt="" /></div>
                 <div className="margintop" id="bold">VIP ACCESS</div>
                 <div  className="margintop2">Be the first to hear of our exclusive collections from iconic designers like: Mary Katrantzou and more!</div>
                 <button id="buttonstyle" className="margintop">Sign Up Now</button>
            </div>
        </div>

        <div className="grid1">
            <div>
                 <div className="margintop" id="bold">SEND IT BACK</div>
                 <div  className="margintop2">Our returns and exchanges are super simple with a step-by-step guide that’s easy to follow</div>
                 <button id="buttonstyle" className="margintop">Read More</button>
            </div>
            <div>
                 <div className="margintop" id="bold">WE CARE</div>
                 <div  className="margintop2">A 24/7 customer care service is made available to you in your preferred language</div>
                 <button id="buttonstyle" className="margintop">Contact Us</button>
            </div>
            <div>
                 <div className="margintop" id="bold">OUT FOR DELIVERY</div>
                 <div  className="margintop2">We ship to over 100+ countries with express, next-day and same-day (available in NYC only) shipping</div>
                 <button id="buttonstyle" className="margintop">Discover Now</button>
            </div>
        </div>
        <Footer/>
    </div>
    
         </>
    )
      
}
export {AboutUs}