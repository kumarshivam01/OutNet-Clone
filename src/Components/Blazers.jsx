import React,{useState, useEffect} from 'react'
import '../Style/MenCollection.css'
import Product_display from './Product_display'
import axios from "axios";
import { NavBar } from "./NavBar"
import Footer from './Footer';
export default function Blazers() {
    const [data, setData] = useState([])
    const getData = async()=>{
        const res = await axios.get(`https://sandlasdata.herokuapp.com/blazers`)
        // console.log(res.data.mensdata);
        // console.log(res)
        setData(res.data.tshirtdata) 
      }
      useEffect(()=>{
        getData()
      },[])
    

      // ************************************* //
      const para10 = "Hey, twinkle toes. Have we got the summer shoes for you. Embrace the rising temperatures and shop our collection of designer sandals. With designer slides, playful wedges and beach-perfect flats from designers like Sam Edelman, Paloma Barceló and more.Looking to elevate your outfit? Take a look at our high-heeled sandals."
      const heading10 = " SUNBRIGHT BLAZERS"
      const img10 ="https://www.theoutnet.com/cms/ycm/resource/blob/1257600/c72feec6f660a33fc1c146a505328a1b/promo-1-image-data.jpg/w1400_q80.jpg"
  return (
    <>
    <NavBar/>
        <Product_display Data={data} route="/product/women-blazers/" para10={para10} heading10={heading10} img10={img10} />
        <Footer/>
    </>
  )
}