import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import { useParams } from "react-router-dom";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { useEffect } from "react";


export function Store() {

    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);

    const { id } = useParams<{ id: string }>();

    const numericId = id ? parseInt(id, 10) : null;

    if (numericId !== null && !isNaN(numericId)) {
        const item = storeItems.filter((item) => item.id === numericId);

        return (
            <>
                <section className="px-9 bg-gray-100 mt-20">
                    <h1>Store</h1>
                    <div className="pb-5">
                        <div>
                            {item.map(i => (
                                <div key={i.id}>
                                    <StoreItem {...i} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <Newsletter />
                <Footer />
            </>
        )

    } else {
        return <div>INVALID item ID.</div>

    }

}