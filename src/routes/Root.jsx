import { useState } from 'react'
import {Link, Outlet} from 'react-router-dom'
import {ShoppingCart} from 'lucide-react'



const Root= () => {
  const [bagCount,setBagCount] =useState(0);
  



  return (
  <div className ='pageCont'>
    <nav>
      <Link to= "/"> <div className = 'logo'>Fruitology</div></Link>
      <div className = 'links'>
      <Link to ="/">Home</Link>
      <Link to ="shop">Shop</Link>
      <Link to = "cart"><button className="shoppingCart">{bagCount}<ShoppingCart/></button></Link>
      </div>
    </nav>

    <Outlet/>

  </div>
  )
}

export default Root
