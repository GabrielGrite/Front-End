import { createWebClient } from "../lib/web-client";

const api = webClient => ({
  login: (email, password) =>
    webClient.post("/users/login", { email, password }),
  signup: user => webClient.post("/users", user),
  findCategories: () => webClient.get("/categories"),
  findBrands: () => webClient.get("/brands"),
  findProducts: (filters, page, size) => webClient.get("/products", {...filters, page, size })
});

export default api(
  createWebClient({ baseUrl: process.env.REACT_APP_LIKE_A_MOZART_API_BASE_URL })
);
