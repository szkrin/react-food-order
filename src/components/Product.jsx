import { useContext } from "react"
import { CartContext } from "../store/shopping-cart-context"

export default function Product({ id, img, name, price, description }) {

    const { addItemToCart } = useContext(CartContext);

    return (
        <div className="bg-zinc-900">
            <img src={`http://localhost:3000/${img}`} />
            <div className="p-4">
                <h2 className="font-bold text-xl tracking-wider">{name}</h2>
                <p className="px-6 py-2 my-3 bg-yellow-900 w-fit place-self-center">${price}</p>
                <p className="text-sm min-h-24">{description}</p>
                <button className="px-6 py-2 mt-8 mb-2 bg-yellow-600 text-yellow-950 font-semibold" onClick={() => addItemToCart(id)}>Add to Cart</button>
            </div>
        </div>
    )
}