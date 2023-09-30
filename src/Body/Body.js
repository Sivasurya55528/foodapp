import React from 'react';
//import discobriyani from '../myImages/discobriyani.png';
import { Banner } from './Banner';
import Dish from '../Body/Dish';
import { Restaurant_url } from '../config/utils';
import Restaurant from '../Restaurant/Restaurant';
import { useEffect, useState } from 'react';

const Body = () => {
    const [restaurantInfo, setRestaurantInfo] = useState([])
    useEffect(() => {
        getRst()
    }, []);

    const getRst = async () => {
        const fetchData = await fetch(Restaurant_url);
        const rest = await fetchData.json();
        setRestaurantInfo(rest?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    if (restaurantInfo.length === 0) {
        return (
            <p className=' h-80 bg-gray-900 text-white items-center justify-center text-3xl flex'>Looking for a good food near you</p>
        );
    }

    //console.log()
    return (


        < div className=' flex mx-40 p-5 flex-col ' >

            <Banner />
            <Dish />
            <hr />

            <div className='flex flex-col py-10   '>
                <h1 className=' text-2xl font-bold'>Restaurants with online food delivery in Chennai
                </h1>

            </div>
            <div className=' flex flex-wrap justify-between'>
                {
                    restaurantInfo.map((elem) => {
                        return (
                            <Restaurant data={elem} />
                        )
                    })
                }
            </div>

            {/* <div className='flex flex-col py-10 '>
                <h1 className=' text-2xl font-bold'>Restaurants with online food delivery in Chennai
                </h1>

            </div>
            <div className=' flex flex-wrap justify-between '>
                <div className=' mb-8'>
                    <img src={discobriyani} className=' w-52 h-32 rounded-2xl' />
                    <h3>Hotel names</h3>
                    <p>Ratings</p>
                    <p>Dish names</p>
                    <p>Land Mark</p>
                </div>
                <div>
                    <img src={discobriyani} className=' w-52 h-32 rounded-2xl' />
                    <h3>Hotel names</h3>
                    <p>Ratings</p>
                    <p>Dish names</p>
                    <p>Land Mark</p>
                </div>
                <div>
                    <img src={discobriyani} className=' w-52 h-32 rounded-2xl' />
                    <h3>Hotel names</h3>
                    <p>Ratings</p>
                    <p>Dish names</p>
                    <p>Land Mark</p>
                </div>
                <div>
                    <img src={discobriyani} className=' w-52 h-32 rounded-2xl' />
                    <h3>Hotel names</h3>
                    <p>Ratings</p>
                    <p>Dish names</p>
                    <p>Land Mark</p>
                </div>
                <div className=' mb-8'>
                    <img src={discobriyani} className=' w-52 h-32 rounded-2xl' />
                    <h3>Hotel names</h3>
                    <p>Ratings</p>
                    <p>Dish names</p>
                    <p>Land Mark</p>
                </div>
                <div>
                    <img src={discobriyani} className=' w-52 h-32 rounded-2xl' />
                    <h3>Hotel names</h3>
                    <p>Ratings</p>
                    <p>Dish names</p>
                    <p>Land Mark</p>
                </div>
                <div>
                    <img src={discobriyani} className=' w-52 h-32 rounded-2xl' />
                    <h3>Hotel names</h3>
                    <p>Ratings</p>
                    <p>Dish names</p>
                    <p>Land Mark</p>
                </div>
                <div>
                    <img src={discobriyani} className=' w-52 h-32 rounded-2xl' />
                    <h3>Hotel names</h3>
                    <p>Ratings</p>
                    <p>Dish names</p>
                    <p>Land Mark</p>
                </div>

            </div> */}

        </div >
    )
}

export default Body;