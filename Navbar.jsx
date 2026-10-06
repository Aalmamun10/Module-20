```javascript
import { useCart } from "../context/CartContext";

const Navbar = ({ openCart }) => {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <h1>ShopCart</h1>

      <button className="cart-button" onClick={openCart}>
        🛒 Cart
        <span>{totalItems}</span>
      </button>
    </nav>
  );
};

export default Navbar;
```
