import React from 'react'
import './FreelanceLogin.css' ;
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import img1 from '../assests/Group220.png'

function FreelanceLogin() {
  return (
    <div className='container-lg loginFreelance'>
        <div className="row">
            <div className="col-lg-6">
                {/* <div className="imageArea"> */}
                    <img src={img1} className='freelanceImage m-auto .img-fluid'/> 
                {/* </div> */}
            </div>
            <div className="col-lg-5 mx-auto freelance__col">
                <div className="freelance__textArea">
                    <span className="freelance__topText">  Velit officia consequat </span>
                    <span className="freelance__heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    <div className="freelance__bottomTextArea">
                        <span className='freelance__bottomText mx-auto'>Start Your Journey as</span>
                        <button className='freelance__button mx-auto'>Freelancer <TrendingFlatIcon/> </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FreelanceLogin