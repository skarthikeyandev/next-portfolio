import '../styles/globals.css'
import '../css/style.css'
import Layout from './Layout/index'
function MyApp({ Component, pageProps }) {
  return (<Layout><Component {...pageProps} /></Layout>)
}

export default MyApp
