import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Shopping from "./Shopping";
import Cart from "./Cart";
import data from "./data";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  };


  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(
        cartItems.filter((x) =>
          x.id !== product.id
        )
      );
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  }

  return (
    <div className="App">
      <Navbar />
      <Shopping onAdd={onAdd} products={products}></Shopping>
      <Cart onAdd={onAdd} onRemove={onRemove} clearCart={clearCart} cartItems={cartItems}></Cart>
    </div>
  );
}

export default App;
