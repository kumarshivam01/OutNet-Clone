import React from 'react'
import '../Style/MenAndWomen.css'
export default function MenAndWomen(props) {
    return (
        <>
            <div className='whole-img'>
                <div className='left-img'>
                    <img src={props.li} alt="" />
                    <p className='para-1'>{props.para1}</p>
                    <p className='para-2'>{props.para2}</p>
                    <div className='img-button'><button>{props.button1}</button></div>
                    
                </div>
                <div className='right-img'>
                    <img src={props.ri} alt="" />
                    <p className='para-1'>{props.para3}</p>
                    <p className='para-2'>{props.para4}</p>
                    <div className='img-button'><button>{props.button2}</button></div>
                </div>
            </div>
        </>
    )
}
