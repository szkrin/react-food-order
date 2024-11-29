import { useContext } from "react"
import { CartContext } from "../store/shopping-cart-context"
import CartItem from "./CartItem";

export default function CartContent({ goToCheckout }) {
    const { items, showModalHandler } = useContext(CartContext);
    const cartTotal = items.length > 0 ? items.reduce((sum, item) => {
        return sum + parseFloat(item.price * item.qty);
    }, 0) : 0;
    return (
        <>
            <h2 className="text-2xl mb-4 font-bold">Your order:</h2>
            <ul className='font-semibold'>
                {items.length > 0 ? items.map((item) => {
                    return <CartItem key={item.id} name={item.name} amount={item.qty} price={item.price} id={item.id} />
                }) : <p>Add meals to cart!</p>}
            </ul>
            <p className='text-right font-bold my-6'>${cartTotal}</p>
            <div className='flex flex-row-reverse font-semibold'>
                {items[0] ? <button className='px-4 py-2 bg-yellow-600' onClick={goToCheckout}>Go to Checkout</button> : ''}
                <button className='px-4 py-2' onClick={showModalHandler}>Close</button>
            </div>
        </>
    )
}