import {BsPerson} from 'react-icons/bs'
import {HiOutlineSearch} from 'react-icons/hi'
import {FiHeart} from 'react-icons/fi'
import { useState } from 'react'
// import {Women} from "./WomenNavbar"
// import { Men} from "./MenNavbar"
import { Link } from 'react-router-dom'
import { MenNavbar } from './MenNavbar'
import { WomenNavbar } from './WomenNavbar'
import "../Style/Nav.css"
export const NavBar=()=>{
const [gender,setGender]=useState(false)
const [women,setWomen] = useState("Grey")
const [men,setMen] = useState("Black")
  
    return(
        <div>
            <div className="navbar-top">
            <div className="nav-sec1 box">
                <div className="nav-innersec">
                 <BsPerson className="nav-sign-icon"></BsPerson>
                 <p className="nav-font-size">Sign In</p> 
                </div>
                <div className="nav-innersec">
                 <img className="navbar-india" src="https://tse1.mm.bing.net/th?id=OIP.--08d7AwyCcZXcRwlIflRQHaFS&pid=Api&P=0&w=230&h=164" alt="india"></img>
                 <p className="nav-font-size">India</p>  
                </div>
                
            </div>
         <div className="nav-sec2">
         <p>Track Your Order</p>
         <p className="nav-color">|</p>
         <p>Create A return</p>
         <p className="nav-color">|</p>
         <p>Customer Care</p>
         <p className="nav-color">|</p>
         <p>Delivery</p>
         <p className="nav-color">|</p>
         <p>Returns</p>
            </div>
        </div>
        <div className="navbar-bottom">
            <div className="sec1">
                <Link to="/women" className="women" style={{color:women}} onClick={()=>{
                    setGender(false)
                    setWomen("Black")
                    setMen("Grey")
                }}> Women</Link>
                <Link to="/men" className="men" style={{color:men}} onClick={()=>{
                    setGender(true) 
                    setMen("Black")
                    setWomen("Grey")
                   
                    }}> Men</Link>
            </div>
         <p className="title">THE OUTNET</p>
         <div className="sec2">
             <span className="search"><HiOutlineSearch className="search-icon"></HiOutlineSearch>Search</span>
             <span><FiHeart></FiHeart></span>
             <span><img className="basket" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyMy43Ij48cGF0aCBkPSJNMjYuMyA2LjdsMS43IDE3SDBsMS43LTE3aDcuOEMxMSAxLjkgMTIuNCAwIDE0IDBzMyAxLjkgNC41IDYuN2g3Ljh6TTE0IDEuN2MtLjMgMC0xLjIuNC0yLjcgNWg1LjVjLTEuNi00LjUtMi41LTUtMi44LTV6TTIuNCAyMS42aDIzLjJMMjQuMyA4LjhoLTUuMmMuMyAxIC42IDIuMS45IDMuM2wtMS43LjRjLS4zLTEuMy0uNy0yLjUtMS0zLjdoLTYuOGMtLjQgMS4yLS43IDIuNS0xIDMuN2wtMS43LS40Yy4zLTEuMi42LTIuMy45LTMuM0gzLjZMMi40IDIxLjZ6Ii8+PC9zdmc+" alt="" /></span>
         </div>
        </div>
       {gender?<MenNavbar></MenNavbar>:<WomenNavbar></WomenNavbar>}
        </div>
 
  
    )
  }