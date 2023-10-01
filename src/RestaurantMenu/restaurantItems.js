import React from 'react'
import { IMAGE_URL } from '../config/utils'
import { addItem } from '../config/cartslice/cartSlice'
import { useDispatch } from 'react-redux'
const RestaurantItems = ({ itemCards }) => {
    const dispatch = useDispatch()
    const handleClick = (item) => {
        dispatch(addItem(item));
    }
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
                            <button className='Add' onClick={() => handleClick(elem)}>Add</button>
                        </div>
                    </div>


                )
            })}


        </div>
    )
}

export default RestaurantItems