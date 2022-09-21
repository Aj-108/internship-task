import React from 'react'
import Footer from './Footer/Footer'
import FreelanceLogin from './FreelanceLogin/FreelanceLogin'
import LowerSection from './LowerSection/LowerSection'
import MiddleSection from './MiddleSection/MiddleSection'
import Navbar from '../modals/Navbar/Navbar'
import TopSection from './TopSection/TopSection'
import Tray from '../modals/Tray/Tray'

function Login() {
  return (
    <div>
        <Navbar />
        <Tray />
        <TopSection/>
        <MiddleSection />
        <FreelanceLogin />
        <LowerSection />
        <Footer/>
    </div>
  )
}

export default Login