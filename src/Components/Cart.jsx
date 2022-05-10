import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import '../Style/Cart.css'
import { NavBar } from './NavBar'
export default function Cart() {
    const counter = useSelector((product) => product)
    console.log(counter.handleCart[0].about)
    // console.log(useSelector)
    return (
        <>

        
        <div className='container265'>
            <NavBar />
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
                    <div class="orderSummary">
                        <p>Order Summary</p>
                        <div>
                            <div class="subtotal"><div>Sub-Total</div><div>$68</div></div>
                            <div class="subtotal"><div>Shipping</div><div>$68</div></div>
                            <div class="subtotal"><div>taxes & duties</div><div>$68.50</div></div>
                        </div>
                        <div>
                            <div class="subtotal1"><div>Total(USD)</div><div>$143.51</div></div>

                        </div>
                        <div class="button29">
                            <Link to='/address'><button>Proceed to checkout</button></Link>
                        </div>
                        <div class="visaCard">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
