import "./style.css";
import { formatMoney } from "../../../../lib/money-utils";

const ProductItem = ({ product }) => {
  const { name, type, price, imageUrl } = product;

  return (
    <div className="product-item">
      <div className="product-img">
        <img src={imageUrl} alt="product image" />
        <button type="button" className="add-to-cart-btn">
          <i className="fas fa-shopping-cart"></i>Add To Cart
        </button>
      </div>
      <div className="product-content">
        <h3 className="product-name">{name}</h3>
        <span className="product-category">Tipo: {type}</span>
        <p className="product-price">{formatMoney(price)}</p>
      </div>
      <br />
    </div>
  );
};

export default ProductItem;
