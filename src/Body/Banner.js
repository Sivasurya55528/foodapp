import React from 'react';

export const Banner = () => {
    return (
        <div className='flex flex-wrap flex-col mb-6'>
            <h1 className=' text-2xl font-bold'>Best offers for you</h1>
            <div className='flex m-5'>
                <a href='#'> <img src={require('../myImages/banner4.png')} className=' w-11/12' /></a>
                <a href='#'> <img src={require('../myImages/banner5.png')} className=' w-11/12' /></a>
            </div>

        </div>
    )
}
