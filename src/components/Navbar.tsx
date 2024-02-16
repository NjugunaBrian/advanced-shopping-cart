import { NavLink } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const cartIcon = <FontAwesomeIcon icon={faCartShopping} />



export function Navbar(){
    
    return(
        <div className="p-5 shadow-sm bg-white flex items-center justify-between">
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
            <button className="relative px-3 py-2 rounded-full border hover:bg-blue-500">
                {cartIcon}
                <div className="absolute rounded-full bg-red-600 px-2 flex items-center justify-center text-white bottom-0 right-0 translate-x-1/4 translate-y-1/4">3</div>
            </button>
        </div>
    )
}