import React from 'react'
import Crausal from './MenCrausal'
import MenAndWomen from './MenAndWomen'
import ClothesCategory from './ClothesCategory'
import Footer from './Footer'
const left_img = "https://www.theoutnet.com/cms/ycm/resource/blob/1251934/9bbc2ec8fdb95b5c9cbb0e91407cdc6d/main-1-intl-image-data.jpg/w1400_q80.jpg"
const right_img = "https://www.theoutnet.com/cms/ycm/resource/blob/1251940/3bde0024b9c46fdc80cd97b9494d4e0c/main-2-intl-image-data.jpg/w1400_q80.jpg"
export default function Women() {
  return (
      <>
        <MenAndWomen
         li={left_img}
         ri={right_img} 
         para1="HELMUT LANG AT UP TO 55% OFF" 
         para2="Modern minimalism that never gets old" 
         button1="SHOP HELMUT LANG"
          para3="OFF-WHITE AT UP TO 70% OFF"
          para4="Iconic streetwear made for high-impact dressing"
          button2="SHOP OFF-WHITE"
        />
        <Crausal/>
        <ClothesCategory 
        jacket="https://www.theoutnet.com/cms/ycm/resource/blob/1258158/a2545ecd9bdcd9112047c09933a088be/promo-1-intl-image-data.jpg/w1400_q80.jpg"
        shirts="https://www.theoutnet.com/cms/ycm/resource/blob/1258160/a11ff3c70fd2f4c531743e021d299540/promo-2-intl-image-data.jpg/w1400_q80.jpg"
        paint="https://www.theoutnet.com/cms/ycm/resource/blob/1258162/a6c325b9bcf4f75d6d15fe02fb839a2d/promo-3-intl-image-data.jpg/w1400_q80.jpg"
        para1="LIGHT LAYERS AT UP TO 65% OFF"
        para3="TIMELESS T-SHIRTS AT UP TO 55% OFF"
        para5="OFF-DUTY ESSENTIALS AT UP TO 70%OFF"
        para6="Casual pants by in-demand designers"
        button3="SHOP CASUAL PANTS"
        button2="SHOP T-SHIRTS"
        button1="SHOP CASUAL JACKETS"
        para2="Get ready for the sun in these just in jackets"
        para4="Print, plain and perfect -- tees to keep on rotaion"

         />
         <Footer/>
      </>
    
  )
}