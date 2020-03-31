import React, { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

export default function UserContextProvider(props) {
  const [user, setUser] = useState(null)

  const fetchUser = async () => {
    let res = await fetch('/auth/whoami')
    try {
      res = await res.json()
      setUser(res)
      console.log(res);
    } catch {
      console.log('Not logged in');
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const values = {
    user,
    fetchUser,
    setUser
  }

  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  )
}