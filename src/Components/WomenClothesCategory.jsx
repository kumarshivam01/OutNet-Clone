import React from 'react'
import '../Style/ClothesCategory.css'
import { Link } from 'react-router-dom'
export default function WomenClothesCategory(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/women/blazers-clothes"><img src={props.jacket} alt="" /></Link>
            <p style={{ fontSize: "18px", textAlign: "center", marginTop: "25px" }} classNameName='para-1'>{props.para1}</p>
            <p classNameName='para-2'>{props.para2}</p>
            <button style={{ border: "none", padding: "15px", border: "1px solid black", }}> <Link to="/women/blazers-clothes">{props.button1}</Link> </button>
          </div>
          <div className="col">
            <Link to="/women/midi-skirts-clothes"><img src={props.shirts} alt="" /></Link>
            <p style={{ fontSize: "18px", textAlign: "center", marginTop: "25px" }} classNameName='para-1'>{props.para3}</p>
            <p classNameName='para-2'>{props.para4}</p>
            <button style={{ border: "none", padding: "15px", border: "1px solid black", }}><Link to="/women/midi-skirts-clothes">{props.button2}</Link></button>
          </div>
          <div className="col">
            <Link to="/women/sandal-clothes"><img src={props.paint} alt="" /></Link>
            <p style={{ fontSize: "18px", textAlign: "center", marginTop: "25px" }} classNameName='para-1'>{props.para5}</p>
            <p classNameName='para-2'>{props.para6}</p>
            <button style={{ border: "none", padding: "15px", border: "1px solid black", }}><Link to="/women/sandal-clothes">{props.button3}</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}
