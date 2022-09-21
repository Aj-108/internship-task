import React from 'react'
import './LowerSection.css';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Card from '../../modals/Card/Card';
import img1 from '../../assests/mob1.png' ;
import avatar1 from '../../assests/avatarPic.png' ;
import avatar2 from '../../assests/Rectangle138.png' ;
import avatar3 from '../../assests/Rectangle139.png' ;


function LowerSection() {
  return (
    <div className='lowerSection'>
        <div className="container-lg">
            <div className="row lowerSection__row1 ">
                <div className="col mx-auto">
                    <span className='lowerSection__topText '> Velit officia consequat </span>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span className='lowerSection__heading'> Lorem ipsum dolor sit amet </span>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="lowerSection__sideTextArea">
                        <span className='lowerSection__sideText'> See More <TrendingFlatIcon/> </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-lg-2 mx-auto lowerSection__card lowerSection__topCard"><Card name='Eleanor Pena' ratingNumber={4.1} price={1200} topImg={img1} avatar={avatar1} isBackground={true}/></div>
                <div className="col-6 col-lg-2 mx-auto lowerSection__card lowerSection__midCard"><Card name='Eleanor Pena' ratingNumber={4.1} price={1200} topImg={img1} avatar={avatar3} isBackground={true}/></div>
                <div className="col-lg-2 mx-auto lowerSection__hideCard lowerSection__card"><Card name='Eleanor Pena' ratingNumber={4.1} price={1200} topImg={img1} avatar={avatar2} isBackground={true}/></div>
                <div className="col-lg-2 mx-auto lowerSection__hideCard lowerSection__card lowerSection__lowCard"><Card name='Eleanor Pena' ratingNumber={4.1} price={1200} topImg={img1} avatar={avatar3} isBackground={true}/></div>
            </div>
        </div>
    </div>
  )
}

export default LowerSection