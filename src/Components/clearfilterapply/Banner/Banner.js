import React from 'react'
import './Banner.css'
import FilterListIcon from '@mui/icons-material/FilterList';
import CategorSearch from '../CategorySearch/CategorySearch'

function Banner() {
  return (
    <div className='banner'>
        <h1 className='bannerHeading'>Searching for "Web Designer"</h1>
        <span className="bannerText"> <FilterListIcon/> Filter By</span>
        
        <form action="" className="category__form">
        <div className="category__container1">
          <div className="category__container">
            <label htmlFor="category" className="category__label">
              Category
            </label>
            <select name="category" id="category" className='category__drop'>
              <option value="volvo"> Select Category </option>
              <option value="saab">xyz</option>
              <option value="opel">abc</option>
            </select>
          </div>
          <div className="category__container">
            <label htmlFor="sub-category" className="category__label">
              Sub-Category
            </label>
            <select name="sub-category" id="sub-category" className='category__drop'>
              <option value="volvo"> Select Sub Category </option>
              <option value="saab">xyz</option>
              <option value="opel">abc</option>
            </select>
          </div>
          <div className="category__container">
            <label htmlFor="rating" className="category__label">
              Rating
            </label>
            <select name="rating" id="rating" className='category__drop'>
              <option value="volvo"> Select Rating </option>
              <option value="saab">xyz</option>
              <option value="opel">abc</option>
            </select>
          </div>
          <div className="category__container">
            <label htmlFor="pricing" className="category__label">
              Pricing
            </label>
            <select name="pricing" id="pricing" className='category__drop'>
              <option value="volvo"> Select Pricing </option>
              <option value="saab">xyz</option>
              <option value="opel">abc</option>
            </select>
          </div>
          <div className="category__container">
            <label htmlFor="delivery" className="category__label">
              Delivery Time
            </label>
            <select name="delivery" id="delivery" className='category__drop'>
              <option value="volvo"> Delivery Time </option>
              <option value="saab">xyz</option>
              <option value="opel">abc</option>
            </select>
          </div>
        </div>
          <div className="category__container2">
          <div className="category__container">
            <label htmlFor="Country" className="category__label">
              Country
            </label>
            <select name="Country" id="Country" className='category__drop'>
              <option value="volvo"> Select Country </option>
              <option value="saab">xyz</option>
              <option value="opel">abc</option>
            </select>
          </div>

        <span className="category__text"> Clear Filter </span>
          <button className="btn btn-dark category__button"> Apply </button>
        </div>
      </form>

    </div>
  )
}

export default Banner 