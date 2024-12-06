import { useContext, useState } from "react";
import { CartContext } from "../store/shopping-cart-context";
import validate from "../helpers/validation-helper";
import { placeUserOrder } from "../helpers/httpHelper";

export default function OrderForm({ goBack }) {

    const initialUserData = {
        name: { value: "", didEdit: false, hasError: false },
        surname: { value: "", didEdit: false, hasError: false },
        street: { value: "", didEdit: false, hasError: false },
        postal: { value: "", didEdit: false, hasError: false },
        city: { value: "", didEdit: false, hasError: false },
        email: { value: "", didEdit: false, hasError: false },
        phone: { value: "", didEdit: false, hasError: false },
        payment: { value: "", didEdit: false, hasError: false },
    };

    const [userData, setUserData] = useState(initialUserData);
    const { items, showModalHandler, setCart, setOrderPlaced } = useContext(CartContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: { ...prevData[name], value: value }
        }));
    }
    const handleBlur = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: { ...prevData[name], didEdit: true, hasError: validate(name, value) }
        }));
    }

    const handleSubmit = async (event) => {

        event.preventDefault();

        const updatedUserData = Object.entries(userData).reduce((acc, [key, field]) => {
            const hasError = validate(key, field.value);
            acc[key] = { ...field, didEdit: true, hasError };
            return acc;
        }, {});

        setUserData(updatedUserData);

        const hasErrors = Object.values(updatedUserData).some((field) => field.hasError);
        if (hasErrors) {
            return;
        }

        const orderData = {
            items,
            customer: Object.fromEntries(
                Object.entries(userData).map(([key, field]) => [key, field.value])
            ),
        };

        try {
            const message = await placeUserOrder(orderData);
            if (message === 'Order created!') {
                setUserData(initialUserData);
                showModalHandler();
                setCart([]);
                setOrderPlaced(true);
                goBack();
            }
        } catch (error) {
            console.error("Error placing the order:", error.message);
            alert("Failed to place the order. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl mb-4 font-bold">Delivery address:</h2>
            <div className="grid grid-cols-2 gap-4 font-semibold">
                <label>
                    Name:
                    <input
                        className="w-full p-1 border-yellow-600 border-2 rounded-md"
                        name="name"
                        id="name"
                        value={userData.name.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                    <div className='text-xs text-red-600'>
                        {userData.name.hasError && <p>Please enter valid name</p>}
                    </div>
                </label>
                <label>
                    Surname:
                    <input
                        className="w-full p-1 border-yellow-600 border-2 rounded-md"
                        name="surname"
                        id="surname"
                        value={userData.surname.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </label>
                <div className="col-span-2">
                    <label>
                        Street:
                        <input
                            className="w-full p-1 border-yellow-600 border-2 rounded-md"
                            name="street"
                            id="street"
                            value={userData.street.value}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        <div className='text-xs text-red-600'>
                            {userData.street.hasError && <p>Please enter valid street</p>}
                        </div>
                    </label>
                </div>
                <label>
                    Postal code:
                    <input
                        className="w-full p-1 border-yellow-600 border-2 rounded-md"
                        name="postal"
                        id="postal"
                        value={userData.postal.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                    <div className='text-xs text-red-600'>
                        {userData.postal.hasError && <p>Please enter valid postal code</p>}
                    </div>
                </label>
                <label>
                    City:
                    <input
                        className="w-full p-1 border-yellow-600 border-2 rounded-md"
                        name="city"
                        id="city"
                        value={userData.city.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                    <div className='text-xs text-red-600'>
                        {userData.city.hasError && <p>Please enter valid city</p>}
                    </div>
                </label>
                <label>
                    E-mail address:
                    <input
                        className="w-full p-1 border-yellow-600 border-2 rounded-md"
                        name="email"
                        id="email"
                        value={userData.email.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="email"
                        required
                    />
                    <div className='text-xs text-red-600'>
                        {userData.email.hasError && <p>Please enter valid e-mail address</p>}
                    </div>
                </label>
                <label>
                    Phone number:
                    <input
                        className="w-full p-1 border-yellow-600 border-2 rounded-md"
                        name="phone"
                        id="phone"
                        value={userData.phone.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                    <div className='text-xs text-red-600'>
                        {userData.phone.hasError && <p>Please enter valid phone number</p>}
                    </div>
                </label>
                <div className="col-span-2 border-yellow-600 border-2 p-2 mb-4 rounded-md">
                    Select payment method:
                    <div className='text-xs text-red-600'>
                        {userData.payment.hasError && <p>Please select payment method</p>}
                    </div>
                    <p className="mt-1">
                        <label>
                            <input
                                type="radio"
                                name="payment"
                                id="payment"
                                value="cod"
                                className="mr-3"
                                checked={userData.payment.value === "cod"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            Cash on delivery
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                type="radio"
                                name="payment"
                                id="payment"
                                value="card"
                                className="mr-3"
                                checked={userData.payment.value === "card"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            Credit card
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                type="radio"
                                name="payment"
                                id="payment"
                                value="pickup"
                                className="mr-3"
                                checked={userData.payment.value === "pickup"}
                                onChange={handleChange}
                                onBlur={handleBlur}
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