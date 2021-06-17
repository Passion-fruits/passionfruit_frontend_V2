import { PlayBar } from '@src/components/public'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <PlayBar/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
