export function Home() {
    return (
        
            <div className="md:flex">

                <div>
                    <img src="/public/images/shopping.png" alt="shopping banner" className="h-52 w-full md:w-auto md:h-full" />
                </div>
                <div className="p-10 md:p-24">
                    <h2 className="text-3xl font-semibold m-2">Shop Till You Drop</h2>
                    <p>Discover the latest trends within our website and shop your favorites.</p>
                    <button className="border border-transparent hover:border-black p-3 mt-4 bg-black text-white font-bold hover:bg-white hover:text-black">SHOP NOW</button>
                </div>
            </div>
        
    )
}