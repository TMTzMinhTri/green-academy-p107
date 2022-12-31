import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { auth, facebookProvider } from './libs/firebase'
import { Button, Spinner } from 'reactstrap'
import AppRoutes from './AppRoutes'

function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  const onSignOut = async () => {
    await signOut(auth)
  }
  console.log(user)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })
  }, [])

  return (
    loading
      ? <Spinner />
      : <AppRoutes currentUser={user} />
  )
}

export default App
