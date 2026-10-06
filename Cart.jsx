```javascript
import { useCart } from "../context/CartContext";

const Cart = ({ closeCart }) => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice
  } = useCart();

  return (
    <div className="cart-overlay">
      <div className="cart">
        <div className="cart-header">
          <h2>Your Cart</h2>

          <button onClick={closeCart}>✕</button>
        </div>

        {cart.length === 0 ? (
          <p className="empty-cart">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.title} />

                  <div className="cart-details">
                    <h3>{item.title}</h3>

                    <p>${item.price}</p>

                    <div className="quantity">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <h3>Total: ${totalPrice.toFixed(2)}</h3>

              <button className="checkout">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
```
