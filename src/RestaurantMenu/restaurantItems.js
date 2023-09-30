import React from 'react'
import { IMAGE_URL } from '../config/utils'

const RestaurantItems = ({ itemCards }) => {
    console.log(itemCards);
    return (
        <div className='menuInfo '>

            {itemCards?.map((elem) => {
                return (
                    <div className='flex'>
                        <div key={elem?.card?.info?.id} className='leftSection flex-1'>
                            <ul>
                                <li>{elem?.card?.info?.name}</li>
                                <li>{elem?.card?.info?.price}</li>
                            </ul>

                        </div>
                        <div className="right-section">
                            <img className=' w-52' src={`${IMAGE_URL}${elem?.card?.info?.imageId}`} />
                        </div>
                    </div>


                )
            })}


        </div>
    )
}

export default RestaurantItems