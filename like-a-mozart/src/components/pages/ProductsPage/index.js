import "./style.css";
import useProducts from "../../../hooks/useProducts";
import { formatMoney } from "../../../lib/money-utils";
import ProductItem from "./ProductItem";
import ProductFilter from "./ProductFilter";
import Title from "../../ui/Title";
import api from "../../../api/api";
import { useEffect } from "react";
import { isEmpty } from "ramda";
import PageContainer from "../../ui/PageContainer";

const ProductsPage = () => {
  const { error, products, loading, categories, brands, setFilters } = useProducts();

  return (
    <PageContainer>
      <Title>Nossos produtos:</Title>
      <div className="products-container">
        <ProductFilter
           categories={categories} 
           brands={brands} 
           onChange={setFilters}
        />
        <div className="product-list">
          {
            isEmpty(products) ? (
              <h2>Nenhum produto encontrado</h2>
            ) : products.map((product, idx) => (
              <ProductItem key={idx} product={product} categories={categories} brands={brands}/>
            ))
          }
        </div>
      </div>
    </PageContainer>
  );
};

export default ProductsPage;
