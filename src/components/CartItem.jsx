import { useContext } from "react"
import { CartContext } from "../store/shopping-cart-context"

export default function CartItem({ name, amount, price, id }) {

    const { increaseQty, decreaseQty } = useContext(CartContext);

    return (
        <li className="flex">
            <div>
                {name} - {amount} x ${price}
            </div>
            <div className="flex items-center text-yellow-700 space-x-6 ml-auto">
                <button className="w-6 h-6 bg-slate-950 rounded-full text-2xl flex items-center justify-center" onClick={() => decreaseQty(id)}>-</button>
                <p className="text-xl font-semibold">{amount}</p>
                <button className="w-6 h-6 bg-slate-950 rounded-full text-2xl flex items-center justify-center" onClick={() => increaseQty(id)}>+</button>
            </div>
        </li>
    )
}