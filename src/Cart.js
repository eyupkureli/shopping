import React from "react";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove, clearCart } = props;
  const itemPrice = cartItems.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.price * currentItem.qty,
    0
  );
  const taxPrice = itemPrice * 0.2;
  const totalPrice = itemPrice + taxPrice;


  return (
    <div className="section-style">
      <h1>Your Cart</h1>
      <div>
        {cartItems.length === 0 && <div>You did not add any products...</div>}
      </div>

      {cartItems.map((item) => (
        <div key={item.id}>
          <div>{item.productName}</div>
          <div>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div>
            {item.qty} x £{item.price.toFixed(2)}
          </div>
          <hr/>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr/>
          <div className="result">
            <div>Items Price : </div>
            <div>£{itemPrice.toFixed(2)}</div>
          </div>

          <div>
            <div>Tax Price : </div>
            <div>£{taxPrice.toFixed(2)}</div>
          </div>

          <div>
            <div>
              <strong>Total Price : </strong>
            </div>
            <div>£{totalPrice.toFixed(2)}</div>
          </div>
          <hr/>
          <div>
            <button onClick = {clearCart}>
              Clear
            </button>
            <button>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
