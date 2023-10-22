import NestedCategory from "./NestedCategory";
import RestaurantItems from "./RestaurantItems";
const RestaurantMenuList = ({ menuData }) => {
    return (
        <>
            <div className="restaurantMenu mx-60">
                {menuData.map((elem) => {
                    return (
                        <div className="menuList py-2 ">
                            <div className="titleSection">
                                <h1 className=" font-bold text-xl ">{elem?.card?.card?.title}</h1>
                            </div>
                            {elem?.card?.card?.categories?.length > 0 ? <><NestedCategory category={elem?.card?.card?.categories} /></> : <div className="restaurnatItems">
                                <RestaurantItems itemCards={elem?.card?.card?.itemCards} />
                            </div>}

                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RestaurantMenuList;