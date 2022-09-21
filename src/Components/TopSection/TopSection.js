import React from 'react'
import Card from '../Card/Card';
import './TopSection.css' ;
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import img1 from '../assests/femaleDesigner.png' ;
import img2 from '../assests/pic2.png' ;
import avatar1 from '../assests/avatarPic.png' ;
import avatar2 from '../assests/Rectangle138.png' ;
import avatar3 from '../assests/Rectangle139.png' ;
 
function TopSection() {
  return (
    <div className='topSection'>
        <div className="container-lg allContainers">
            <div className="row">
                <div className="col-lg-4 col-xl-6">
                    <span className='topSection__smallText'> Velit officia consequat </span>
                    <span className='topSection__heading h1 '>  Lorem ipsum dolor amet,consectetur adipiscing </span>
                </div>
                <div className="col-6 col-lg-2 topCard"> <Card name='Eleanor Pena' ratingNumber={4.8} price={2200} topImg={img1} avatar={avatar1} isBackground={true}/> </div>
                <div className="col-6 col-lg-2 topCard"> <Card name='Flyod Miles' ratingNumber={4.6} price={1800} topImg={img1} avatar={avatar2} isBackground={true}/></div>
                <div className="col-lg-2 topSection__cardHide"> <Card name='Arnette Black' ratingNumber={5} price={2600} topImg={img2} avatar={avatar3} isBackground={true}/> </div>
            </div>
            <div className="row py-5">
                <div className="col-6 col-lg-2 mx-auto topSectoin__col1"><Card name='Eleanor Pena' ratingNumber={4.1} price={1200} topImg={img1} avatar={avatar1} isBackground={true}/></div>
                <div className="col-lg-2 mx-auto topSection__cardHide"><Card name='Eleanor Pena' ratingNumber={5} price={2240} topImg={img2} avatar={avatar1} isBackground={true}/></div>
                <div className="col-lg-2 mx-auto topSection__cardHide"><Card name='Eleanor Pena' ratingNumber={4.3} price={2200} topImg={img1} avatar={avatar2} isBackground={true}/></div>
                <div className="col-lg-2 mx-auto topSection__cardHide"><Card name='Eleanor Pena' ratingNumber={4.7} price={2100} topImg={img2} avatar={avatar3} isBackground={true}/></div>
                <div className="col-6 col-lg-2 mx-auto topSection__col2"><Card name='Eleanor Pena' ratingNumber={5} price={7200} topImg={img1} avatar={avatar3} isBackground={true}/></div>
            </div>
            <div className="row">
                <div className="col-12 ">
                  <div className="topSection__footer">
                    <span className='topSection__bottomText'> See More </span>
                    <TrendingFlatIcon className='topSection__leftArrow'/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopSection