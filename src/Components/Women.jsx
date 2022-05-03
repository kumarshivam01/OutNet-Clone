import React from 'react'
import MenAndWomen from './MenAndWomen'
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
      </>
    
  )
}
