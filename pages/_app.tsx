import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/login.css'
import '../styles/dashdesign.css'
import '../styles/footstyle.css'
import '../styles/vid-sty.css'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../context/AuthContext';
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute'

const noAuthRequired = ['/', '/login', '/signup']

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <AuthContextProvider>
      <Navbar />
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
      <Footer></Footer>
    </AuthContextProvider>
  )
}

export default MyApp
