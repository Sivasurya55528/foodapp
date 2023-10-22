import React, { useState } from 'react';
// import { FaBeer } from '@fortawesome/free-solid-svg-icons';
import { Restaurant_url } from '../../config/utils';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchBox = () => {
    const [input, setInput] = useState("")
    const GetUrl = async () => {
        // const 
    }

    const handleChange = () => {
        setInput();
    }
    return (
        <div className=' mx-60 my-10'>
            <div className=''>
                <input onChange={(e) => handleChange(e.target.value)} placeholder='Search for restaurants and food' className=' py-3 px-4 w-full border border-gray-400 rounded font-medium focus:outline-none' />
                <faSearch />

            </div>
            <div className=' mx-5'>
                <div className=' my-7'>
                    <h1 className=' font-semibold'>Recent Searches</h1>
                    <p className=' my-5'>Domino's pizza</p>
                    <hr></hr>
                    <p className=' my-5'>Shree Sai Pavan</p>
                    <hr></hr>
                </div>
                <div className=' my-7'>
                    <h1 className=' text-lg font-bold'>Popular Cuisines </h1>
                </div>
            </div>
        </div>
    )
}

export default SearchBox