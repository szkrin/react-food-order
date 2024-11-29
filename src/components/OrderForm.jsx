import { useContext, useState } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function OrderForm({ goBack }) {

    const [userData, setUserData] = useState({ name: '', surname: '', street: '', postal: '', city: '', email: '', phone: '', payment: '' })
    const { items } = useContext(CartContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        const orderData = {
            items: items,
            customer: userData
        }
        event.preventDefault();
        console.log(orderData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl mb-4 font-bold">Delivery address:</h2>
            <div className="grid grid-cols-2 gap-4 font-semibold">
                <label>
                    Name:
                    <input
                        className="w-full p-1 border-yellow-600 border-2 rounded-md"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Surname:
                    <input
                        className="w-full p-1 border-yellow-600 border-2 rounded-md"
                        name="surname"
                        value={userData.surname}
                        onChange={handleChange}
                    />
                </label>
                <div className="col-span-2">
                    <label>
                        Street:
                        <input
                            className="w-full p-1 border-yellow-600 border-2 rounded-md"
                            name="street"
                            value={userData.street}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <label>
                    Postal code:
                    <input
                        className="w-full p-1 border-yellow-600 border-2 rounded-md"
                        name="postal"
                        value={userData.postal}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    City:
                    <input
                        className="w-full p-1 border-yellow-600 border-2 rounded-md"
                        name="city"
                        value={userData.city}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    E-mail address:
                    <input
                        className="w-full p-1 border-yellow-600 border-2 rounded-md"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Phone number:
                    <input
                        className="w-full p-1 border-yellow-600 border-2 rounded-md"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                    />
                </label>
                <div className="col-span-2 border-yellow-600 border-2 p-2 mb-4 rounded-md">
                    Select payment method:
                    <p className="mt-1">
                        <label>
                            <input
                                type="radio"
                                name="payment"
                                value="cod"
                                className="mr-3"
                                checked={userData.payment === "cod"}
                                onChange={handleChange}
                            />
                            Cash on delivery
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                type="radio"
                                name="payment"
                                value="card"
                                className="mr-3"
                                checked={userData.payment === "card"}
                                onChange={handleChange}
                            />
                            Credit card
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                type="radio"
                                name="payment"
                                value="pickup"
                                className="mr-3"
                                checked={userData.payment === "pickup"}
                                onChange={handleChange}
                            />
                            In-restaurant pick up
                        </label>
                    </p>
                </div>
                <div className="col-span-2">
                    <div className='flex flex-row-reverse font-semibold'>
                        <button className='px-4 py-2 bg-yellow-600' onClick={handleSubmit}>Confirm order</button>
                        <button className='px-4 py-2' onClick={goBack}>Back</button>
                    </div>
                </div>
            </div>
        </form>
    )
}