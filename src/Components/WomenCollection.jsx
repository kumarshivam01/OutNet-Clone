import React,{useState, useEffect} from 'react'
import '../Style/MenCollection.css'
import Product_display from './Product_display'
import axios from "axios";
export default function WomenCollection() {
    const [data, setData] = useState([])
    const getData = async()=>{
        const res = await axios.get(`https://dotnetdataa.herokuapp.com/data/women`)
        // console.log(res.data.mensdata);
        // console.log(res)
        setData(res.data.womensdata) 
      }
      useEffect(()=>{
        getData()
      },[])
    //   console.log(data)
    const para10 = "Established in 1960 by Valentino Garavani and his business partner Giancarlo Giammetti, luxury brand Valentino remains world-renowned for impeccably detailed women's clothing that epitomizes glamour and romance. Creative Director Pierpaolo Piccioli unfurls a new chapter in the Italian maison's rich legacy, one he says is a continuous revelry of beauty and self-expression. Discover couture-like occasion dresses and daywear as well as signature Rockstud shoes and bags – all in mesmeric silhouettes, ornate textiles and splashes of radiant color. Get it all at discount outlet prices, only at THE OUTNET.Look to our edit for dresses, jackets, bags and more. REDValentino also available."
    const heading10 = "VALENTINO"
    const img10 ="https://www.theoutnet.com/ycm/resource/blob/462712/9898ef160b701c8e78c9df2254136b4d/valentino-image-s-data.jpg?imwidth=3000&improfile=isc"

  return (
    <>
        <Product_display Data={data} para10={para10} heading10={heading10} img10={img10}/>
    </>
  )
}
