import React from 'react'
import {IMG_CDN_URL} from '../constants.js'
const cuisins = ["Burgers", "Americans", "Dal Makhni"];

const RestrauntCard = ({name, cuisines, cloudinaryImageId, avgRating}) => {
   
  return (
    <div className='card'>
      <img src={ IMG_CDN_URL + cloudinaryImageId
} alt="image" />
      <h3>{name}</h3>
      <h6>{cuisines.join(", \n")}</h6>
      <h5>{avgRating}⭐stars</h5> 
    </div>
  )
}

export default RestrauntCard;
