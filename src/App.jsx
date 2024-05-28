import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import React, { Suspense, lazy } from "react"
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Subscribe = lazy(() => import('./pages/Subscribe'));
import Layout from "./pages/Layout"
import SuspensePage from "./pages/SuspensePage";
import ErrorPage from "./pages/ErrorPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<SuspensePage page={<Home />} />} />
        <Route path="about" element={<SuspensePage page={<About />} />} />
        <Route path="subscribe" element={<SuspensePage page={<Subscribe />} />} />
      </Route>

      <Route path="*" element={<SuspensePage page={<ErrorPage />} />} />
    </Route>
  )
)


function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
