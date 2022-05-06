import React,{useState, useEffect} from 'react'
import '../Style/MenCollection.css'
import Product_display from './Product_display'
import axios from "axios";
export default function AliceOlivia() {
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
      const para10 = "Launched in 2002 by Stacey Bendet in a quest to create the perfect pair of pants, Alice + Olivia has become synonymous with feminine tailoring. Every design from the label’s skirts to jeans embodies her eclectic and playful aesthetic – think intricate embellishments and vivid patterns. Browse our edit of the label's party-ready dresses, head-turning jumpsuits and glamorous shoes."
      const heading10 = "ALICE + OLIVIA"
      const img10 ="https://www.theoutnet.com/ycm/resource/blob/462796/79cf1b799059c1a7dc5dd326e69b3307/alice-and-olivia-image-s-data.jpg?imwidth=3000&improfile=isc"
  return (
    <>
        <Product_display Data={data} para10={para10} heading10={heading10} img10={img10} />
    </>
  )
}