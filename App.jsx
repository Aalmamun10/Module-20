```javascript
import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Navbar openCart={() => setShowCart(true)} />

      <main>
        <div className="hero">
          <h2>Welcome to ShopCart</h2>
          <p>
            Find your favorite products at the best price.
          </p>
        </div>

        <ProductGrid />
      </main>

      {showCart && (
        <Cart closeCart={() => setShowCart(false)} />
      )}
    </>
  );
}

export default App;
```
