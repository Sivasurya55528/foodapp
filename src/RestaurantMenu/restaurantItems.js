import React, { useState } from 'react'
import { IMAGE_URL } from '../config/utils'
import { addItem } from '../config/cartslice/cartSlice'
import { useDispatch } from 'react-redux';
//import { useState } from 'react';
// import {
//     Accordion,
//     AccordionHeader,
//     AccordionBody,
// } from "@material-tailwind/react";



const RestaurantItems = ({ itemCards }) => {
    //const [open, setOpen] = React.useState(1);
    // const handleOpen = (value) => setOpen(open === value ? 0 : value);


    const dispatch = useDispatch()
    const handleClick = (item) => {
        dispatch(addItem(item));
    }
    return (
        <div className='menuInfo'>

            {itemCards?.map((elem) => {
                return (
                    <div className='flex mt-5 border-b pb-16 '>
                        <div key={elem?.card?.info?.id} className='leftSection flex-1'>

                            <p className=' font-medium' >{elem?.card?.info?.name}</p>
                            <p className=' font-mono'><span>&#8377;</span> {elem?.card?.info?.price / 100}</p>
                            <p>{elem?.card?.info?.description}</p>



                        </div>
                        <div className="right-section relative">
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