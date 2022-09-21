import React from 'react'
import Card from '../../modals/Card/Card'
import img1 from '../../assests/image1.png'
import img2 from '../../assests/image2.png'
import img3 from '../../assests/image3.png'
import img4 from '../../assests/image4.png'
import img5 from '../../assests/image5.png'
import topImg1 from '../../assests/pic2.png'
import topImg2 from '../../assests/femaleDesigner.png'


function BodyRow() {
  return (
    <div className='bodyRow'>
        <div className="container-lg my-5">
            <div className="row">
                <div className="col-lg-2 mx-auto"> <Card name='Leslie Alexander' ratingNumber={4.7} price={2100} topImg={topImg1} avatar={img1} isBackground={false} isPrice={false}/>  </div>
                <div className="col-lg-2 mx-auto"> <Card name='Leslie Alexander' ratingNumber={4.7} price={2100} topImg={topImg2} avatar={img2} isBackground={false} isPrice={false}/></div>
                <div className="col-lg-2 mx-auto"> <Card name='Leslie Alexander' ratingNumber={4.7} price={2100} topImg={topImg1} avatar={img3} isBackground={false} isPrice={false}/></div>
                <div className="col-lg-2 mx-auto"> <Card name='Leslie Alexander' ratingNumber={4.7} price={2100} topImg={topImg2} avatar={img4} isBackground={false} isPrice={false}/></div>
                <div className="col-lg-2 mx-auto"> <Card name='Leslie Alexander' ratingNumber={4.7} price={2100} topImg={topImg1} avatar={img5} isBackground={false} isPrice={false}/></div>
            </div>
        </div>
    </div>
  )
}

export default BodyRow