import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { animated } from "react-spring";
import Close from "../../images/svg/close.svg";
const Cart = ({ style }) => {
  const {
    isCartOpen,
    checkout,
    toggleCartOpen,
    removeProductFromToCart,
  } = useContext(StoreContext);

  return (
    <animated.div
      className="top-0 right-0 fixed w-1/2 h-full bg-white shadow-xl "
      style={{ ...style }}
    >
      <button onClick={toggleCartOpen}>
        <Close />
      </button>
      <h3>Cart</h3>
      {checkout.lineItems.map((item) => (
        <div key={item.id} className="flex">
          <div className="h-12 w-12">
            <img src={item.variant.image.src} alt="" />
          </div>

          <div>
            <h4>{item.title}</h4>
            <p>{item.quantity}</p>
            <p>${item.variant.price}</p>
            <button onClick={() => removeProductFromToCart(item.id)}>
              Remover
            </button>
          </div>
        </div>
      ))}
      <hr />
      <h5>Precio Total: ${checkout.totalPrice}</h5>
    </animated.div>
  );
};

export default Cart;