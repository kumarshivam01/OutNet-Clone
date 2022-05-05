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
    //   console.log(data)
  return (
    <>
        <Product_display Data={data}/>
    </>
  )
}
