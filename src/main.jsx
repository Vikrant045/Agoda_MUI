import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Home from './Components/Home.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from 'react-router-dom'
import AdminLayout from './Components/Layout/AdminLayout.jsx'
import DashboardPage from './Pages/admin/DashboardPage.jsx'
import Profile from './Pages/admin/Profile.jsx'
import MainLayout from './Components/Layout/MainLayout.jsx'
import Contact from './Pages/admin/Contact.jsx'
import ALL_Users from './Pages/admin/ALL_Users.jsx'
import Settings from './Pages/admin/Settings.jsx'
import HomeComp from './Components/HomeComp.jsx'
import SignIn from './Components/SignIn.jsx'
import SignUp from './Components/SignUp.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AdminLayout />}>
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/dashboard/profile' element={<Profile />} />
        <Route path='/dashboard/setting' element={<Settings/>} />
        <Route path='/dashboard/allusers' element={<ALL_Users />} />
        <Route path='/dashboard/contact' element={<Contact />} />

      </Route>  

      <Route element={<MainLayout />}>
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<HomeComp/>} />
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='/signUp' element={<SignUp/>} />


      </Route>  

      {/* <Route path='/' element={<App />}>
        <Route path='' element={<Home />} />
        
      </Route> */}
    </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
