import { useState } from 'react'
import {Link, Outlet} from 'react-router-dom'
import {ShoppingCart} from 'lucide-react'



const Root= () => {
  const [bagCount,setBagCount] =useState(0);
  
  const handleBagCount= () => {
    setBagCount((prev)=>prev+1);
  }


  return (
  <div className ='pageCont'>
    <nav>
      <Link to= "/"> <div className = 'logo'>Fruitology</div></Link>
      <div className = 'links'>
      <Link to ="/" className="homeLink">Home</Link>
      <Link to ="shop" className="shopLink">Shop</Link>
      <button className="shoppingCart">{bagCount}<ShoppingCart/></button>
      </div>
    </nav>

    <Outlet context ={handleBagCount}/>

  </div>
  )
}

export default Root
