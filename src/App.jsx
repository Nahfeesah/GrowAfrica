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
// import Admin from './pages/AdminDashboard/Admin'
// import Audit from './pages/AdminDashboard/AuditLog'
// import Investment from './pages/AdminDashboard/Investment'
// import Projects from './pages/AdminDashboard/Projects'
// import Reports from './pages/AdminDashboard/Reports'
// import Security from './pages/AdminDashboard/Security'
// import Settings from './pages/AdminDashboard/Settings'
// import UserMgt from './pages/AdminDashboard/UserMgt'
import Wallet from './pages/Dashboard/Wallet/Wallet'

import AddFunds from './pages/Dashboard/Wallet/AddFunds'

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
        {/* <Route path="/admin" element={<Admin />}/>
        <Route path="/audit" element={<AuditLog/>}/>
        <Route path="/investment" element={<Investment />}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/reports" element={<Reports />}/>
        <Route path="/security" element={<Security/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/userMgt" element={<UserMgt/>}/> */}
        <Route path="/wallet" element={<Wallet/>}/>
        
        <Route path="/addfunds" element={<AddFunds/>}/>



      </Routes>
    </>
  )
}

export default App
