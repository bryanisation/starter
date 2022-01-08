import '../styles/globals.css'
import Typography from '../styles/Typography'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Typography />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
