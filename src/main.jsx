import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UseReducer from './pages/UseReducer.jsx'
import UseState from './pages/UseState.jsx'
import UseEffect from './pages/UseEffect.jsx'
import UseRef from './pages/UseRef.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <UseState/>
  },
  {
    path: "/use-reducer",
    element: <UseReducer/>
  },
  {
    path: "/use-effect",
    element: <UseEffect/>
  },
  {
    path: "/use-ref",
    element: <UseRef/>
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
