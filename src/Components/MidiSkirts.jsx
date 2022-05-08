import React,{useState, useEffect} from 'react'
import '../Style/MenCollection.css'
import Product_display from './Product_display'
import axios from "axios";
import { NavBar } from "./NavBar"
import Footer from './Footer';
export default function MidiSkirts() {
    const [data, setData] = useState([])
    const getData = async()=>{
        const res = await axios.get(`https://sandlasdata.herokuapp.com/skirts `)
        // console.log(res.data.mensdata);
        // console.log(res)
        setData(res.data.skirtsdata) 
      }
      useEffect(()=>{
        getData()
      },[])
    

      // ************************************* //
      const para10 = "Whether you're looking for a printed or minimalistic style, our collection of designer midi skirts caters for all tastes. Choose from designers including Maje, Ganni and Victoria Beckham for one of the most hardworking yet flattering pieces in your wardrobe. Pair with a designer t-shirt or delicate blouse, depending on the occasion."
      const heading10 = "DESIGNER MIDI SKIRTS"
      const img10 ="https://www.theoutnet.com/ycm/resource/blob/1258996/11bf1895499c0119c3591d2872f37ace/midi-skirts-image-s--data.jpg?imwidth=3000&improfile=isc"
  return (
    <>
    <NavBar/>
        <Product_display Data={data} route="/products/midi-skirts-clothes/" para10={para10} heading10={heading10} img10={img10} />
        <Footer/>
    </>
  )
}