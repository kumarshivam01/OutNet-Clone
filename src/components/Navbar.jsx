import {BsPerson} from 'react-icons/bs'
import {HiOutlineSearch} from 'react-icons/hi'
import {FiHeart} from 'react-icons/fi'
import "./Navbar.css"
export const Navbar=()=>{
    const nav=[
        {title:"Superbrands"},
        {title:"Just In"},
        {title:"Bestsellers"},
        {title:"Designers"},
        {title:"Clothing"},
        {title:"Shoes"},
        {title:"Bags"},
        {title:"Accessories"},
        {title:"70% Off"},
        {title:"Iris & Ink"},
        {title:"Editorial"},
    ]
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
                <p className="women">Women</p>
                <p className="men">Men</p>
            </div>
         <p className="title">THE OUTNET</p>
         <div className="sec2">
             <span className="search"><HiOutlineSearch></HiOutlineSearch>Search</span>
             <span><FiHeart></FiHeart></span>
             <span><img className="basket" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyMy43Ij48cGF0aCBkPSJNMjYuMyA2LjdsMS43IDE3SDBsMS43LTE3aDcuOEMxMSAxLjkgMTIuNCAwIDE0IDBzMyAxLjkgNC41IDYuN2g3Ljh6TTE0IDEuN2MtLjMgMC0xLjIuNC0yLjcgNWg1LjVjLTEuNi00LjUtMi41LTUtMi44LTV6TTIuNCAyMS42aDIzLjJMMjQuMyA4LjhoLTUuMmMuMyAxIC42IDIuMS45IDMuM2wtMS43LjRjLS4zLTEuMy0uNy0yLjUtMS0zLjdoLTYuOGMtLjQgMS4yLS43IDIuNS0xIDMuN2wtMS43LS40Yy4zLTEuMi42LTIuMy45LTMuM0gzLjZMMi40IDIxLjZ6Ii8+PC9zdmc+" alt="" /></span>
         </div>
        </div>
        <div className="category">
            {nav.map((e)=>{
                return(
                    <p className="cat-hover">{e.title}</p>
                )
            })}
        </div>
        </div>
    )
  }