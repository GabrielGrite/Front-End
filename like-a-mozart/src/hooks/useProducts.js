import { useEffect, useState } from "react"
import productService from "../api/productService"

const useProducts = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    productService.fetchProducts()
      .then(products => {
        setProducts(products)
        setLoading(false)
      })
      .catch(ex => {
        setError(true)
      })
  }, [])

  return { loading, error, products }
}

export default useProducts;