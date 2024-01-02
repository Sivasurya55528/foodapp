import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../config/cartslice/cartSlice";
import { IMAGE_URL } from "../../config/utils";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart);
    const dispatch = useDispatch()
    const emptyCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className=" ">
            <div className=" flex flex-col justify-center items-center">
                <img className=" w-80 h-72" src={require("../../myImages/cartLogo.png")} />
                <h2 className=" font-bold text-lg">Your cart is empty</h2>
                <p className=" text-sm">You can go to home page to view more restaurants</p>
                <a className=" bg-orange-500 text-white px-4 py-2 font-medium my-5" href="/">SEE RESTAURANTS NEAR YOU</a>

            </div>
            {/* <button className="Clearcart" onClick={emptyCart}>Empty Cart</button> */}
            {cartItems.map((item) => {
                return (
                    <div key={item?.info?.id} className="foodItems">
                        <div>
                            <img className=" w-52 h-40  rounded-lg" src={`${IMAGE_URL}${item?.info?.imageId}`} />
                        </div>
                        <div>
                            <span>{item?.info?.name}</span>
                        </div>

                    </div>

                )
            })}
        </div>
    )
}

export default Cart;