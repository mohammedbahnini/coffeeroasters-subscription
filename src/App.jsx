import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./pages/Layout"
import Subscribe from "./pages/Subscribe"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        index : true , 
        element: <Home />
      } , 
      {
        path : 'about' , 
        element : <About />
      } ,
      {
        path : 'subscribe' , 
        element : <Subscribe />
      }
    ]
  } 
])


function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
