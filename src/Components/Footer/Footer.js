import React from 'react'
import './Footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='footer'>
        <div className="container-lg">
            <div className="row footer__row">
                <div className="col-12 col-lg-3 footer__left mx-auto">
                    <button className="footer__button">Logo</button>
                    <span className='footer__address'> 1901 Thornridge Cir. Shiloh Hawaii 81603</span>
                </div>
                <div className="col-6 col-lg-2 mx-auto">
                    <ul className="footer__list">
                        <li className="footer__listItem footer__listHeading">Company</li>
                        <li className="footer__listItem">About Us</li>
                        <li className="footer__listItem">Career</li>
                        <li className="footer__listItem">Team</li>
                        <li className="footer__listItem">Contact</li>
                    </ul>
                </div>
                <div className="col-6 col-lg-2 mx-auto">
                <ul className="footer__list">
                        <li className="footer__listItem footer__listHeading">Product</li>
                        <li className="footer__listItem">Service</li>
                        <li className="footer__listItem">Freelance</li>
                        <li className="footer__listItem">Features</li>
                        <li className="footer__listItem">Development</li>
                    </ul>
                </div>
                <div className="col-6 col-lg-2 mx-auto">
                <ul className="footer__list">
                        <li className="footer__listItem footer__listHeading">Links</li>
                        <li className="footer__listItem">Privacy Policy</li>
                        <li className="footer__listItem">Terms & Conditions</li>
                        <li className="footer__listItem">FAQ</li>
                    </ul>
                </div>
                <div className="col-6 col-lg-3 mx-auto footer__social">
                    <span className='footer__socialHeading'>Follow Us</span>
                    <div className="footer__socialIcons">
                        <TwitterIcon className="twitter"/>
                        <FacebookIcon className="facebook"/>
                        <InstagramIcon className="instagram"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer