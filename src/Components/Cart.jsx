import React from 'react'
import { useSelector } from 'react-redux'
import '../Style/Cart.css'
import { NavBar } from './NavBar'
export default function Cart() {
    const counter = useSelector((product) => product)
    console.log(counter.handleCart[0].about)
    // console.log(useSelector)
    return (
        <div className='container265'>
        <NavBar/>
        <div className='cart-container'>
            <div className='cart-heading'>
                <span className='para15'>Shopping Bag</span><br />
                <span className='para16'>{counter.handleCart.length} item</span>
            </div>
            <div className='cart-flex'>
                <div className='cart-product'>
                    {
                        counter.handleCart.map((value) => {
                            return (
                                <><div className='cart-product-div'>


                                    <div className='cart-product-img'>
                                        <img src={value.image[0]} alt="" />
                                    </div>
                                    <div className='cart-product-details'>
                                        <span className='span21'>JUST IN</span><br />
                                        <span className='span22'>{value.name}</span><br />
                                        <span className='span23'>{value.about}</span><br />
                                        <span className='span24'>{value.color}</span><br />
                                        <span className='span25'>$ {value.price}</span><br />
                                        <span className='span26'><span className='span27'>$ {value.crossprice}</span>{value.discount}</span>
                                        <div className='cart-product-button'>
                                            <button>+</button><br />
                                            <p>1</p>
                                            <button>-</button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                </>
                            )
                        })
                    }
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
        </div>
    )
}
