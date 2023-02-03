import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const items = useSelector((state)=>state.cart)


  const dispatch = useDispatch()
  const RemoveHandler=(id)=>{
    dispatch(remove(id)); 
  }

  return (
    <div>

      <h3>Cart</h3>
      <div className='cartWrapper' >
       {

        items.map(product=>(
          <div className='cartCard' key={product.id} >
          <img src={product.image} alt='img not supported'/>
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className='btn' onClick={()=>RemoveHandler(product.id)} >Remove</button>
       </div>
        ))

       }
      </div>
      
    </div>
  )
}

export default Cart
