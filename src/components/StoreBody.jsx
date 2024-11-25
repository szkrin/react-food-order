import { useContext } from "react"
import { CartContext } from "../store/shopping-cart-context"
import Product from "./Product";

export default function StoreBody() {

    const { isFetching, fetchedData, error } = useContext(CartContext);

    return (
        <>
            {isFetching && <p className="text-4xl text-center text-yellow-500">Meals are being loaded, please wait</p>}
            {!isFetching && error && <p className="text-4xl text-center text-yellow-500">Error occured when fetching meals, please try again</p>}
            <section className="grid grid-cols-3 gap-4 w-1/2 mx-auto mt-10 text-center">
                {!isFetching && fetchedData.map((item) => {
                    return <Product
                        key={item.id}
                        id={item.id}
                        img={item.image}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />
                })}
            </section>
        </>
    )
}