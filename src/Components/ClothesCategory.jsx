import React from 'react'
import '../Style/ClothesCategory.css'
export default function ClothesCategory(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={props.jacket} alt="" />
            <p style={{fontSize:"18px", textAlign:"center",marginTop:"25px"}} classNameName='para-1'>{props.para1}</p>
            <p classNameName='para-2'>{props.para2}</p>
            <button style={{border:"none", padding:"15px",border:"1px solid black",}}>{props.button1}</button>
          </div>
          <div className="col">
            <img src={props.shirts} alt="" />
            <p style={{fontSize:"18px", textAlign:"center",marginTop:"25px"}} classNameName='para-1'>{props.para3}</p>
            <p classNameName='para-2'>{props.para4}</p>
            <button style={{border:"none", padding:"15px",border:"1px solid black",}}>{props.button2}</button>
          </div>
          <div className="col">
            <img src={props.paint} alt="" />
            <p style={{fontSize:"18px", textAlign:"center",marginTop:"25px"}} classNameName='para-1'>{props.para5}</p>
            <p classNameName='para-2'>{props.para6}</p>
            <button style={{border:"none", padding:"15px",border:"1px solid black",}}>{props.button3}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
