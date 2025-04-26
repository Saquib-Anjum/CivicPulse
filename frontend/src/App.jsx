import React,{ useState} from 'react'
import {Toaster} from 'react-hot-toast'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import MyReports from './pages/MyReports'
import NotFound from './pages/NotFound';
import ReportIssue from './pages/ReportIssue'
import Footer from './components/Footer'
const App = () => {
  
    const [user, setUser] = useState(null);
  
    const handleLogin = (userData) => {
      setUser(userData);
    };
  
    const handleLogout = () => {
      setUser(null);
    };
  
  return (
    
      
      <div className='flex flex-col min-h-screen'>
   <Navbar/>
      <div className='flex-grow'>
           <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/report" element={<ReportIssue />} />
            <Route path="/my-reports" element={<MyReports />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="*" element={<NotFound />} />
            
           </Routes>
           <Toaster/>
      </div>
      <Footer />
  </div>
  )
}

export default App
