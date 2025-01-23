import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import LoginForm from './components/login/LoginForm'
import LoginPage from './components/login/LoginPage'
import { Routes, Router, Route, BrowserRouter } from 'react-router-dom'; 
import RegisterForm from './components/register/RegisterForm'
import HomePage from './pages/HomePage'
import AboutUs from './pages/about/AboutUs'

function App() {


  return (
    // <div>
    //   <BrowserRouter>
    //   <Routes>
    //     <Route path="/login" element={<LoginPage />} />
    //     {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    //     {/* More routes can go here */}
    //   </Routes>
    //   </BrowserRouter>
    // </div>
    // <LoginForm></LoginForm>
    // <RegisterForm></RegisterForm>
    // <HomePage></HomePage>
    <>
<BrowserRouter>
{/* <Router> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    {/* </Router> */}
    </BrowserRouter>
    </>

    
  )
}

export default App
