import React from 'react'
import MenAndWomen from './MenAndWomen'
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
      </>
    
  )
}