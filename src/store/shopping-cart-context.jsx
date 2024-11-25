import { createContext, useState, useEffect } from "react";
import { fetchAvailableMeals } from '../httpHelper';

export const CartContext = createContext({
    items: [],
    addItemToCart: () => { },
    isFetching: false,
    cartLength: 0,
    error: '',
    fetchedData: [],
    showModalHandler: () => { },
    isModalVisible: false,
    increaseQty: () => { },
    decreaseQty: () => { },
});

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const cartLength = cart.length;

    function showModalHandler() {
        setIsModalVisible((prev) => !prev);
    }

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            setError('');
            try {
                const data = await fetchAvailableMeals();
                setFetchedData(data);
            } catch (error) {
                setError({ message: error.message || "Failed to fetch data." });
            }
            setIsFetching(false);
        }

        fetchData();
    }, []);

    function addToCartHandler(id) {
        setCart((prev) => {
            if (prev.some((item) => item.id === id)) {
                return prev.map((item) =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            const itemToAdd = { ...fetchedData.find((item) => item.id === id), qty: 1 };
            return [...prev, itemToAdd];
        });
    }

    function increaseQty(id) {
        setCart((prev) => {
            if (prev.some((item) => item.id === id)) {
                return prev.map((item) =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                );
            }
        });
    }

    function decreaseQty(id) {
        setCart((prev) => {
            if (prev.some((item) => item.id === id)) {
                return prev.map((item) => {
                    if (item.id === id) {
                        if (item.qty > 1) {
                            return { ...item, qty: item.qty - 1 };
                        }
                        return null;
                    }
                    return item;
                }).filter(Boolean);
            }
            return prev;
        });
    }

    const ctxValue = {
        items: cart,
        addItemToCart: addToCartHandler,
        isFetching: isFetching,
        cartLength: cartLength,
        error: error,
        fetchedData: fetchedData,
        showModalHandler: showModalHandler,
        isModalVisible: isModalVisible,
        increaseQty: increaseQty,
        decreaseQty: decreaseQty
    }

    return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
}