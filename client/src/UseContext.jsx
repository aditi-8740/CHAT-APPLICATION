import { createContext, useState } from "react"

export const UserContext = createContext()

export const UseContextProvider = ({children}) => {
  const [username, setUsername] = useState(null)

  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  )
}

