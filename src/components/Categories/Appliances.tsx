import storeItems from "../../data/items.json";
import { formatCurrency } from "../../utilities/formatCurrencies";
import { Link } from "react-router-dom";


function Appliances (){
    const filteredItems = storeItems.filter(item => item.category === "appliances");

    return (
        <div className="p-5 bg-gray-100">
            <div className="grid md:grid-cols-3 gap-4 grid-cols-2">
                {filteredItems.map(item => (
                    <div key={item.id} >
                        <Link to={`/categories/product/${item.id}`}>
                            <div>
                                <img src={item.imgUrl} className="h-44 w-60 object-cover" />
                                <div>
                                    <div key={item.id} className="flex flex-col justify-between items-center p-2">
                                        <span>{item.name}</span>
                                        <span className="text-gray-600">{formatCurrency(item.price)}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    )

}


export default Appliances;