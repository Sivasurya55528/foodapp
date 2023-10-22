import React, { useEffect, useState } from 'react'
import { IMAGE_URL } from '../config/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStairs, faStar } from '@fortawesome/free-solid-svg-icons'
const RestInfo = ({ info }) => {
    const { name, city, cloudinaryImageId, areaName, cuisines, avgRating } = info
    return (

        <div className='flex mx-60 border-dashed border-b-2  pb-5'>
            <div className='resInfo flex-1'>
                <ul className='restaurantLocality'>
                    <li className=' font-bold text-xl'>{name}</li>
                    <li className=' font-light'>{cuisines.join(',')}</li>
                    <li className=' font-light'>{areaName}</li>
                    {/* <li>{city}</li> */}
                    <li className=' pt-5 font-light'>3 kms | ₹45 Delivery fee will apply</li>
                </ul>
            </div>
            <div className='restaurnatImageSection border-2 border-x border-y p-1 h-2/6 rounded-lg w-17'>
                <div className=' flex items-center justify-center py-1 '>
                    {/* <img className=' w-52 h-20' src={`${IMAGE_URL}${cloudinaryImageId}`} /> */}
                    <FontAwesomeIcon icon={faStar} className=' text-green-500 w-4' />
                    <span className=' text-green-500 font-bold text-sm'>{avgRating}</span>
                </div>
                <hr></hr>
                <p className=' text-xs font-thin py-2'>10k+ratings</p>

            </div>

        </div>
    )
}

export default RestInfo