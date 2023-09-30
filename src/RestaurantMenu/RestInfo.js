import React, { useEffect, useState } from 'react'
import { IMAGE_URL } from '../config/utils'
const RestInfo = ({ info }) => {
    const { name, city, cloudinaryImageId, areaName, cuisines, avgRating } = info
    return (

        <div className=' h-56 bg-fuchsia-500 flex'>
            <div className='resInfo flex-1'>
                <ul className='restaurantLocality'>
                    <li>{name}</li>
                    <li>{areaName}</li>
                    <li>{city}</li>
                    <li>{cuisines.join(',')}</li>
                </ul>
            </div>
            <div className='restaurnatImageSection'>
                <img className=' w-52 h-20' src={`${IMAGE_URL}${cloudinaryImageId}`} />

                <span>{avgRating}</span>

            </div>
        </div>
    )
}

export default RestInfo