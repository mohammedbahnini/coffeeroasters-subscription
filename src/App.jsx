import React, {  lazy } from "react"
import { router } from "./main"
import { RouterProvider } from "react-router-dom"



function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
