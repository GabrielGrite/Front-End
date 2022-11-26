import { createWebClient } from "../lib/web-client"

const api = webClient => ({
  login: (email, password) => webClient.post("/users/login", { email, password }),
  signup: user => webClient.post("/users", user)
})

export default api(createWebClient({ baseUrl: "http://localhost:3000" }))

