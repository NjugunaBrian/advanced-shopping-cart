type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}


export function StoreItem ({id, name, price, imgUrl} : StoreItemProps){
    return(
        <>
        <div>
            <img src={imgUrl}  className="h-50 object-cover"/>
            <div>
                <div className="flex justify-between items-center">
                <span>{name}</span>
                <span>{price}</span>
                </div>
            </div>
        </div>
        </>

    )

}