import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrencies";

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}


export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

    const quantity = getItemQuantity(id);

    return (
        <>
            <div className=" bg-white">
                <div className="p-5 md:p-10 flex flex-col md:flex-row gap-5 md:gap-10 w-full">
                    <img src={imgUrl} className="h-56 md:h-96 w-full md:w-1/2 object-cover" />
                    <div className="flex flex-col items-center justify-center">
                        <div key={id} className="flex flex-col justify-between items-center p-2">
                            <span className="font-bold text-2xl">{name}</span>
                            <span className="text-gray-600">{formatCurrency(price)}</span>
                        </div>

                        <div>
                            {quantity === 0 ?
                                (<button className="bg-blue-500 hover:bg-blue-800 text-white w-48 md:w-96 p-2 rounded-lg" onClick={() => increaseCartQuantity(id)}> Add to Cart
                                </button>)
                                :
                                (<div className="flex flex-col items-center justify-center text-white gap-1">
                                    <div className="flex items-center justify-center gap-5">
                                        <button onClick={() => increaseCartQuantity(id)} className="bg-blue-500 hover:bg-blue-800 w-16 p-2 rounded-lg">
                                            +
                                        </button>
                                        <div className="text-black">
                                            <span className="text-2xl">{quantity}</span> in cart
                                        </div>
                                        <button onClick={() => decreaseCartQuantity(id)} className="bg-blue-500 hover:bg-blue-800 w-16 p-2 rounded-lg">
                                            -
                                        </button>
                                    </div>
                                    <button onClick={() => removeFromCart(id)} className="bg-red-600 hover:bg-red-800 rounded-lg w-60 px-2 py-1">
                                        Remove
                                    </button>

                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}