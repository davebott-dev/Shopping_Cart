import { useState } from 'react'
import {Link} from 'react-router-dom'


const Root= () => {


  return (
  <div>
    <h1>Main Page</h1>
    <Link to = "cart">Shopping Cart</Link>
  </div>
  )
}

export default Root
