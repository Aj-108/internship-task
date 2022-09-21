import React, {  useState } from 'react'
import './Card.css' ;
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Card({name,ratingNumber,price,topImg,avatar,isBackground}) {

  const[temp,setTemp] = useState(ratingNumber) ;
  const[isClick,setIsClick] = useState(false) ;
  const [ratingArray,setRatingArray] = useState([]) ;


  const clickHandler = () => {
    setIsClick(!isClick) ;
  }

 
  return (
    // <div className={`card ${!isBackground && 'noColor'}`}>
        <div className={`card ${!isBackground && 'noColor'}`} >
                <img src={topImg} className="card-img-top topImg" alt="..."/>
                {isClick?<FavoriteIcon className='heartIcon yellow' onClick={() => clickHandler() }/>:<FavoriteBorderIcon className='heartIcon' onClick={() => clickHandler() }/>}
              <div className="card__body">
                    <div className="card__top">
                      <img src={avatar} alt="avatarPic" className='card__avatar'/>
                      <div className="card__nameArea">
                        <h5 className="card__title">{name}</h5>
                        <div className="card__caption"> View Profile </div>
                      </div>
                    </div>
                    <div className="card__rating">
                      <span className='ratingNumber'>{ratingNumber}</span>
                      {ratingNumber===5 ? 
                        <div className="ratingStars">
                        <StarIcon className='rating__star'/>
                        <StarIcon className='rating__star'/>
                        <StarIcon className='rating__star'/>
                        <StarIcon className='rating__star'/>
                        <StarIcon className='rating__star'/>
  
                        </div>
                      : 
                      <div className="ratingStars">
                      <StarIcon className='rating__star'/>
                      <StarIcon className='rating__star'/>
                      <StarIcon className='rating__star'/>
                      <StarIcon className='rating__star'/>
                      <StarHalfIcon className='rating__star'/>

                      </div>
                      }
                      
                    </div>
                    <p className="card__text">Amet minim maollit non deserunt ullamco est sit</p>
              </div>
                    <div className="card__lower">
                      <div className="card__lowerPrice">
                        <div className="card__priceArea"> <CurrencyRupeeIcon className='rupeeIcon'/> <span className="cardPrice">{price}</span></div>
                        <div className="price__caption"> Starting Price</div>
                      </div>
                      <a className="btn btn-dark card__button">Select</a>
                    </div>
                </div>
    // </div>
  )
}

export default Card