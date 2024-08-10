import { useState } from 'react'
import {Link} from 'react-router-dom'


const Root= () => {


  return (
  <div className ='homepage'>
    <nav>
      <div>fruitology</div>
    </nav>
    <h1>Shop all types of tasty and delicious fruits</h1>
    <Link to = "cart">Shopping Cart</Link>
  </div>
  )
}

export default Root
