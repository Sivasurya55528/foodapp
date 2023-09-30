import React from 'react';
// import swiggy from '../myImages/swiggy.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className=' ' >
            <header className='flex py-5 justify-between items-center'>
                < div className='flex items-center ' >
                    <div className='logo px-5'><a href='#'><img src={require("../myImages/swiggy.png")} className='w-20' /></a></div>
                    <div px-5><Link to="/Location">Location</Link></div>
                </div >

                <div className='flex w-7/12  '>
                    <ul className='flex w-full justify-around '>
                        <li className=''><input type='' /></li>
                        <li className=''><Link to="/Offers">Offers</Link> </li>
                        <li className=''><Link to="/Help">Help</Link></li>
                        <li className=''><Link to="/Account">Account</Link></li>
                        <li className=''><Link to="/Cart">Cart</Link> </li>
                    </ul>
                </div>
            </header >

        </div >
    )
}

export default Header
