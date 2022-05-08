import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {addCart} from '../Redux/action'
import { NavBar } from "./NavBar"
import Skeleton from 'react-loading-skeleton'
import '../Style/Product.css'
export default function GirlsBlazerProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false)
    const [fullimg, setFullimg] = useState()
    const [controll, setControll]=useState(true)
    const dispatch = useDispatch();
    const addProduct = (product)=>{
        
        dispatch(addCart(product))
        alert(" Added Sucessfully")
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const res = await axios.get(`https://sandlasdata.herokuapp.com/blazers/${id}`);
            setProduct(res.data.tshirtdata);
            setLoading(false)
            console.log(product)
        }
        getProduct()
    }, []);
    const handleImage = (value) => {
        setFullimg(value)
        setControll(false)
    }

    const Loading = () => {
        return (
            <>
                {/* Loading something............ */}
                {/* <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: "2" }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div> */}
                <div className='loading-page'>
                    <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" />
                </div>
                
            </>
        )
    }
    const ShowProduct = () => {
        
        return (
            <>
            <NavBar/>
                <div className="container">
                    <div className="wrapper">
                    {product.image != undefined ?<div className="allDetails">
                             <div className="all-images">
                                <div className="small-images">

                                    <img onClick={() => {
                                        handleImage(product.image[0])
                                    }} src={product.image[0]} alt="" />
                                    <img onClick={() => {
                                        handleImage(product.image[1])
                                    }} src={product.image[1]} alt="" />
                                    <img onClick={() => {
                                        handleImage(product.image[2])
                                    }} src={product.image[2]} alt="" />
                                    <img onClick={() => {
                                        handleImage(product.image[3])
                                    }} src={product.image[3]} alt="" />
                                </div>


                            </div>
                            {/* {setControll ?<div className="main-images">
                                <img  src={product.image[1]} alt="" />
                            </div>: */}
                            {/* {product.image != undefined ?  */}
                             <div className="main-images">
                            {controll ?
                                <img  src={product.image[1]} alt="product.image[1]" />:
                                <img  src={fullimg} alt="product.image[1]" /> }
                            </div> 
                            {/* :""} */}
                        </div> : ""}

                        <div className='text'>
                            <div>
                                <span className='justin'>JUST IN</span><br />
                                <span className='name'>{product.name}</span>
                                <p className='about'>{product.about}</p>
                                <span className='price'>$ {product.price}</span><br />
                                <span className='span11'> <span className='span12'>${product.crossprice} </span>  {product.discount}</span>
                                <p className='color'>Color: {product.color}</p>
                            </div>
                            <div>
                                <p className='size'>Select a Size</p>
                                <div className='sandxl'>
                                    <p className='s'>S</p>
                                    <p className='xl'>XL</p>
                                </div>
                                <div className='button12'>
                                    <button
                                    onClick={()=>addProduct(product)
                                    }
                                     className='button13'>Add to Bag</button><br />
                                    <button className='button14'>Add to Wish List</button>
                                </div>
                            </div>
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
                <div className='container'>
                    <div className='row'>
                    
                        {loading ? <Loading /> : <ShowProduct />}
                    </div>
                </div>
            </div>
        </>
    )
}
