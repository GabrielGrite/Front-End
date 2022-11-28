import { mergeRight, reduce } from "ramda";
import { useEffect, useState } from "react";
import api from "../api/api";
import { notifyUnexpectedError } from "../lib/notification";
import usePaginator from "./usePaginator";

const initialFilters = {
  family: "string",
};

const useProducts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState(initialFilters);
  const { page, size } = usePaginator(1, 100);

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    Promise.all([api.findBrands(), api.findCategories()])
      .then(reduce(mergeRight, {}))
      .then(res => {
        setCategories(res.categories);
        setBrands(res.brands);
      })
      .catch(err => {
        notifyUnexpectedError();
      });
  }, []);

  useEffect(() => {
    api
      .findProducts(filters, page, size)
      .then(res => {
        setProducts(res.products);
        setLoading(false);
      })
      .catch(ex => {
        console.log(ex);
        setError(true);
      });
  }, [filters, page, size]);

  return {
    loading,
    error,
    products,
    setFilters,
    categories,
    brands,
  };
};

export default useProducts;
