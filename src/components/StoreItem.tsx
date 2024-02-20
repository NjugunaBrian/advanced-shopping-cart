import { formatCurrency } from "../utilities/formatCurrencies";

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}


export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {

    const quantity = 0;

    return (
        <>
            <div className="flex flex-col">
                <img src={imgUrl} className="h-50 object-cover" />
                <div>
                    <div className="flex justify-between items-center p-2">
                        <span>{name}</span>
                        <span className="text-gray-600">{formatCurrency(price)}</span>
                    </div>
                </div>
                <div className="my-auto">
                    {quantity === 0 ?
                    <button className="bg-blue-500 text-white w-full p-2 rounded-lg"> + Add to Cart
                    </button> 
                    :
                    <div className="flex flex-col items-center justify-center text-white gap-1">
                        <div className="flex items-center justify-center gap-1">
                            <button className="bg-blue-500 hover:bg-blue-800 p-2 rounded-lg">
                                +
                            </button>
                            <div className="text-black">
                            <span className="text-2xl">{quantity}</span> in cart
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-800 p-2 rounded-lg">
                                -
                            </button>
                        </div>
                        <button className="bg-red-600 hover:bg-red-800 rounded-lg px-2 py-1">
                            Remove
                        </button>

                    </div>
                    }
                </div>
            </div>
        </>

    )

}