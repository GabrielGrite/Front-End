function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const productService = ({ baseUrl }) => {
  const fetchProducts = async () => {
    //await sleep(1000)
    return await fetch("./furniture.json").then(response => response.json());
  };

  return { fetchProducts };
};

export default productService({ baseUrl: "http://locahost:8080" });
