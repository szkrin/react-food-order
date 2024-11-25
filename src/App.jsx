import Modal from "./components/Modal";
import CartContextProvider from "./store/shopping-cart-context";
import Header from "./components/Header";
import StoreBody from "./components/StoreBody";

function App() {

  return (
    <CartContextProvider>
      <Modal />
      <Header />
      <StoreBody />
    </CartContextProvider>
  );
}

export default App;
