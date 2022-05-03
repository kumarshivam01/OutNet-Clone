import React from 'react'
import WomenCrausal from './WomenCrausal'
import MenAndWomen from './MenAndWomen'
import Footer from './Footer'
import ClothesCategory from './ClothesCategory'
const left_img = "https://www.theoutnet.com/cms/ycm/resource/blob/1251090/8265d19173eb9720cf82cf3366478685/main-1-image-data.jpg/w1400_q80.jpg"
const right_img = "https://www.theoutnet.com/cms/ycm/resource/blob/1251106/bb000716294ea50149d3ef65d0a62e3b/main-2-image-data.jpg/w1400_q80.jpg"
export default function Women() {
  return (
      <>
        <MenAndWomen
           li={left_img}
         ri={right_img} 
         para1="BRUNELLO CUCINELLI AT UP TO 55% OFF" 
         para2="Sophisticated yet simple: shop our edit of elegant closet classics" 
         button1="SHOP BRUNELLO CUCINELLI"
          para3="TORY BURCH AT UP TO 64% OFF"
          para4="These new arrivals are packed with personality"
          button2="SHOP TORY BURCH"
        />
        <WomenCrausal/>
        <ClothesCategory 
        jacket="https://www.theoutnet.com/cms/ycm/resource/blob/1251112/967968f1371b43077fc53f46af212e4f/promo-1-image-data.jpg/w1400_q80.jpg"
        shirts="https://www.theoutnet.com/cms/ycm/resource/blob/1251118/cfc60680f0a4a32a5c5284f7ae2683b5/promo-2-image-data.jpg/w1400_q80.jpg"
        paint="https://www.theoutnet.com/cms/ycm/resource/blob/1251136/a53ce68156af9590757949bc47956af8/promo-3-image-data.jpg/w1400_q80.jpg"
        para1="SPRING INTO JUMPSUITS AT UP TO 65% OFF"
        para3="FRESH FLOWERS AT UP TO 60% OFF"
        para5="MORE COLOR, MORE JOY, MORE STYLE"
        para6="...for less! Get more out of your new-session wardrobe"
        button3="SHOP NEW SEASONS"
        button2="SHOP FLORAL DRESSES"
        button1="SHOP JUMPSUITS"
        para2="Power up your spring wardrobe with tailored all-in-ones"
        para4="Step into bloom with these floral dresses get more for new session"

         />
         <Footer/>
      </>
    
  )
}
