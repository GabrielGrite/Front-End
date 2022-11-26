import { createWebClient } from "../lib/web-client"

const api = webClient => ({
  login: (email, password) => webClient.post("/users/login", { email, password }),
  signup: user => webClient.post("/users", user)
})

export default api(createWebClient({ baseUrl: process.env.REACT_APP_LIKE_A_MOZART_API_BASE_URL }))

