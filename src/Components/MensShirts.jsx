import React,{useState, useEffect} from 'react'
import '../Style/MenCollection.css'
import Product_display from './Product_display'
import axios from "axios";
export default function MensShirts() {
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
      const para10 = "Shop our collection of men's designer T-shirts to find styles to suit every taste. The edit features designs from world-renowned fashion labels, including Dolce & Gabbana, Adidas, Kenzo, rag & bone and more. Explore printed T-shirts, simplistic black and white T-shirts, striped T-shirts and many other styles of T-shirts for men, all at discount prices. Pair with a luxury cardigan and men's designer jeans for a casual weekend look."
      const heading10 = "MEN'S T-SHIRTS"
      const img10 ="https://www.theoutnet.com/ycm/resource/blob/1232872/a11ff3c70fd2f4c531743e021d299540/mens-t-shirts-image-data.jpg?imwidth=3000&improfile=isc"
  return (
    <>
        <Product_display Data={data} para10={para10} heading10={heading10} img10={img10} />
    </>
  )
}