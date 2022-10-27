import "./style.css";
import placeholderImage from "../../../../images/secondary-banner-placeholder.jpg";
import { formatMoney } from "../../../../lib/money-utils";

const ProductItem = ({ product }) => {
  const { name, type, value } = product;

  return (
    <div class="product-item">
      <div class="product-img">
        <img src={placeholderImage} alt="product image" />
        <button type="button" class="add-to-cart-btn">
          <i class="fas fa-shopping-cart"></i>Add To Cart
        </button>
      </div>
      <div class="product-content">
        <h3 class="product-name">{name}</h3>
        <span class="product-category">Tipo: {type}</span>
        <p class="product-price">{formatMoney(value)}</p>
      </div>
      <br />
    </div>
  );
};

export default ProductItem;
