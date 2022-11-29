import "./style.css";
import useProducts from "../../../hooks/useProducts";
import ProductItem from "./ProductItem";
import ProductFilter from "./ProductFilter";
import Title from "../../ui/Title";
import { isEmpty } from "ramda";
import PageContainer from "../../ui/PageContainer";

const ProductsPage = () => {
  const { products, categories, brands, setFilters } = useProducts();

  return (
    <PageContainer>
      <Title>Nossos produtos:</Title>
      <div className="products-container">
        <ProductFilter
          categories={categories}
          brands={brands}
          onChange={setFilters}
        />
        {isEmpty(products) ? (
          <div className="product-empty">
            <h2>Nenhum produto encontrado</h2>
          </div>
        ) : (
          <div className="product-list">
            {products.map((product, idx) => (
              <ProductItem
                key={idx}
                product={product}
                categories={categories}
                brands={brands}
              />
            ))}
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default ProductsPage;
