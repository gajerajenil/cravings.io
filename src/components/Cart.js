import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice";
import CartItemList from "./CartItemList";


const Cart = () => {

const cartItems = useSelector((store) => store.cart?.items || []);
    console.log(cartItems)

    const dispatch = useDispatch();

    const handleClearCart = () => {
       dispatch(clearCart())
   }


    return (
      <div className="text-center m-4 p-4">
        <div className=" flex items-center justify-center">
          <h1 className="text-2xl font-bold">Cart</h1>
          <button
            className="p-2 m-2 rounded-xl bg-red-400 text-black"
            on
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        <div className="w-6/12 flex m-auto">
                <CartItemList items={cartItems} />
                
          {cartItems.length === 0 && (
            <h1 className="text-4xl my-4 py-4">
              Cart is Empty. Please Add Some Items.
            </h1>
          )}
        </div>
      </div>
    );
  
}

export default Cart