import "./style.css";
import useProducts from "../../../hooks/useProducts";
import { formatMoney } from "../../../lib/money-utils";
import ProductItem from "./ProductItem";

const ProductsPage = () => {
  const { error, products, loading } = useProducts();

  return (
    <div className="container">
      <h2>Nossos produtos:</h2>
      <div className="product-list">
        {products &&
          products.map((product, idx) => (
            <ProductItem key={idx} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductsPage;
