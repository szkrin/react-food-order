import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
export default function Header() {
    
    const { cartLength, showModalHandler } = useContext(CartContext);

    return (
        <section className="grid grid-cols-12 pt-12 pb-10">
            <div className="flex items-center gap-4 col-start-3 col-span-7">
                <img className="size-24 rounded-full border-yellow-700 border-4" src='logo.jpg' />
                <h1>ReactFood</h1>
            </div>
            <div className="flex items-center justify-end col-span-1">
                <button className="text-yellow-500 font-bold text-lg" onClick={showModalHandler}>
                    Cart{cartLength == 0 ? '' : ` (${cartLength})`}
                </button>
            </div>
        </section>
    )
}