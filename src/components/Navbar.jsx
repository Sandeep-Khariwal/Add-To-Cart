import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'

const Navbar = () => {

  const items = useSelector((state)=>state.cart)

  return (
    <div style={{display:"flex" , alignItems:"center" , justifyContent:"space-between" }} >

        <span>Redux-Store</span>

        <div>
            <Link className='navLink' to={"/"} >Home</Link>
            <Link className='navLink' to={"/cart"} >Cart</Link>
        </div>

        <span className='cartCount' >Cart Count : {items.length} </span>
      
    </div>
  )
}

export default Navbar
