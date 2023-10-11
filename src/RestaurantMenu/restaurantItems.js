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
        <div className='menuInfo'>

            {itemCards?.map((elem) => {
                return (
                    <div className='flex'>
                        <div key={elem?.card?.info?.id} className='leftSection flex-1'>

                            <p className=' font-medium' >{elem?.card?.info?.name}</p>
                            <p><span>&#8377;</span> {elem?.card?.info?.price}</p>
                            <p>Best of all worlds with 1 Double Down- all chicken no bun Burger, Regular Popcorn & Pepsi 475ml [Serves 1]</p>
                            {/* <p>{elem?.card?.info?.}</p> */}


                        </div>
                        <div className="right-section relative mb-10">
                            <img className=' w-32 h-28 rounded-lg' src={`${IMAGE_URL}${elem?.card?.info?.imageId}`} />
                            <button className='Add bg-white w-24 p-2 text-green-500 rounded absolute z-10 bottom-0 right-4 font-bold text-xs' onClick={() => handleClick(elem)}>ADD</button>

                        </div>
                    </div>


                )
            })}


        </div>
    )
}

export default RestaurantItems