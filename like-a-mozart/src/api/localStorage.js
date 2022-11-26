const LOCAL_STORAGE_KEYS = {
  USER: "like-a-mozart-user",
}

export const storeAuthenticatedUser = authenticatedUser => {
  localStorage.setItem(LOCAL_STORAGE_KEYS.USER, JSON.stringify(authenticatedUser))
}

export const removeAuthenticatedUser = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.USER)
}

export const getAuthenticatedUser = () => {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.USER))
  } catch (ex) {
    return null
  }
}

