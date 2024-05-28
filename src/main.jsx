import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Subscribe = lazy(() => import('./pages/Subscribe'));
import Layout from "./pages/Layout"
import SuspensePage from "./pages/SuspensePage";
import ErrorPage from "./pages/ErrorPage";


export const router = createBrowserRouter(
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


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
