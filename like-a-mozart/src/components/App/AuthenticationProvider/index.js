import { createContext, useContext, useEffect, useState } from "react"
import { getAuthenticatedUser, removeAuthenticatedUser, storeAuthenticatedUser } from "../../../api/localStorage"

export const AuthContext = createContext()

export const useAuthContext = () => {
  return useContext(AuthContext)
}

const useAuthProvider = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null)

  const setAuthenticated = user => {
    storeAuthenticatedUser(user)
    setAuthenticatedUser(user)
  }

  const logout = () => {
    removeAuthenticatedUser()
    setAuthenticatedUser(null)
  }

  useEffect(() => {
    const user = getAuthenticatedUser();

    if (user) {
      setAuthenticated(user)
    }
  }, [])


  return { authenticated: !!authenticatedUser, authenticatedUser, logout, setAuthenticated  }
}

const AuthProvider = ({ children }) => {
  const userAuthentication = useAuthProvider()

  return (
    <AuthContext.Provider value={userAuthentication}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider