import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex bg-gray-100 p-5 justify-around '>
                <div className='flex w-5/12'>
                    <h1 className=' font-semibold text-3xl'>For better experience,download the Swiggy app now</h1>
                </div>
                <div className='flex w-5/12 justify-evenly'>
                    <a href='#'> <img src={require('../myImages/playstore.png')} className=' w-52 h-16' /></a>
                    <a href='#'> <img src={require('../myImages/iappstore.png')} className=' w-48 h-16' /></a>
                </div>
            </div>

            <div className='flex bg-black text-slate-400 pt-10 pb-24 px-52 justify-evenly'>
                <div className=''>
                    <h1 className=' text-2xl text-white  font-bold'>Swiggy</h1>
                    <p>© 2023 Bundl Technologies Pvt. Ltd</p>
                </div>
                <div className=' flex flex-col justify-around h-56'>
                    <h2 className=' font-bold text-xl text-white'>Company</h2>
                    <p><a href='#'>About</a></p>
                    <p><a href='#'>Careers</a></p>
                    <p><a href='#'>Team</a></p>
                    <p><a href='#'>Swiggy One</a></p>
                    <p><a href='#'>Swiggy Instamart</a></p>
                    <p><a href='#'>Swiggy Genie</a></p>
                </div>

                <div>
                    <div className=' flex flex-col justify-around h-36 mb-10'>
                        <h2 className=' font-bold text-xl text-white'>Contact us</h2>
                        <p><a href='#'>Help & Support</a></p>
                        <p><a href='#'>Partner with us</a></p>
                        <p><a href='#'>Ride with us</a></p>
                    </div>

                    <div className=' flex flex-col justify-around h-36'>
                        <h2 className=' font-bold text-xl text-white'>Legal</h2>
                        <p><a href='#'>Terms & Conditions</a></p>
                        <p><a href='#'>Cookie Policy</a></p>
                        <p><a href='#'>Privacy Policy</a></p>
                    </div>
                </div>
                <div className=' flex flex-col justify-around h-56'>
                    <h2 className=' font-bold text-xl text-white'>We deliver to:</h2>
                    <p><a href='#'>Bangalore</a></p>
                    <p><a href='#'>Gurgoan</a></p>
                    <p><a href='#'>Hyderabad</a></p>
                    <p><a href='#'>Delhi</a></p>
                    <p><a href='#'>Pune</a></p>
                    <button>588 cities</button>
                </div>
            </div>
        </div>
    )
}

export default Footer