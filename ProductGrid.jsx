```javascript
import products from "../data/products";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <section className="products-section">
      <h2>Our Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
```
