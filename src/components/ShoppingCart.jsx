import React, { useState } from 'react';
import CartContent from './CartContent';
import { CartContext } from '../store/shopping-cart-context';
import { useContext } from 'react';
import OrderForm from './OrderForm';

export default function ShoppingCart() {

    const { isModalVisible } = useContext(CartContext);
    const [cartStep, setCartStep] = useState(false);

    function checkoutHandler() {
        setCartStep((prev) => !prev);
    }


    if (!isModalVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-black">
            <div className="bg-orange-200 p-8 rounded shadow-lg w-3/4 max-w-lg">
                {!cartStep && <CartContent goToCheckout={checkoutHandler} />}
                {cartStep && <OrderForm goBack={checkoutHandler} />}

            </div>
        </div>
    );
}