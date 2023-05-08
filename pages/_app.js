import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || ((page) => page.children);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}
