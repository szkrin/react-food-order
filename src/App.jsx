import { useState } from "react";
import Modal from "./components/Modal";
import Product from "./components/Product";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} />
      <section className="grid grid-cols-12 pt-12 pb-10">
        <div className="flex items-center gap-4 col-start-3 col-span-7">
          <img className="size-24 rounded-full border-yellow-700 border-4" src='logo.jpg' />
          <h1>ReactFood</h1>
        </div>
        <div className="flex items-center justify-end col-span-1">
          <p className="text-yellow-500 font-bold text-lg">
            Cart(1)
          </p>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-4 w-1/2 mx-auto mt-10 text-center">
        <Product />
        <Product />
        <Product />
      </section>
    </>
  );
}

export default App;
