import React from 'react';
// import swiggy from '../myImages/swiggy.png'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className=' flex py-5 justify-between items-center ' >

            < div className='flex items-center ' >
                <div className='logo px-5'><a href='#'><img src={require("../myImages/swiggy.png")} className='w-20' /></a></div>
                <div className=' hover:text-orange-500 font-semibold'><Link to="/Location">Location</Link></div>
            </div >

            <div className='flex w-7/12  '>
                <ul className='flex w-full justify-around '>
                    <li className=' hover:text-orange-500 font-semibold'><Link to="/SearchBox"> Search</Link></li>
                    <li className=' hover:text-orange-500 font-semibold'><Link to="/Offers">Offers<sup className=' text-xs text-orange-500 font-mono'>NEW</sup></Link> </li>
                    <li className=' hover:text-orange-500 font-semibold'><Link to="/Help">Help</Link></li>
                    <li className=' hover:text-orange-500 font-semibold'><Link to="/Account">Account</Link></li>
                    <li className=' hover:text-orange-500 font-semibold hover:placeholder:Empty cart'><Link to="/Cart">Cart</Link> </li>
                </ul>
            </div>


        </div >
    )
}

export default Header
