import React from 'react'
import '../Style/Product_display.css'
export default function Product_display() {
  return (
    <>

      <div>

        <div className='product_sorting'>
          <p className='total_result'>783 Result</p>
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
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <p class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                    Category
                  </p>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                      <label class="form-check-label" for="flexRadioDefault1">
                        All
                      </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Accessories
                      </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label class="form-check-label" for="flexRadioDefault1">
                        Bags
                      </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label class="form-check-label" for="flexRadioDefault1">
                        Clothing
                      </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label class="form-check-label" for="flexRadioDefault1">
                        Shoes
                      </label>
                  </div>
                </div>
              </div>

            </div>

            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <p class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Category
                  </p>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                 
                </div>
              </div>

            </div>









          </div>
          <div className='product_display'>
            <div className='product_display_div'>
              <img src="https://www.theoutnet.com/variants/images/665933302653237/R/w358_q80.jpg" alt="" />
              <div>
                <span className='product_heading'>ZIMMERMANN</span><br />
                <span className='product_description'>Double-breasted shirred linen playsuit</span><br />
                <span className='product_rate'>$400</span><br />
                <span className='product_discount'>$88955% off</span><br />
              </div>
            </div>
            <div className='product_display_div'>
              <img src="https://www.theoutnet.com/variants/images/665933302653237/R/w358_q80.jpg" alt="" />
              <div>
                <span className='product_heading'>ZIMMERMANN</span><br />
                <span className='product_description'>Double-breasted shirred linen playsuit</span><br />
                <span className='product_rate'>$400</span><br />
                <span className='product_discount'>$88955% off</span><br />
              </div>
            </div>
            <div className='product_display_div'>
              <img src="https://www.theoutnet.com/variants/images/665933302653237/R/w358_q80.jpg" alt="" />
              <div>
                <span className='product_heading'>ZIMMERMANN</span><br />
                <span className='product_description'>Double-breasted shirred linen playsuit</span><br />
                <span className='product_rate'>$400</span><br />
                <span className='product_discount'>$88955% off</span><br />
              </div>
            </div>
            <div className='product_display_div'>
              <img src="https://www.theoutnet.com/variants/images/665933302653237/R/w358_q80.jpg" alt="" />
              <div>
                <span className='product_heading'>ZIMMERMANN</span><br />
                <span className='product_description'>Double-breasted shirred linen playsuit</span><br />
                <span className='product_rate'>$400</span><br />
                <span className='product_discount'>$88955% off</span><br />
              </div>
            </div>
            <div className='product_display_div'>
              <img src="https://www.theoutnet.com/variants/images/665933302653237/R/w358_q80.jpg" alt="" />
              <div>
                <span className='product_heading'>ZIMMERMANN</span><br />
                <span className='product_description'>Double-breasted shirred linen playsuit</span><br />
                <span className='product_rate'>$400</span><br />
                <span className='product_discount'>$88955% off</span><br />
              </div>
            </div>
            <div className='product_display_div'>
              <img src="https://www.theoutnet.com/variants/images/665933302653237/R/w358_q80.jpg" alt="" />
              <div>
                <span className='product_heading'>ZIMMERMANN</span><br />
                <span className='product_description'>Double-breasted shirred linen playsuit</span><br />
                <span className='product_rate'>$400</span><br />
                <span className='product_discount'>$88955% off</span><br />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
