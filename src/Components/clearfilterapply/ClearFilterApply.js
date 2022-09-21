import React from 'react'
import Navbar from '../modals/Navbar/Navbar'
import BodySection from './BodySection/BodySection'
import Tray from '../modals/Tray/Tray'
import Footer from '../modals/Footer/Footer'
import Banner from './Banner/Banner'
import './ClearFilterApply.css'

function ClearFilterApply() {
  return (
    <div>
        <Navbar />
        <Tray />
        <Banner />
        <BodySection/>
        <Footer />
    </div>
  )
}

export default ClearFilterApply 