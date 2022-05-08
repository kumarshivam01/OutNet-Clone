import React,{useState, useEffect} from 'react'
import '../Style/MenCollection.css'
import { NavBar } from "./NavBar"
import Product_display from './Product_display'
import axios from "axios";
import Footer from './Footer';
export default function HelmetLang() {
    const [data, setData] = useState([])
    const getData = async()=>{
        const res = await axios.get(`https://dotnetdataa.herokuapp.com/data/men`)
        
        setData(res.data.mensdata) 
      }
      useEffect(()=>{
        getData()
      },[])
    

      // ************************************* //
      const para10 = "Helmet Lang's menswear line is built on unabashed glamour. Namesake designers Domenico Dolce and Stefano Gabbana have been captivating the world's best dressed since their Milan runway debut in 1985. Our edit features recognizable house codes including lush jacquard and brocade fabrics, impeccably tailored suits and heavily embellished separates. Try a printed T-shirt or pair of sneakers to bring the label's famed Italian style to your everyday."
      const heading10 = "HELMUT LANG"
      const img10 ="https://www.theoutnet.com/cms/ycm/resource/blob/1258138/4b5cb3ae56decf05cfc7350d958341e8/main-1-intl-image-data.jpg/w1400_q80.jpg"
  return (
    <>
    <NavBar/>
        <Product_display Data={data} para10={para10} heading10={heading10} img10={img10} />
        <Footer/>
    </>
  )
}