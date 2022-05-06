import React from 'react'
import '../Style/ClothesCategory.css'
import { Link } from 'react-router-dom'
import { NavBar } from "./NavBar"
export default function ClothesCategory(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/men/mens-jacket-clothes"><img src={props.jacket} alt="" /></Link>
            <p style={{ fontSize: "18px", textAlign: "center", marginTop: "25px" }} classNameName='para-1'>{props.para1}</p>
            <p classNameName='para-2'>{props.para2}</p>
            <button style={{ border: "none", padding: "15px", border: "1px solid black", }}><Link to="/men/mens-jacket-clothes">{props.button1}</Link></button>
          </div>
          <div className="col">
            <Link to="/men/mens-shirts-clothes"><img src={props.shirts} alt="" /></Link>
            <p style={{ fontSize: "18px", textAlign: "center", marginTop: "25px" }} classNameName='para-1'>{props.para3}</p>
            <p classNameName='para-2'>{props.para4}</p>
            <button style={{ border: "none", padding: "15px", border: "1px solid black", }}><Link to="/men/mens-shirts-clothes">{props.button2}</Link></button>
          </div>
          <div className="col">
            <Link to="/men/pant-clothes"><img src={props.paint} alt="" /></Link>
            <p style={{ fontSize: "18px", textAlign: "center", marginTop: "25px" }} classNameName='para-1'>{props.para5}</p>
            <p classNameName='para-2'>{props.para6}</p>
            <button style={{ border: "none", padding: "15px", border: "1px solid black", }}><Link to="/men/pant-clothes">{props.button3}</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}
