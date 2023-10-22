import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { menu_card } from '../config/utils';
import RestInfo from './RestInfo';
import RestaurantMenuList from './restaurantMenuList';


const RestaurantWrapper = () => {
    const { restId } = useParams();
    const [restaurantData, setRestaurantData] = useState([]);
    useEffect(() => {
        getRestaurantData();
    }, [])

    const getRestaurantData = async () => {
        const fetchData = await fetch(`${menu_card}${restId}`);
        const resMenu = await fetchData.json();
        setRestaurantData(resMenu?.data?.cards);
    }
    if (restaurantData.length === 0) {
        return (
            <div className=' h-80 bg-gray-900 text-white items-center justify-center text-3xl flex'>Looking for Restaurants</div>
        );
    }

    return (
        <>

            <RestInfo info={restaurantData?.[0]?.card?.card?.info} />
            <RestaurantMenuList menuData={restaurantData?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards} />
        </>
    )
}

export default RestaurantWrapper