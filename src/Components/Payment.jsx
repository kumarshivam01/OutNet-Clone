import "../Style/Aboutus.css"
function Payment(){
    return  <div>
         <div id="heading123">Choose Payment Method</div>
         <div id="abcdefg">
      <div id="Whichcart">
          <div class="credit"><h3>Credit/Debit Cards</h3></div>
          <div id="byebye" class="UPI"><h3>UPI</h3></div>
          <div id="byebye" class="googlepay"><h3>Google Pay</h3></div>
          <div id="byebye" class="netbanking"><h3>Net Banking</h3></div>
          <div id="byebye" class="cashon"><h3>Cash ON delivery</h3></div>
          <div id="byebye" class="giftcard"><h3>Gift card</h3></div>
      </div>
      <div id="cartdetail">
      <div><h3>Credit/Debit Cards</h3></div>
           <div >
               <input type="number" placeholder="Card Number" id="inputsize" />
           </div>
           <div id="expire">Expiry</div>
           <div id="lastdate">
               <div id="month">
                   <input type="number" placeholder="MM" id="monthdalna" />
               </div>
               <div id="slash">/</div>
               <div>
               <input type="number" placeholder="YEAR" id="monthdalna" />
               
                  
               </div>
               <div id="imgabc">
               <input type="number" placeholder="CVV" id="monthdalna" />
                 
               </div>
               <div id="imgabc">
               <img src="https://www.nykaafashion.com/assets/desktop/images/checkout/bank-card-back-side.png" alt="" />
               </div>
              
               <div id="text23334">Last 3 Digit At the Back of the Card</div>
           </div>
           <div id="savethis">
                 <input type="checkbox" id="checkbox" />
           
           <div>Save This Card for Future</div>
       </div>
       <div id="paynow" onclick="alertpop()"><h3>PAY NOW</h3></div>
      </div>
       
     </div>
    </div>
    function alertpop(){
         alert("Payment Successfull")
     }
    }

    

export {Payment}