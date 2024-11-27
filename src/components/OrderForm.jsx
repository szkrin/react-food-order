import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function OrderForm() {

    const { items } = useContext(CartContext);
    const checkoutData = items.map(item => ({
        id: item.id,
        quantity: item.qty,
        price: item.price
    }));
    return (
        <form method="post">
            <h2 className="text-2xl mb-4 font-bold">Delivery address:</h2>
            <div className="grid grid-cols-2 gap-4 font-semibold">
                <label>
                    Name:
                    <input className="w-full p-1 border-yellow-600 border-2 rounded-md" name="name" />
                </label>
                <label>
                    Surname:
                    <input className="w-full p-1 border-yellow-600 border-2 rounded-md" name="surname" />
                </label>
                <div className="col-span-2">
                    <label>
                        Address:
                        <input className="w-full p-1 border-yellow-600 border-2 rounded-md" name="address" />
                    </label>
                </div>
                <label>
                    E-mail address:
                    <input className="w-full p-1 border-yellow-600 border-2 rounded-md" name="email" />
                </label>
                <label>
                    Phone number:
                    <input className="w-full p-1 border-yellow-600 border-2 rounded-md" name="phone" />
                </label>
                <div className="col-span-2 border-yellow-600 border-2 p-2 mb-4 rounded-md">
                    Select payment method:
                    <p className="mt-1">
                        <label>
                            <input type="radio" name="cod" value="cod" className="mr-3" />
                            Cash on delivery
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="radio" name="card" value="card" className="mr-3" />
                            Credit card
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="radio" name="pickup" value="pickup" className="mr-3" />
                            In-restaurant pick up
                        </label>
                    </p>
                </div>
            </div>
        </form>
    )
}