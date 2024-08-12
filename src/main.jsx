import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './routes/Root.jsx'
import Cart from './routes/Cart.jsx'
import ErrorPage from './errorpage.jsx'
import Index from './routes/Index.jsx'
import Shop from './routes/Shop.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index:true,
        element: <Index/>,
      },
      {
        path: "shop",
        element: <Shop/>,
        errorElement: <ErrorPage/>
      }
    ]
  },
  {
    path:"cart",
    element: <Cart/>,
    errorElement: <ErrorPage/>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
