import { useState } from 'react'
import './App.css'
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Navbar from './component/Navbar/Navbar'
import Testimonials from './pages/Testimonials'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ChangePassword from './pages/ChangePassword'
import OTPPassword from './pages/OTPPassword'
import Admin from './Dashboard/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgotpassword" element={<ForgotPassword />}/>
        <Route path="/changepassword" element={<ChangePassword />}/>
        <Route path="/otppassword" element={<OTPPassword />}/>
        <Route path="/admin" element={<Admin />}/>

      </Routes>
    </>
  )
}

export default App
