import CartContextProvider from "./store/shopping-cart-context";
import Header from "./components/Header";
import StoreBody from "./components/StoreBody";
import ShoppingCart from "./components/ShoppingCart";

function App() {

  return (
    <CartContextProvider>
      <ShoppingCart />
      <Header />
      <StoreBody />
    </CartContextProvider>
  );
}

export default App;
