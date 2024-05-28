import { RouterProvider, createBrowserRouter } from "react-router-dom"
import React, { Suspense, lazy } from "react"
const Home = lazy( () => import('./pages/Home'));
const About = lazy( ()=> import('./pages/About'));
const Subscribe = lazy( () => import('./pages/Subscribe'));
import Layout from "./pages/Layout"
import SuspensePage from "./pages/SuspensePage";
import ErrorPage from "./pages/ErrorPage";






const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        index : true , 
        element: <SuspensePage page={<Home />} />
      } , 
      {
        path : 'about' , 
        element : <SuspensePage page={<About />} />
      } ,
      {
        path : 'subscribe' , 
        element :<SuspensePage page={<Subscribe />} />
      } , 

    ]
  } ,
  {
    path : '*' , 
    element : <SuspensePage page={<ErrorPage />} />
  }
])


function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
