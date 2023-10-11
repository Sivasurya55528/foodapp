import React from 'react'
import RestaurantItems from './RestaurantItems';

const NestedCategory = ({ category }) => {
    return (
        <div className='categories'>
            {category?.map((elem) => {
                return (
                    <div className='MenuList'>

                        <div className="titleSection ">
                            <h1 className=" font-bold">{elem?.title}</h1>
                        </div>
                        <div className='categoryItems'>
                            <RestaurantItems itemCards={elem?.itemCards} />
                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default NestedCategory;