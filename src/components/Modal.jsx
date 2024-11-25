import React from 'react';
import CartItem from './CartItem';
import { CartContext } from '../store/shopping-cart-context';
import { useContext } from 'react';

export default function Modal() {

    const { items, isModalVisible, showModalHandler } = useContext(CartContext);
    console.log(items);
    const cartTotal = items.length > 0 ? items.reduce((sum, item) => {
        return sum + parseFloat(item.price * item.qty);
    }, 0) : 0;

    if (!isModalVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-black">
            <div className="bg-orange-200 p-8 rounded shadow-lg w-3/4 max-w-lg">
                <h2 className="text-2xl mb-4 font-bold">Your cart</h2>
                <ul className='font-semibold'>
                    {items.length > 0 ? items.map((item) => {
                        return <CartItem key={item.id} name={item.name} amount={item.qty} price={item.price} id={item.id} />
                    }) : <p>Add meals to cart!</p>}
                </ul>
                <p className='text-right font-bold my-6'>${cartTotal}</p>
                <div className='flex flex-row-reverse font-semibold'>
                    {items[0] ? <button className='px-4 py-2 bg-yellow-600' onClick={showModalHandler}>Go to Checkout</button> : ''}
                    <button className='px-4 py-2' onClick={showModalHandler}>Close</button>
                </div>
            </div>
        </div>
    );
}