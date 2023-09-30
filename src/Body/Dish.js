import React from 'react';
//import { Briyani_2 } from '../myImages/Biryani_2.png';

const Dish = () => {
    return (
        <div className=' flex flex-col mb-10'>
            <div className='flex'>
                <h1 className=' text-2xl font-bold'>what's on your mind</h1>
            </div>

            <div className=' flex justify-evenly'>
                <a href='#'><img src={require('../myImages/Biryani_2.png')} className=' w-36' /></a>
                <a href='#'><img src={require('../myImages/Chinese.png')} className=' w-36' /></a>
                <a href='#'><img src={require('../myImages/Dosa.png')} className=' w-36' /></a>
                <a href='#'><img src={require('../myImages/Parotta.png')} className=' w-36' /></a>
                <a href='#'><img src={require('../myImages/Pizza.png')} className=' w-36' /></a>
            </div>
        </div>
    )
}

export default Dish;
