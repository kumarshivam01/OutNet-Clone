import React,{useState, useEffect} from 'react'
import '../Style/MenCollection.css'
import Product_display from './Product_display'
import axios from "axios";
export default function MenCollection() {
    const [data, setData] = useState([])
    const getData = async()=>{
        const res = await axios.get(`https://dotnetdataa.herokuapp.com/data/men`)
        // console.log(res.data.mensdata);
        // console.log(res)
        setData(res.data.mensdata) 
      }
      useEffect(()=>{
        getData()
      },[])
    

      // ************************************* //
      const para10 = "Our luxurious men's clothing sale features a wide variety of men's designer clothing, with everything you need to create unique looks that suit your individual style. Shop from men's shirts, T-shirts, pants, jackets and more to discover discount investment pieces from the world's finest menswear brands including Alexander McQueen, Balenciaga and Off-White."
      const heading10 = "MEN'S PANTS"
      const img10 ="https://www.theoutnet.com/cms/ycm/resource/blob/1258162/a6c325b9bcf4f75d6d15fe02fb839a2d/promo-3-intl-image-data.jpg/w1400_q80.jpg"
  return (
    <>
        <Product_display Data={data} para10={para10} heading10={heading10} img10={img10} />
    </>
  )
}