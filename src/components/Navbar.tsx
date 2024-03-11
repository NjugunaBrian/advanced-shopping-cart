import { NavLink } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from "../context/ShoppingCartContext";

const cartIcon = <FontAwesomeIcon icon={faCartShopping} />



export function Navbar(){

    const {openCart, cartQuantity} = useShoppingCart();
    
    return(
        <div className="px-2 py-5 md:px-5 shadow-sm bg-white flex items-center justify-between">
            <nav>
                <NavLink className="px-5" to="/">
                    Home
                </NavLink>
                <NavLink className="px-5" to="/about">
                    About
                </NavLink>
                <NavLink className="px-5" to="/store">
                    Store
                </NavLink>
            </nav>
            
            {cartQuantity > 0 && <button onClick={openCart} className="relative px-3 py-2 rounded-full outline-[1px black] hover:bg-blue-500">
                {cartIcon}
                <div className="absolute rounded-full bg-red-600 px-2 flex items-center justify-center text-white bottom-0 right-0 translate-x-1/4 translate-y-1/4">
                    {cartQuantity}
                </div>
            </button>} 
        </div>
    )
}