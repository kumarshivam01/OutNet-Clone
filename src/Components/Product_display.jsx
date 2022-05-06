import React, { useState } from 'react'
import '../Style/Product_display.css'
import Abcd from './Abcd'
import { Link } from 'react-router-dom'
export default function Product_display(props) {
  console.log(props.Data)

  // console.log(props.Data.price)
  return (
    <>
      <div>
        <div className='clothes-heading'>
          <div className='clothes-details'>
            <h3 className='span10'>{props.heading10}</h3><br />
            <p>{props.para10}</p>
          </div>
          <div className='clothes-img'>
            <img src={props.img10} alt="" />
          </div>
          
        </div>
        <hr />
        <div className='product_sorting'>
          <p className='total_result'>{props.Data.length} Result</p>
          <select >
            <option value="">Sort By</option>
            <option value="">Newest</option>
            <option value="">Price Low-High</option>
            <option value="">Price High-Low</option>
            <option value="">Highest Discount</option>
          </select>
        </div>
        <div className='product_filter_display'>
          <div className='product_filter'>
            <hr />
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <p className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                    Category
                  </p>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                    <label className="form-check-label" for="flexRadioDefault1">
                      All
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Accessories
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Bags
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Clothing
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Shoes
                    </label>
                  </div>
                </div>
              </div>

            </div>

            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <p className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Category
                  </p>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">

                </div>
              </div>

            </div>
          </div>

          <div className='product_display'>
            {props.Data.map((value) => {
              return (
                <>
                  <div>
                    <div className='product_display_div' >
                      <Link to={`/products/${value._id}`}><img src={value.image[1]} alt="" /></Link>
                      <div>
                        <span className='product_heading'>{value.name}</span><br />
                        <span className='product_description'>{value.about}</span><br />
                        <span className='product_rate'>$ {value.price}</span><br />
                        <span className='product_discount'> <span style={{ textDecoration: "line-through", marginRight: "10px" }}>$ {value.crossprice}{" "} </span> {value.discount}</span><br />
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>




        </div>
      </div>
    </>
  )
}
