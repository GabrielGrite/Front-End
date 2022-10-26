import "./style.css";
import useProducts from "../../../hooks/useProducts";
import { formatMoney } from "../../../lib/money-utils";

const ProductsPage = () => {
  const { error, products, loading } = useProducts();

  return (
    <div className="container">
      <h2>Our products</h2>
      <div className="product-list">
        {products &&
          products.map((product, idx) => (
            <div className="product-item-container">
              <div key={idx} className="product-item">
                <div className="product-img">
                  <img src={product.imgSrc} alt="product image" />
                  {/* <button type="button" className="add-to-cart-btn">
                  <i className="fas fa-shopping-cart"></i>Add To Cart
                </button> */}
                </div>
                <hr></hr>
                <div className="product-content">
                  <h3 className="product-name">{product.name}</h3>
                  <span className="product-category">{product.category}</span>
                  <p className="product-price">{formatMoney(product.price)}</p>
                  <p>Frete Grátis</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsPage;
