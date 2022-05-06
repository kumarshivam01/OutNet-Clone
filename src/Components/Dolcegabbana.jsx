import React,{useState, useEffect} from 'react'
import '../Style/MenCollection.css'
import { NavBar } from "./NavBar"
import Product_display from './Product_display'
import axios from "axios";
import Footer from './Footer';
export default function Dolcegabbana() {
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
      const para10 = "Dolce & Gabbana's menswear line is built on unabashed glamour. Namesake designers Domenico Dolce and Stefano Gabbana have been captivating the world's best dressed since their Milan runway debut in 1985. Our edit features recognizable house codes including lush jacquard and brocade fabrics, impeccably tailored suits and heavily embellished separates. Try a printed T-shirt or pair of sneakers to bring the label's famed Italian style to your everyday."
      const heading10 = "DOLCE & GABBANA"
      const img10 ="https://www.theoutnet.com/ycm/resource/blob/1238168/6d85aef7b91bfcb9cc17a9cd39f02d1a/dolce-gabbana-cb-image-data.jpg?imwidth=3000&improfile=isc"
  return (
    <>
    <NavBar/>
        <Product_display Data={data} para10={para10} heading10={heading10} img10={img10} />
        <Footer/>
    </>
  )
}