import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store(){
    return (
        <>
        <h1>Store</h1>
        <div className="grid md:grid-cols-3 gap-4 grid-cols-2">
            {storeItems.map(item => (
                <div key={item.id}>
                    <StoreItem {...item} />
                </div>
            ))}
        </div>
        </>
    )
}