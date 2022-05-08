
import "../Style/OrderCheck.css"
import Footer from "./Footer"
import { NavBar } from "./NavBar"
 export const Order=()=>{

  return(
     < div>
     <NavBar/>
      <div className="Order-Container"> 
          <div className="left">
              <p>Your Account</p>
              <p>Wish List</p>
              <p>My Oreder</p>
              <p>Address Book</p>
              <p>Marketing Preferences</p>
              <p>Account Details</p>
              <p>Saved Cards</p>
              <p>Store Credit</p>
          </div>
          <div className="right">
              <h1>You Have No Orders</h1>
              <p>Once you have checked out you can view </p>
              <p>and track your order here</p>
              <h5 >Shop What's New</h5>
          </div>
      </div>
      <Footer></Footer>
      </div>
  )


 }