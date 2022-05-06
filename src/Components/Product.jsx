import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import '../Style/Product.css'
export default function Product() {
    const {id} = useParams();
    const[product, setProduct]=useState([]);
    const [loading, setLoading] = useState(false)
    
    useEffect(()=>{
        const getProduct = async()=>{
            const res = await axios.get(`https://outnetclone.herokuapp.com/data/${id}`);
            setProduct(res.data.womensdata);
            setLoading(false)
        }
        getProduct()
    },[]);

    const Loading = ()=>{
        return(
            <>
                Loding.....
            </>
        )
    }
    const ShowProduct = ()=>{
        const clicking = (smallImg)=>{
                const fullImg = document.getElementById('image-box');
                fullImg.src = smallImg.src
        }
        return(
            <>
                <div className="container">
                    <div className="wrapper">
                        <div className='product-box'>
                        <div className="all-images">
                            <div className="small-images">
                                 <img src={product.image[0]} alt="" onClick={clicking(this)} />
                                <img src={product.image[1]} alt="" onClick={clicking(this)} />
                                <img src={product.image[2]} alt="" onClick={clicking(this)} />
                                <img src={product.image[3]} alt="" onClick={clicking(this)} /> 
                            </div>
                            <div className="main-images">
                                <img id='image-box' src={product.image[1]} alt="" />
                            </div>
                        </div>
                        </div>

                        <div className='text'>
                            <h2>some text</h2>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    console.log(product)
  return (
    <>
            <div>
                {/* <h1> */}
                    {loading ? <Loading/> : <ShowProduct/>}
                {/* </h1> */}
            </div>
    </>
  )
}
