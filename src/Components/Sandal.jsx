import React,{useState, useEffect} from 'react'
import '../Style/MenCollection.css'
import Product_display from './Product_display'
import axios from "axios";
export default function Sandal() {
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
      const para10 = "Hey, twinkle toes. Have we got the summer shoes for you. Embrace the rising temperatures and shop our collection of designer sandals. With designer slides, playful wedges and beach-perfect flats from designers like Sam Edelman, Paloma Barceló and more.Looking to elevate your outfit? Take a look at our high-heeled sandals."
      const heading10 = "SANDALS"
      const img10 ="https://www.theoutnet.com/ycm/resource/blob/462682/537715f486d42dbead517c9059c6590d/sandals-image-data.jpg?imwidth=3000&improfile=isc"
  return (
    <>
        <Product_display Data={data} para10={para10} heading10={heading10} img10={img10} />
    </>
  )
}