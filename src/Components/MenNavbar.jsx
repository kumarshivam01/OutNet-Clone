import "../Style/Mennav.css"
import {useState} from "react"
export const MenNavbar=()=>{
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
    return(
        <div className="main">
            <div className="cat-men">
                <p className="men-hover" onMouseEnter={(e)=>{
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
     
        }} >Just In</p>
                <p className="men-hover" onMouseEnter={(e)=>{
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
     
        }} >Designers</p>
                <p className="men-hover" onMouseEnter={(e)=>{
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
     
        }} >Bestsellers</p>
                <p className="men-hover" onMouseEnter={(e)=>{
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
     
        }} >Clothing</p>
                <p className="men-hover" onMouseEnter={(e)=>{
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
     
        }} >Shoes</p>
                <p className="men-hover" onMouseEnter={(e)=>{
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
     
        }} >Accessories</p>
                <p className="men-hover" onMouseEnter={(e)=>{
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
     
        }} >Sport</p>
                <p className="men-hover" onMouseEnter={(e)=>{
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
     
        }} >Wardrobe Staples</p>
                <p className="men-hover" onMouseEnter={(e)=>{
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
     
        }} >70% Off</p>
                <p className="men-hover" onMouseEnter={(e)=>{
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
     
        }} >Editorial</p>
            </div>
            <div className="JustIn-m" style={style} onMouseEnter={(e)=>{
            setStyle({display: 'flex'})}}    
            onMouseLeave={(e)=>{
                setStyle({display: 'none'})
            }}>
                <div>
                    <h3 className="line">Shop Just In</h3>
                    <p>All Just In</p>
                    <p>Just In Last Week</p>
                </div>
                <div>
                    <h3 className="line">This Week's Designers</h3>
                    <p>ALexandar McQueen</p>
                    <p>Balenciaga</p>
                    <p>Balmain</p>
                    <p>Dolce & Gabbana</p>
                    <p>Montblanc</p>
                    <p>Officine</p>
                    <p>Valentino</p>
                    <p>Versace</p>
                    <p>Vince</p>
                    <p>Zegna</p>
                </div>
                <div className="images-m">
                    <div>
                        <img className="imgae1-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1234802/9624f009a06a17b2579f48af9a155050/just-in-banner-intl-1-image-data.jpg" alt="" />
                        <p className="color-bold">Dolce & Gabbana</p>
                    </div>
                    <div>
                        <img className="image2-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1200424/e38c19be939129df5e06a122b19a7338/just-in-banner-2-image-data.jpg" alt="" />
                        <p className="color-bold">OFF-WHITE</p>
                    </div>
                </div>
            </div>
            


<div className="Designers-m" style={style1} onMouseEnter={(e)=>{
            setStyle1({display: 'flex'})}}    
            onMouseLeave={(e)=>{
                setStyle1({display: 'none'})
            }}> 
    <div>
        <h3 className="line">Shop By Designers</h3>
        <p>All Designers</p>
        <p>A.P.C</p>
        <p>Acne Studios</p>
        <p>Adidas</p>
        <p>Amiri</p>
        <p>Belstaff</p>
        <p>Brioni</p>
        <p>Dolce & Gabbana</p>
        <p>Dunhill</p>
    </div>
    <div>
        <div className="line margin-top"></div>
        <p>Grenson</p>
        <p>James Perse</p>
        <p>Kenzo</p>
        <p>Maison Margiela</p>
        <p>Marni</p>
        <p>Montblanc</p>
        <p>OFF-WHITE</p>
        <p>Officine Generale</p>
        <p>Tod's</p>
    </div>
    <div className="images-m">
        <div>
            <img className="imgae1-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1218676/dfa8c898185b52edca006adefd520b88/designers-banner-intl-image-data.jpg" alt="" />
            <p className="color-bold">SANDRO</p>
        </div>
        <div>
            <img className="image2-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1212778/195925b8939109a41326469e507115f6/designers-banner-2-image-intl-data.jpg" alt="" />
            <p className="color-bold">RAG & BONE</p>
        </div>
    </div>

</div>

    <div className="Bestsellers-m" style={style2} onMouseEnter={(e)=>{
            setStyle2({display: 'flex'})}}    
            onMouseLeave={(e)=>{
                setStyle2({display: 'none'})
            }}>
        <div>
            <h3 className="line">Shop By Category</h3>
            <p>All Bestsellers</p>
            <p>Accessories</p>
            <p>Bags</p>
            <p>Clothing</p>
            <p>Casual Shirts</p>
            <p>Jackies</p>
            <p>Jeans</p>
            <p>T-Shirts</p>
            <p>Shoes</p>
            <p>Fashion Sneakers</p>
        </div>
        <div>
            <h3 className="line">Shop Bt Designers</h3>
            <p>Acne Studio</p>
            <p>Adidas</p>
            <p>Belstaff</p>
            <p>Dolce & Gabbana</p>
            <p>Grenson</p>
            <p>Kenzo</p>
            <p>Maison Margiela</p>
            <p>rag & bone</p> 
            <p>Sandro</p>
            <p>Tod's</p>
        </div>
        <div className="images-m">
            <div>
                <img className="imgae1-m"  src="https://www.theoutnet.com/cms/ycm/resource/blob/1235488/0149a7924d9fea46671de7ee7855b581/bestsellers-banner-1-image-1--data.jpg" alt="" />
                <p className="color-bold">ALL BESTSELLERS</p>
                </div>
            <div>
                <img className="image2-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1234780/72ed38cec5023ace4321439db3e32ab9/wardrobe-staples-banner-2-image-data.jpg" alt="" />
                <p className="color-bold">PANTS</p>
            </div>
        </div>
</div>

<div className="Clothing-m" style={style3} onMouseEnter={(e)=>{
            setStyle3({display: 'flex'})}}    
            onMouseLeave={(e)=>{
                setStyle3({display: 'none'})
            }}>
    <div>
        <h3 className="line">Shop Clothing</h3>
        <p>All Clothing</p>
        <p>Casual Shirts</p>
        <p>Formal Shirts</p>
        <p>Polo Shirts</p>
        <p>T-Shirts</p>
        <p>Coats</p>
        <p>Jackies</p>
        <p>Casual Jackets</p>
        <p>Leather Jackets</p>
        <p>Blazers</p>
    </div>
    <div>
      <div className="line margin-top"></div>
        <p>Knitwear</p>
        <p>Cashmere</p>
        <p>Pants</p>
        <p>Crewneck Sweaters</p> 
        <p>Pants</p>
        <p>Jeans</p>
        <p>Shorts</p>
        <p>Suits</p>
        <p>Swimwear</p>
        <p>Underwear & Sleepwear</p>
        <p>Sweats</p>
    </div>
    <div className="images-m">
        <div>
            <img className="imgae1-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1200712/f7da5b4efca35a60de00634a61b52d52/clothing-banner-1-image-data.jpg" alt="" />
            <p className="color-bold">CASUAL SHIRTS</p>
        </div>
        <div>
            <img className="image2-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1211412/9196842d382e64b11161417bba7d1fcc/clothing-banner-2-image-data.jpg" alt="" />
            <p className="color-bold">JEANS</p>
        </div>
    </div>
</div>


<div className="Shoes-m" style={style4} onMouseEnter={(e)=>{
            setStyle4({display: 'flex'})}}    
            onMouseLeave={(e)=>{
                setStyle4({display: 'none'})
            }}>
    <div>
        <h3 className="line">Shop Shoes</h3>
        <p>All Shoes</p>
        <p>Boots</p>
        <p>Chelsea Boots</p>
        <p>Espadrilles</p>
        <p>Lace Up's</p>
        <p>Sandals</p>
    </div>
    <div>
    <div className="line margin-top"></div>
        <p>Sneakers</p>
        <p>Fashion Sneakers</p>
        <p>Sport Sneakers</p>
    </div>
    <div className="images-m">
        <div>
            <img className="imgae1-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1211324/28a5022d9c2ea6e44e1b879e63e63be0/shoe-banner-1-image-data.jpg" alt="" />
            <p className="color-bold">TOD'S</p>
        </div>
        <div>
            <img className="image2-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1211328/f192482616c2cba93b11076e22dc7954/shoes-banner-2-image-data.jpg" alt="" />
            <p className="color-bold">DESIGNER SNEAKERS</p>
        </div>
    </div>
</div>


<div className="Accessories-m" style={style5} onMouseEnter={(e)=>{
            setStyle5({display: 'flex'})}}    
            onMouseLeave={(e)=>{
                setStyle5({display: 'none'})
            }}>
    <div>
        <h3 className="line">Shop By Category</h3>
        <p>All Accessories</p>
        <p>Bestsellers</p>
        <p>Bags</p>
        <p>Backpacks</p>
        <p>Briefcases</p>
        <p>Luggage & Travelers</p>
        <p>Messenger Bags</p>
        <p>Wallets</p> 
        <p>Belts</p>
        <p>Hats</p>
    </div>
    <div>
    <div className="line margin-top"></div>
        <p>Caps</p>
        <p>Scarves</p>
        <p>Ties</p>
        <p>Jewelry</p>
        <p>Cufflinks & Tie Clips</p>
        <p>Sunglasses</p>
        <p>Stationery</p>
        <p>Technology</p>
    </div>
    <div className="images-m">
        <div>
            <img className="imgae1-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1218556/db6d6d312e8c84e631d509b3ed91f1d6/accessories-b1-image-intl-data.jpg" alt="" />
            <p className="color-bold">ALL ACCESSIBLE</p>
        </div>
        <div>
            <img className="image2-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1211374/188b6fcc46cb6dc0b0653289d7f5ef21/accessories-b2-image-data.jpg" alt="" />
            <p className="color-bold">BAGS</p>
        </div>
    </div>
</div>
<div className="Sport-m" style={style6} onMouseEnter={(e)=>{
            setStyle6({display: 'flex'})}}    
            onMouseLeave={(e)=>{
                setStyle6({display: 'none'})
            }}>
    <div>
        <h3 className="line">Shop By Category</h3>
        <p>All Sport</p>
        <p>Jackets</p>
        <p>Pants</p>
        <p>Shorts</p>
        <p>Skiwear</p>
        <p>Sneakers</p>
        <p>Tops</p>
    </div>
    <div className="images-m">
    <div>
        <img className="imgae1-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1211086/0ccf303c6b19ce6b0218e787ba73a442/sport-banner-1-image-data.jpg" alt="" />
        <p className="color-bold">ALL SPORT</p>
    </div>
    <div>
        <img className="image2-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1211090/f2eda6c329933696413470f98b082270/sports-banner-2-image-data.jpg" alt="" />
        <p className="color-bold">ADIDAS</p>
    </div>
</div>
</div>
<div className="Wardrobe-m" style={style7} onMouseEnter={(e)=>{
            setStyle7({display: 'flex'})}}    
            onMouseLeave={(e)=>{
                setStyle7({display: 'none'})
            }}>
    <div>
        <h3 className="line">Shop By Category</h3>
        <p>Casual Shirts</p>
        <p>Polo Shirts</p>
        <p>T-Shirts</p>
        <p>Bags</p>
        <p>Blazers</p>
        <p>Jackets</p>
        <p>Denim</p>
        <p>Pants</p>
        <p>Sneakers</p>
        <p>Boots</p>
    </div>
    <div>
        <h3 className="line">Shop By Designers</h3>
        <p>Belstaff</p>
        <p>Brioni</p>
        <p>Canali</p>
        <p>Dunhill</p>
        <p>Frame</p>
        <p>Grenson</p>
        <p>N.Peal</p>
        <p>rag & bone</p>
        <p>Tod's</p>
        <p>Zegna</p>
    </div>
    <div className="images-m">
        <div>
            <img className="imgae1-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1235484/f0d6fe80949696d1dec40b2dfa4540ef/wardrobe-staples-banner-1-image-data.jpg" alt="" />
            <p className="color-bold">WARDROBE STAPLES</p>
        </div>
        <div>
            <img className="image2-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1211764/ef70d6fe4d7a715d09a086df3dfcd101/wardrobe-staples-banner-2-image-data.jpg" alt="" />
            <p className="color-bold">SWEATS</p>
        </div>
    </div>
</div>
<div className="discount-m" style={style8} onMouseEnter={(e)=>{
            setStyle8({display: 'flex'})}}    
            onMouseLeave={(e)=>{
                setStyle8({display: 'none'})
            }}>
    <div>
        <h3 className="line">Shop By Category</h3>
        <p>All Styles at 70% Off</p>
        <p>Clothing</p>
        <p>Coats</p>
        <p>Casual Shirts</p>
        <p>Jackets</p>
        <p>Knitwear</p>
        <p>Pants</p>
        <p>Shoes</p>
    </div>
    <div>
        <h3 className="line">Shop By Designers</h3>
        <p>Acne Studios</p>
        <p>Officine Generale</p>
        <p>Marcelo Burlon</p>
        <p>Neuw</p>
        <p>James Perse</p>
    </div>
    <div className="images-m">
    <div>
        <img className="imgae1-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1247666/8805dddd42d19312ed473d37b8d72d7f/styles-at-70-banner-1-image-data.jpg" alt="" />
        <p className="color-bold">STYLES AT 70% OFF</p>
    </div>
    <div>
        <img className="image2-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1247672/dce12c39df10902e3fa3c73467a13cbc/styles-at-70-banner-2-image-data.jpg" alt="" />
        <p className="color-bold">JACKETS AT 70% OFF</p>
    </div>
    </div>
</div>

<div className="editorial-m" style={style9} onMouseEnter={(e)=>{
            setStyle9({display: 'flex'})}}    
            onMouseLeave={(e)=>{
                setStyle9({display: 'none'})
            }}>
    <div>
        <h3 className="line">All Editorial</h3>
        <p>Spring Style For Men</p>
        <p>The Icons: Chelsea Boots</p>
        <p>The Icons: Leather Jackets</p>
    </div>
    <div className="images-m">
        <div>
            <img className="imgae1-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1211248/d4e1f30828687f4916cc450add8e49a3/editorial-banner-1-image-data.jpg" alt="" />
            <p className="color-bold">THE ICONS: CHELSEA BOOTS</p>
        </div>
        <div>
            <img className="image2-m" src="https://www.theoutnet.com/cms/ycm/resource/blob/1211252/97ec704ad24be1f0b2374f26a24db0ac/editorial-banner-2-image-data.jpg" alt="" />
            <p className="color-bold">THE ICONS: LEATHER JACKETS</p>
        </div>
    </div>
</div>
        </div>
    )
}