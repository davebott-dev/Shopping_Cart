import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './routes/Root.jsx'
import Cart from './routes/Cart.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path:"cart",
    element: <Cart/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
