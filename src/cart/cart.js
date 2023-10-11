import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../config/cartslice/cartSlice";
import { IMAGE_URL } from "../config/utils";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart);
    const dispatch = useDispatch()
    const emptyCart = () => {
        dispatch(clearCart())
    }
    return (
        <>
            <button className="Clearcart" onClick={emptyCart}>Empty Cart</button>
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
        </>
    )
}

export default Cart;