import React from "react"
import { IMAGE_URL } from '../config/utils'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
const Restaurants = (props) => {
    const { name, cloudinaryImageId, avgRating, areaName, cuisines, id } = props.data.info
    return (
        <div className="flex h-80 " >
            <Link to={`/RestInfo/${id}`}>
                <div className=" flex flex-col w-52 mb-8">
                    <img src={`${IMAGE_URL}${cloudinaryImageId
                        }`} className=' w-52 h-36 rounded-2xl' />
                    <p className=" font-bold">{name}</p>
                    <div className=" flex items-center">
                        <FontAwesomeIcon icon={faStar} className=" text-green-500" />
                        <p className=" font-normal"> {avgRating}</p>
                    </div>

                    <p>{cuisines.join(',')}</p>
                    <p className=" font-light">{areaName}</p>
                </div>
            </Link>
        </div>
    )
}

export default Restaurants;