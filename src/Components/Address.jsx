import React from "react";
import '../Style/Address.css'
import { Link } from "react-router-dom";
import { useState } from "react";

export const Checkout = () => {
    const [address, setAddress]= useState({
        first_name:"",
        last_name:"",
        addressLine1:"",
        addressLine2:"",
        city:"",
        province:"",
        zipCode:"",
        phoneNumber:""
    })

    function saveAddress(e) {

    }
   
    return (
        <>
        <div id="main">
        <div>
            <div></div>
            <h2>Shipping Address</h2>
        </div>
        <form>
            <label>First Name</label><br />
            <input id="first_name" type="text"></input><br />
            <label>Last Name</label><br />
            <input id ="last_name" type="text"></input><br />
            <label>Address line one</label><br />
            <input id="addressLine1" type="text"></input><br />
            <label>Address line two</label><br />
            <input id="addressLine2" type="text"></input><br />
            <label>City</label><br />
            <input id="city" type="text"></input><br />
            <label>Province</label><br />
            <input id="province" type="text"></input><br />
            <label>ZIP code</label><br />
            <input id="zipCode" type="Number"></input><br />
            <label>Phone number</label><br />
            <input id="phoneNumber" type="Number"></input><br />
            <hr />
            <Link to='/payments'><button onClick={saveAddress}>Continue</button></Link>
        </form>
        </div>
        </>
    )
}