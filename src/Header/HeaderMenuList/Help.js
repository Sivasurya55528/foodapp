import React from 'react'


const Help = () => {
    return (
        <div className=' bg-cyan-700 h-full'>
            <div className=' text-white pl-8 pt-16 pb-8'>
                <h1 className=' font-bold text-3xl'>Help & Support</h1>
                <p>Let's take a step ahead and help you better.</p>
            </div>
            <div className=' flex bg-white ml-5 '>
                <div className=' flex flex-col font-medium m-10 pl-16 bg-slate-100 justify-evenly mr-32 pr-5'>

                    <a href='#' className=' bg-white py-5 '>Help with orders</a>
                    <a href='#'>General issues</a>
                    <a href='#'>Partner Onboarding</a>
                    <a href='#'>Legal, Terms & Conditions</a>
                    <a href='#'>FAQs</a>
                    <a href='#'>Swiggy One FAQs</a>
                    <a href='#'>swiggy Money FAQs</a>
                    <a href='#'>swiggy HDFC Bank Credit Card - Features</a>
                    <a href='#'>swiggy HDFC Bank Credit CArd - Usage</a>


                </div>
                <div className=' p-32 flex flex-col justify-center items-center '>
                    <img src={require('../image/emptyMsg.png')} />
                    <h2 className=' font-semibold text-lg mt-10 p-2'>No Orders</h2>
                    <p className=' text-xs h-60'>You haven't placed any orders yet.</p>
                </div>

            </div>
        </div>
    )
}

export default Help