import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";




function CategoriesBanner() {

    const [btnName, setBtnName] = useState("All");

    const handleButtonName = (e: SetStateAction<string>) => {
        setBtnName(e);
    }



    return (
        <>
            <div className="bg-gray-100 py-10 text-center">
                <h3 className="font-bold text-xl">{btnName}</h3>
                <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center mt-11">
                    <Link to="all" onClick={() => handleButtonName("All")}>
                        <button className="px-2 py-1 border border-gray-800">All</button>
                    </Link>
                    <Link to="electronics" onClick={() => handleButtonName("Electronics")}>
                        <button className="px-1 md:px-2 py-1 border border-gray-800">Electronics</button>
                    </Link>
                    <Link to="literature" onClick={() => handleButtonName("Literature")}>
                        <button className="px-2 py-1 border border-gray-800">Literature</button>
                    </Link>
                    <Link to="groceries" onClick={() => handleButtonName("Groceries")}>
                        <button className="px-2 py-1 border border-gray-800">Groceries</button>
                    </Link>
                    <Link to="skincare" onClick={() => handleButtonName("Skin Care")}>
                        <button className="px-2 py-1 border border-gray-800">Skin Care</button>
                    </Link>
                    <Link to="appliances" onClick={() => handleButtonName("Appliances")}>
                        <button className="px-2 py-1 border border-gray-800">Appliances</button>
                    </Link>
                    <Link to="automotives" onClick={() => handleButtonName("Automotives")}>
                        <button className="px-2 py-1 border border-gray-800">Automotives</button>
                    </Link>

                </div>
            </div>
        </>
    )

}
export default CategoriesBanner;