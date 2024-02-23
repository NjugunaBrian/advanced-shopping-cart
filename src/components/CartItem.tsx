import { useShoppingCart } from "../context/ShoppingCartContext";
import StoreItems from "../data/items.json";
import { formatCurrency } from '../utilities/formatCurrencies';

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();

    const item = StoreItems.find(i => i.id === id);
    if (item === null) {
        return null;
    }

    return (
        <>
            <div className="flex justify-between mx-2 my-4">
                <div className="flex gap-2">
                    <img src={item?.imgUrl} className="w-32 h-20 object-cover" />
                    <div>
                        <div>{item?.name} {""}{quantity > 1 && <span className="text-gray-600 text-xs">x{quantity}</span>}</div>
                        <div className="text-gray-600 text-xs">{formatCurrency(item!.price)}</div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-1">
                        {formatCurrency(item!.price * quantity)}
                        <button className="border px-2 py-auto rounded-lg hover:bg-red-500" onClick={() => removeFromCart(item!.id)}>
                            &times;
                        </button>
                    </div>

                </div>

            </div>

        </>
    )

}