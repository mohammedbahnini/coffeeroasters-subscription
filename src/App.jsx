import { RouterProvider, createBrowserRouter } from "react-router-dom"
import React, { Suspense, lazy } from "react"
const Home = lazy( () => import('./pages/Home'));
const About = lazy( ()=> import('./pages/About'));
const Subscribe = lazy( () => import('./pages/Subscribe'));
import Layout from "./pages/Layout"
import PageLoader from "./components/Common/PageLoader";






const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        index : true , 
        element: <React.Suspense fallback={<PageLoader />}><Home /></React.Suspense> 
      } , 
      {
        path : 'about' , 
        element : <Suspense fallback={<PageLoader />}><About /></Suspense>
      } ,
      {
        path : 'subscribe' , 
        element :<Suspense fallback={<PageLoader />}> <Subscribe /> </Suspense>
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
