import Layout from '../common/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }) {
  console.log(pageProps, "pageprops");
  return(

    <Layout footerstatus={pageProps.footerstatus}>
      <Component {...pageProps} />
    </Layout>
  ) 
}


export default MyApp
