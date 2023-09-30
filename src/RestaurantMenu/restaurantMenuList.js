import NestedCategory from "./nestedCategory";
import RestaurantItems from "./restaurantItems";
const RestaurantMenuList = ({ menuData }) => {
    return (
        <>
            <div className="restaurantMenu">
                {menuData.map((elem) => {
                    return (
                        <div className="menuList ">
                            <div className="titleSection">
                                <h1 className=" font-bold">{elem?.card?.card?.title}</h1>
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