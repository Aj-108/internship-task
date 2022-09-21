import React from 'react'
import './MiddleSection.css' ;
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Card from '../Card/Card';
import img1 from '../assests/femaleDesigner.png' ;
import img2 from '../assests/pic2.png' ;
import avatar1 from '../assests/avatarPic.png' ;
import avatar2 from '../assests/Rectangle138.png' ;
import avatar3 from '../assests/Rectangle139.png' ;

function MiddleSection() {
  return (
    <div className='middleSection'>
        <div className="container-lg allContainers">
            <div className="row middleSection__topRow">
                <div className="col-12"> <span className='middleSection__topLine'> Velit officia consequat </span> </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="middleSection__headingArea">
                        <span className='middleSection__heading'>Lorem ipsum dolor sit amet</span>
                        <div className="middleSection__sideArea"> 
                            <span className='middleSection__sideText'>See More</span>
                            <TrendingFlatIcon className='middleSection__rightArrow'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row middleSection__secondRow">
                <div className="col-6 col-lg-2 middleSection__topCard mx-auto"> <Card name='Eleanor Pena' ratingNumber={4.7} price={2100} topImg={img2} avatar={avatar1} isBackground={false}/> </div>
                <div className="col-lg-2 mx-auto middleSection__hideCard"><Card name='Eleanor Pena' ratingNumber={4.7} price={2100} topImg={img2} avatar={avatar3} isBackground={false}/></div>
                <div className="col-lg-2 middleSection__hideCard mx-auto"><Card name='Eleanor Pena' ratingNumber={4.7} price={2100} topImg={img1} avatar={avatar2} isBackground={false}/></div>
                <div className="col-lg-2 middleSection__hideCard mx-auto"><Card name='Eleanor Pena' ratingNumber={4.7} price={2100} topImg={img2} avatar={avatar3} isBackground={false}/></div>
                <div className="col-6 col-lg-2 middleSection__bottomCard mx-auto"><Card name='Eleanor Pena' ratingNumber={4.7} price={2100} topImg={img1} avatar={avatar1} isBackground={false}/></div>
            </div>
        </div>
    </div>
  )
}

export default MiddleSection