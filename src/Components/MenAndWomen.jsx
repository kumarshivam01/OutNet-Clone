import React from 'react'
import '../Style/MenAndWomen.css'
import { Link } from 'react-router-dom'
export default function MenAndWomen(props) {
    return (
        <>
            <div className='whole-img'>
                <div className='left-img'>
                    <Link to="/men/helmet-Lang-clothes"><img src={props.li} alt="" /></Link>
                    <p className='para-1'>{props.para1}</p>
                    <p className='para-2'>{props.para2}</p>
                    <div className='img-button'><button> <Link to="/men/helmet-Lang-clothes">{props.button1}</Link> </button></div>
                    
                </div>
                <div className='right-img'>
                    <Link to="/men/dolce-gabbana-clothes"><img src={props.ri} alt="" /></Link>
                    <p className='para-1'>{props.para3}</p>
                    <p className='para-2'>{props.para4}</p>
                    <div className='img-button'><button><Link to="/men/dolce-gabbana-clothes">{props.button2}</Link></button></div>
                </div>
            </div>
        </>
    )
}
