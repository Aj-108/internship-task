import React from 'react'
import './BodySection.css'
import Card from '../../modals/Card/Card'
import BodyRow from '../BodyRow/BodyRow'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function BodySection() {
  return (
    <div className='bodySection'>
        <BodyRow />
        <BodyRow />
        <BodyRow />
        <BodyRow />
        <BodyRow />
        <BodyRow />
        <BodyRow />
        <div className="body__numberTray">
            <KeyboardArrowLeftIcon className='leftArrow'/> <span className='number'>1</span> <span className='number'>2</span> <span className='number'>3</span> <span className='number'>4</span> <span className='number'>5</span>  <KeyboardArrowRightIcon className='rightArrow'/>
        </div>
    </div>
  )
}

export default BodySection 