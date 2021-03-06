import React,{useState, useEffect} from 'react'
import '../Style/MenCollection.css'
import Product_display from './Product_display'
import axios from "axios";
import { NavBar } from "./NavBar"
import Footer from './Footer';
export default function MensJacket() {
    const [data, setData] = useState([])
    const getData = async()=>{
        const res = await axios.get(`https://outnetclone.herokuapp.com/data`)
        // console.log(res.data.mensdata);
        // console.log(res)
        setData(res.data.womensdata) 
      }
      useEffect(()=>{
        getData()
      },[])
    

      // ************************************* //
      const para10 = "Jacket Shop our collection of men's designer T-shirts to find styles to suit every taste. The edit features designs from world-renowned fashion labels, including Dolce & Gabbana, Adidas, Kenzo, rag & bone and more. Explore printed T-shirts, simplistic black and white T-shirts, striped T-shirts and many other styles of T-shirts for men, all at discount prices. Pair with a luxury cardigan and men's designer jeans for a casual weekend look."
      const heading10 = "MEN'S JACKETS"
      const img10 ="https://www.theoutnet.com/cms/ycm/resource/blob/1258158/a2545ecd9bdcd9112047c09933a088be/promo-1-intl-image-data.jpg/w1400_q80.jpg"
  return (
    <>
    <NavBar/>
        <Product_display Data={data} route="/products/mens-jacket/" para10={para10} heading10={heading10} img10={img10} />
        <Footer/>
    </>
  )
}