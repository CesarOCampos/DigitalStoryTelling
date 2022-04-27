import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../config/firebase'
import { getDisplayName } from 'next/dist/shared/lib/utils'

const AuthContext = createContext<any>({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  // console.log(user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid, //user password
          email: user.email, // user email
          displayName: user.displayName, //user name/displayname`
        })
      } else {
        setUser(null)
      }
      const errorMessage = " Failed to login";
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signup = (displayName: string, email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (displayName: string, email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}