import React from 'react'
import WomenCrausal from './WomenCrausal'
import WomenClothes from './WomenClothes'
import Footer from './Footer'
import { NavBar } from "./NavBar"
import WomenClothesCategory from './WomenClothesCategory'
const left_img = "https://www.theoutnet.com/cms/ycm/resource/blob/1257526/79cf1b799059c1a7dc5dd326e69b3307/main-1-image-default-data.jpg/w1400_q80.jpg"
const right_img = "https://www.theoutnet.com/cms/ycm/resource/blob/1257594/05c3f154611d16ae6637519911b9ef1b/main-2-image-data.jpg/w1400_q80.jpg"
export default function Women() {
  return (
      <>
      <NavBar/>
        <WomenClothes
           li={left_img}
         ri={right_img} 
         para1="SHOP ALICE + OLIVIA AT UP TO 55% OFF" 
         para2="Sophisticated yet simple: shop our edit of elegant closet classics" 
         button1="SHOP ALICE + OLIVIA"
          para3="SHOP VALENTINO AT UP TO 64% OFF"
          para4="These new arrivals are packed with personality"
          button2="SHOP VALENTINO"
        />
        <WomenCrausal/>
        <WomenClothesCategory
        jacket="https://www.theoutnet.com/cms/ycm/resource/blob/1257600/c72feec6f660a33fc1c146a505328a1b/promo-1-image-data.jpg/w1400_q80.jpg"
        shirts="https://www.theoutnet.com/cms/ycm/resource/blob/1257606/11bf1895499c0119c3591d2872f37ace/promo-2-image-data.jpg/w1400_q80.jpg"
        paint="https://www.theoutnet.com/cms/ycm/resource/blob/1257624/537715f486d42dbead517c9059c6590d/promo-3-image-data.jpg/w1400_q80.jpg"
        para1="SPRING INTO JUMPSUITS AT UP TO 65% OFF"
        para3="FRESH FLOWERS AT UP TO 60% OFF"
        para5="MORE COLOR, MORE JOY, MORE STYLE"
        para6="...for less! Get more out of your new-session wardrobe"
        button3="SHOP NEW SANDALS"
        button2="SHOP MIDI SKIRTS"
        button1="SHOP FLORAL JACKET"
        para2="Power up your spring wardrobe with tailored all-in-ones"
        para4="Step into bloom with these floral dresses get more for new session"

         />
         <Footer/>
      </>
    
  )
}
