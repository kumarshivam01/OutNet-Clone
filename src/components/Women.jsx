import { useState } from 'react'
import "../Styles/Women.css"
export const Women=()=>{
    const [style,setStyle]=useState({display:"none"})
    const [style1,setStyle1]=useState({display:"none"})
    const [style2,setStyle2]=useState({display:"none"})
    const [style3,setStyle3]=useState({display:"none"})
    const [style4,setStyle4]=useState({display:"none"})
    const [style5,setStyle5]=useState({display:"none"})
    const [style6,setStyle6]=useState({display:"none"})
    const [style7,setStyle7]=useState({display:"none"})
    const [style8,setStyle8]=useState({display:"none"})
    const [style9,setStyle9]=useState({display:"none"})
    const [style10,setStyle10]=useState({display:"none"})
  
    return(
        <div className="main">
            
        <div className="category">
        <p className="cat-hover" onMouseEnter={(e)=>{
            setStyle({display: 'flex'})
            setStyle1({display: 'none'})
            setStyle2({display: 'none'})
            setStyle3({display: 'none'})
            setStyle4({display: 'none'})
            setStyle5({display: 'none'})
            setStyle6({display: 'none'})
            setStyle7({display: 'none'})
            setStyle8({display: 'none'})
            setStyle9({display: 'none'})
            setStyle10({display: 'none'})
        }} 
        >Superbrands</p>  
        <p className="cat-hover" onMouseEnter={(e)=>{
            setStyle({display: 'none'})
            setStyle1({display: 'flex'})
            setStyle2({display: 'none'})
            setStyle3({display: 'none'})
            setStyle4({display: 'none'})
            setStyle5({display: 'none'})
            setStyle6({display: 'none'})
            setStyle7({display: 'none'})
            setStyle8({display: 'none'})
            setStyle9({display: 'none'})
            setStyle10({display: 'none'})
        }} >Just In</p>
        <p className="cat-hover" onMouseEnter={(e)=>{
            setStyle({display: 'none'})
            setStyle1({display: 'none'})
            setStyle2({display: 'flex'})
            setStyle3({display: 'none'})
            setStyle4({display: 'none'})
            setStyle5({display: 'none'})
            setStyle6({display: 'none'})
            setStyle7({display: 'none'})
            setStyle8({display: 'none'})
            setStyle9({display: 'none'})
            setStyle10({display: 'none'})
        }} >Bestsellers</p>
        <p className="cat-hover" onMouseEnter={(e)=>{
            setStyle({display: 'none'})
            setStyle1({display: 'none'})
            setStyle2({display: 'none'})
            setStyle3({display: 'flex'})
            setStyle4({display: 'none'})
            setStyle5({display: 'none'})
            setStyle6({display: 'none'})
            setStyle7({display: 'none'})
            setStyle8({display: 'none'})
            setStyle9({display: 'none'})
            setStyle10({display: 'none'})
        }} >Designers</p>
        <p className="cat-hover" onMouseEnter={(e)=>{
            setStyle({display: 'none'})
            setStyle1({display: 'none'})
            setStyle2({display: 'none'})
            setStyle3({display: 'none'})
            setStyle4({display: 'flex'})
            setStyle5({display: 'none'})
            setStyle6({display: 'none'})
            setStyle7({display: 'none'})
            setStyle8({display: 'none'})
            setStyle9({display: 'none'})
            setStyle10({display: 'none'})
        }} >Clothing</p>
        <p className="cat-hover" onMouseEnter={(e)=>{
            setStyle({display: 'none'})
            setStyle1({display: 'none'})
            setStyle2({display: 'none'})
            setStyle3({display: 'none'})
            setStyle4({display: 'none'})
            setStyle5({display: 'flex'})
            setStyle6({display: 'none'})
            setStyle7({display: 'none'})
            setStyle8({display: 'none'})
            setStyle9({display: 'none'})
            setStyle10({display: 'none'})
        }} >Shoes</p>
        <p className="cat-hover" onMouseEnter={(e)=>{
            setStyle({display: 'none'})
            setStyle1({display: 'none'})
            setStyle2({display: 'none'})
            setStyle3({display: 'none'})
            setStyle4({display: 'none'})
            setStyle5({display: 'none'})
            setStyle6({display: 'flex'})
            setStyle7({display: 'none'})
            setStyle8({display: 'none'})
            setStyle9({display: 'none'})
            setStyle10({display: 'none'})
        }} >Bags</p>
        <p className="cat-hover" onMouseEnter={(e)=>{
            setStyle({display: 'none'})
            setStyle1({display: 'none'})
            setStyle2({display: 'none'})
            setStyle3({display: 'none'})
            setStyle4({display: 'none'})
            setStyle5({display: 'none'})
            setStyle6({display: 'none'})
            setStyle7({display: 'flex'})
            setStyle8({display: 'none'})
            setStyle9({display: 'none'})
            setStyle10({display: 'none'})
        }} >Accessories</p>
        <p className="cat-hover" onMouseEnter={(e)=>{
            setStyle({display: 'none'})
            setStyle1({display: 'none'})
            setStyle2({display: 'none'})
            setStyle3({display: 'none'})
            setStyle4({display: 'none'})
            setStyle5({display: 'none'})
            setStyle6({display: 'none'})
            setStyle7({display: 'none'})
            setStyle8({display: 'flex'})
            setStyle9({display: 'none'})
            setStyle10({display: 'none'})
        }} >70% Off</p>
        <p className="cat-hover" onMouseEnter={(e)=>{
            setStyle({display: 'none'})
            setStyle1({display: 'none'})
            setStyle2({display: 'none'})
            setStyle3({display: 'none'})
            setStyle4({display: 'none'})
            setStyle5({display: 'none'})
            setStyle6({display: 'none'})
            setStyle7({display: 'none'})
            setStyle8({display: 'none'})
            setStyle9({display: 'flex'})
            setStyle10({display: 'none'})
        }} >Iris & Ink</p>
        <p className="cat-hover" onMouseEnter={(e)=>{
            setStyle({display: 'none'})
            setStyle1({display: 'none'})
            setStyle2({display: 'none'})
            setStyle3({display: 'none'})
            setStyle4({display: 'none'})
            setStyle5({display: 'none'})
            setStyle6({display: 'none'})
            setStyle7({display: 'none'})
            setStyle8({display: 'none'})
            setStyle9({display: 'none'})
            setStyle10({display: 'flex'})
        }} >Editorial</p>
        </div>
        <div className="Superbrands" style={style} onMouseEnter={(e)=>{
            setStyle({display: 'flex'})}}    
            onMouseLeave={(e)=>{
                setStyle({display: 'none'})
            }}>
            <div>
                <h3 className="line-w">Shop by Category</h3>
                <p>All Superbrands</p>
                <p>Bags</p>
                <p>Boots</p>
                <p>Coats</p>
                <p>Dresses</p>
                <p>Knitwear</p>
                <p>Pants</p>
                <p>Shoes</p>
                <p>Skirts</p>
                <p>Tops</p>
            </div>
            <div>
                <h3 className="line-w">Shop By Designers</h3>
                <p>Alexander McQueen</p>
                <p>Balenciaga</p>
                <p>Balmain</p>
                <p>Chloe</p>
                <p>Gucci</p>
                <p>Stella McCartney</p>
                <p>The Row</p>
                <p>Valentino</p>
            </div>
            <div>
                <div className="images-w">
                <div>
                    <img className="image1" src="https://www.theoutnet.com/cms/ycm/resource/blob/853160/922641c97db25afb7bf132b03b960af7/superbrands-image-intl-data.jpg" alt="" />
                    <p className="color-bold-w">BALMAIN</p>
                </div>
               <div>
                <img className="image2" src="https://www.theoutnet.com/cms/ycm/resource/blob/935322/cbb0362366d2ad8eb6927991654656d4/superbrands-image-2-data.jpg" alt="" />
                <p className="color-bold-w">CHLOE</p>
                </div>
            </div>
            
         </div> 
         </div>
        <div className="JustIn" style={style1} onMouseEnter={(e)=>{
            setStyle1({display: 'flex'})}}    
            onMouseLeave={(e)=>{
                setStyle1({display: 'none'})
            }}>
        <div>
                <h3 className="line-w">Shop Just In</h3>
                <p>All Just In</p>
                <p>Just In Last Week</p>
                <p>New Season</p>
       </div> 
       <div>
           <h3 className="line-w">This Week's Designers</h3>
           <p>Alberta Ferretti</p>
                <p>Alice + Olivia</p>
                <p>Ben Amun</p>
                <p>Brunello Cucinelli</p>
                <p>Cornelia Webb</p>
                <p>Erdem</p>
                <p>Herve Leger</p>
                <p>IRO</p>
                <p>Tory Burch</p>
                <p>Valentino</p>

       </div>
       <div className="images-w">
           <div>
             <img className="image1" src="https://www.theoutnet.com/cms/ycm/resource/blob/1169308/0ad642c822450e9c7755dda4ddd0b895/just-in-banner-image-1-data.jpg" alt="" />
             <p className="color-bold-w">HERVE LEGER</p>
       </div>
     <div>
           <img className="image2" src="https://www.theoutnet.com/cms/ycm/resource/blob/917084/7ee545d1cf3ec406909ebf23f8e27b0e/justin-image-2-intl-data.jpg" alt="" />
      <p className="color-bold-w">MASISON MARGIELA</p>
     </div>
          </div>
        </div>
        <div className="Bestsellers" style={style2} onMouseEnter={(e)=>{
         setStyle2({display: 'flex'})}}    
         onMouseLeave={(e)=>{
             setStyle2({display: 'none'})
         }}>
            <div>
        <h3 className="line-w">Shop by Category</h3>
                <p>All Bestsellers</p>
                <p>Accessories</p>
                <p>Bags</p>
                <p>Clothing</p>
                <p>Coats</p>
                <p>Dresses</p>
                <p>Knitwear</p>
                <p>Pants</p>
                <p>Shoes</p>
                <p>Tops</p>
            </div>
            <div>
           <h3 className="line-w">Shop By Designers</h3>
           <p>DKNY</p>
           <p>Ganni</p>
           <p>Herve Leger</p>
           <p>Jimmy Choo</p>
           <p>Maje</p>
           <p>Sandro</p>
           <p>Seafolly</p>
           <p>Stella McCartney</p>
           <p>Stuart Weitzman</p>
        
        </div>
        <div className="images-w">

        <div>
            <img className="image1" src="https://www.theoutnet.com/cms/ycm/resource/blob/517006/5c27972d5e9ae60f29f04d51b253e474/bestsellers-image-1-intl-data.jpg" alt="" />
            <p className="color-bold-w">ALL BESTSELLERS</p>
        </div>
        <div>
            <img className="image2" src="https://www.theoutnet.com/cms/ycm/resource/blob/937998/999787e35e7eb97c8916ea98e2771d52/bestsellers-image-2-intl-data.jpg" alt="" />
            <p className="color-bold-w">COCKTAIL & PARTY DRESSES</p>
        </div>
   
</div>  
</div>
<div className="designers" style={style3} onMouseEnter={(e)=>{
         setStyle3({display: 'flex'})}}    
         onMouseLeave={(e)=>{
             setStyle3({display: 'none'})
         }}>
 <div>
     <h3 className="line-w">Shop By Designers</h3>
     <p>All 350+ Designers</p>
     <p>Superbrands</p>
     <p>Contemporary</p>
     <p>Acne Studios</p>
     <p>Diane von Furstenberg</p>
     <p>Colce & Gabbana</p>
     <p>GANNI</p>
     <p>Iris & Ink</p>
     <p>IRO</p>
     <p>Maje</p>
 </div>
 <div>
 <div className="line-w margin-topw"></div>
     <p>rag & bone</p>
     <p>Roger Vivier</p>
     <p>Sandro</p>
     <p>Stella McCartney</p>
     <p>Stuart Weitzman</p>
     <p>Tory Burch</p>
     <p>Valentino</p>
     <p>Victoria Beckham</p>
     <p>Zimmermann</p>
 </div>
 <div>
     <h3 className="line-w">New Designers</h3>
     <p>See All New Designers</p>
     <p>Amiri</p>
     <p>Bondi Born</p>
     <p>Coach</p>
     <p>Dion Lee</p>
     <p>Leo Lin</p>
     <p>Lisou</p>
 </div>
 <div>
     <img className="image1" src="https://www.theoutnet.com/cms/ycm/resource/blob/1149230/0c10779d482021c9f47cfafd6b07728f/designers-image-intl-data.jpg" alt="" />
     <p className="color-bold-w">ACNE STUDIOS</p>
 </div>
 
 
</div>
<div className="clothing" style={style4} onMouseEnter={(e)=>{
         setStyle4({display: 'flex'})}}    
         onMouseLeave={(e)=>{
             setStyle4({display: 'none'})
         }}>
 <div>
     <h3 className="line-w">Shop Clothing</h3>
     <p>All Clothing</p>
     <p>Just In Clothing</p>
     <p>New Season</p>
     <p>Activewear</p>
     <p>Beachwear</p>
     <p>Blazers</p>
     <p>Bridal</p>
     <p>Cashmere</p>
     <p>Coats</p>
 </div>
 <div>
     <div className="line-w margin-topw"></div>
     <p>Cocktail Dresses</p>
     <p>Evening</p>
     <p>Gowns</p>
     <p>Jackets</p>
     <p>Jeans</p>
     <p>Jumpsuits</p>
     <p>Knitwear</p>
     <p>Leathers</p>
     <p>Lingerie</p>
 </div>
 <div> 
     <div className="line-w margin-topw"></div>
     <p>Loungewear</p>
     <p>Pants</p>
     <p>Shorts</p>
     <p>Skirts</p>
     <p>Skiwear</p>
     <p>Suiting</p>
     <p>Sweaters</p>
     <p>Tops</p>
     <p>Summer Edit</p>
     <p>Wedding Guest</p>
 </div>
 <div>
     <img className="image1" src="https://www.theoutnet.com/cms/ycm/resource/blob/52308/3e2ca740020e6c9ef320e5fd68df2568/clothing-image-intl-data.jpg" alt="" />
     <p className="color-bold-w">BRIDAL</p>
 </div>
 
</div>
<div className="shoes" style={style5} onMouseEnter={(e)=>{
         setStyle5({display: 'flex'})}}    
         onMouseLeave={(e)=>{
             setStyle5({display: 'none'})
         }}>
 <div>
     <h3 className="line-w">Shop Shoes</h3>
     <p>All Shoes</p>
     <p>Boots</p>
     <p>Bridal</p>
     <p>Flat Shoes</p>
     <p>Heels</p>
     <p>Pumps</p>
     <p>Sandals</p>
     <p>Sneakers</p>
 </div>
 <div>
     <h3 className="line-w">Shop By Designers</h3>
     <p>By Far</p>
     <p>Gianvito Rossi</p>
     <p>Giuseppe Zanotti</p>
     <p>Sergio Rossi</p>
     <p>Stuart Weitzman</p>
     <p>Tod's</p>
     <p>Tory Burch</p>
     <p>Valentino Garavani</p>
 </div>
 <div className="images-w">
     <div>
         <img className="image1" src="https://www.theoutnet.com/cms/ycm/resource/blob/2240/3cff7d7c2c11d6f3f1f25c8b629c0707/shoes-image1-intl-data.jpg" alt="" />
         <p className="color-bold-w">FLAT SHOES</p>
     </div>
     <div>
         <img className="image2" src="https://www.theoutnet.com/cms/ycm/resource/blob/1186698/cb9c2ea97db7fc6bd4998f1b0501d2a7/shoes-image1-intl-data.jpg" alt="" />
         <p className="color-bold-w">STUART WEITZMAN</p>
     </div>
</div> 
</div>
<div className="Bags" style={style6} onMouseEnter={(e)=>{
         setStyle6({display: 'flex'})}}    
         onMouseLeave={(e)=>{
             setStyle6({display: 'none'})
         }}>
 <div>
     <h3 className="line-w">Shop Bags</h3>
     <p>All Bags</p>
     <p>just In Bags</p>
     <p>Backpacks</p>
     <p>Clutch Bags</p>
     <p>Mini Bags</p>
     <p>Shoulder Bags</p>
     <p>Top-Handle Bags</p>
     <p>Totes</p>
 </div>
 <div>
     <h3 className="line-w">Shop By Designers</h3>
     <p>DKNY</p>
     <p>Kate Spade New York</p>
     <p>Love Moschino</p>
     <p>Marc Jacobs</p>
     <p>MICHAEL Michael Kors</p>
     <p>See by Chloe</p>
     <p>Serapian</p>
     <p>Tory Burch</p>
 </div>
 <div>
     <div>
         <img className="image1" src="https://www.theoutnet.com/cms/ycm/resource/blob/853104/560b99658a743aa1a1b889ee24d1131f/bags-banner-image-1-intl-data.jpg" alt="" />
         <p className="color-bold-w">DESIGNER HANDBAGS</p>
     </div>
     <div>
         <img className="image2" src="https://www.theoutnet.com/cms/ycm/resource/blob/579814/f97342d5d403ab93a9b7942655cad5ec/bags-banner2-intl-data.jpg" alt="" />
         <p className="color-bold-w">SHOULDER BAGS</p>
     </div>

</div>
</div>
<div className="Accessories" style={style7} onMouseEnter={(e)=>{
         setStyle7({display: 'flex'})}}    
         onMouseLeave={(e)=>{
             setStyle7({display: 'none'})
         }}> 
 <div>
     <h3 className="line-w">Shop By Category</h3>
     <p>All Accessories</p>
     <p>All Gifts</p>
     <p>Earings</p>
     <p>Hats</p>
     <p>Jewelry</p>
     <p>Lingeries</p>
     <p>Necklaces</p>
     <p>Sleepwear</p>
     <p>Sunglasses</p>
     <p>Wallets</p>
 </div>
 <div>
     <h3 className="line-w">Shop By Designers</h3>
     <p>Ben-Amun</p>
     <p>Brunello Cucinelli</p>
     <p>Burberry</p>
     <p>Givenchy</p>
     <p>Gucci</p>
     <p>Kate Spade New York</p>
     <p>La Perla</p>
     <p>rag & bone</p>
     <p>Sergio Rossi</p>
     <p>Zimmermann</p>
 </div>
 <div className="images-w">
     <div>
         <img className="image1"  src="https://www.theoutnet.com/cms/ycm/resource/blob/564062/7c87e469b0e47b715bc1067a8a31d734/accessories-image-intl-data.jpg" alt="" />
         <p className="color-bold-w">ALL ACCESSORIES</p>
     </div>
     <div>
         <img className="image2"  src="https://www.theoutnet.com/cms/ycm/resource/blob/880478/4e5c5a62bae87ec697a8ed438f6a03b5/accessories-banner-2-image-intl-data.jpg" alt="" />
         <p className="color-bold-w">MOTHER'S DAY GIFTs</p>
     </div>
 
</div> 
</div>

 <div className="discount" style={style8} onMouseEnter={(e)=>{
         setStyle8({display: 'flex'})}}    
         onMouseLeave={(e)=>{
             setStyle8({display: 'none'})
         }}>
 <div>
                <h3 className="line-w">Shop by Category</h3>
                <p>All Styles at 70% off</p>
                <p>Bags</p>
                <p>Boots</p>
                <p>Coats</p>
                <p>Dresses</p>
                <p>Knitwear</p>
                <p>Pants</p>
                <p>Shoes</p>
                <p>Skirts</p>
                <p>Tops</p>
            </div> 
            <div>
                <h3 className="line-w">Shop By Designers</h3>
                <p>Acne Studios</p>
                <p>Diane Von Furstenberg</p>
                <p>Ganni</p>
                <p>IRO</p>
                <p>J Brand</p>
                <p>rag & bones</p>
                <p>Melissa Odabash</p>
                <p>Stella McCartney</p>
                <p>Valentino</p>
                <p>Zimmermann</p>
            </div>
            <div className="images-w">
                <div>
                    <img  className="image1" src="https://www.theoutnet.com/cms/ycm/resource/blob/960894/a007fcdb74f1da264878db96f60faefd/70-off-image-data.jpg" alt="" />
                    <p className="color-bold-w">STYLES AT 70% OFF</p>
                </div>
                <div>
                    <img className="image2" src="https://www.theoutnet.com/cms/ycm/resource/blob/858000/196c61a466451700c65871fc79bf4a49/styles-at-70-off-image2-data.jpg" alt="" />
                    <p className="color-bold-w">DRESSES AT UP TO 70% OFF</p>
                </div>
           
</div>  
</div>
 <div className="iris" style={style9} onMouseEnter={(e)=>{
         setStyle9({display: 'flex'})}}    
         onMouseLeave={(e)=>{
             setStyle9({display: 'none'})
         }}>
     <div>
         <h3 className="line-w">Shop Iris & Ink</h3>
         <p>All Iris & Ink</p>
         <p>Clothing</p>
         <p>Dresses</p>
         <p>Jackets</p>
         <p>Knitwear</p>
         <p>Leather</p>
         <p>Pants</p>
         <p>Skirts</p>
         <p>Shoes</p>
         <p>Tops</p>
     </div>
     <div className="images-w">
<div>
    <img  className="image1" src="https://www.theoutnet.com/cms/ycm/resource/blob/2144/50efa53f0b0d81efe30aaa0e4d155835/irisink-image1-intl-data.jpg" alt="" />
    <p className="color-bold-w">IRIS & INK</p>
</div>
<div>
    <img className="image2" src="https://www.theoutnet.com/cms/ycm/resource/blob/1103858/fee02a5a84089db7b149cac8fa39d114/irisink-image2-intl--data.jpg" alt="" />
    <p className="color-bold-w">CONSIDERED COLLECTION</p>
</div>

</div> 
</div>
 <div className="whattowear" style={style10} onMouseEnter={(e)=>{
         setStyle10({display: 'flex'})}}    
         onMouseLeave={(e)=>{
             setStyle10({display: 'none'})
         }}>
     <div>
         <h3 className="line-w">What To Wear</h3>
         <p>All Editorial</p>
         <p>This Season</p>
         <p>Between Seasons</p>
         <p>To Dress Up</p>
         <p>To Lounge Down</p>
         <p>Jeans Fit Guide</p>
         <p>Wearing Neutrals</p>
         <p>The Contemporary Edition</p>
         <p>The Wish Lists</p>
         <p>Key Trends</p>
     </div>
     <div>
         <h3 className="line-w">Interviews & Features</h3>
         <p>Daisy Edgar-Jones</p>
         <p>Florence Pugh</p>
         <p>Nick Carvell</p>
         <p>Munroe Bergdorf</p>
         <p>Emily Hampshire</p>
         <p>Clara Amfo</p>
         <p>Dina Asher Smith</p>
         <p>The Icons: Stonewash Jeans</p>
     </div>
     <div>
      <h3 className="line-w">The Considered Hub</h3>
      <p>Iris & Ink</p>
      <p>Clothing</p>
      <p>Digital ID</p>
      <p>Our Considered Pledge</p>
     </div>
     <div>
          <img  className="image1" src="https://www.theoutnet.com/cms/ycm/resource/blob/1103862/3abe73457fd8bea8b45fc9c883b230a5/editorial-banner-1-image-data.jpg" alt="" />
          <p className="color-bold-w">NEW SEASON</p>
         </div>
 </div>
</div>
    )
}