import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/login.css'
import '../styles/dashdesign.css'
import '../styles/footstyle.css'
import '../styles/vid-sty.css'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
