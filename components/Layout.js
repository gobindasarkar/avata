
import HeadContent from "./HeadContent";
import Header from "./Header";
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <HeadContent />
            <Header />
            <main className="main-section">{children}</main>
            <Footer />
        </>
    )
}
