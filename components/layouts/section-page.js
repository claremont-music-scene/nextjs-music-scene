import Header from "../header";
import Menu from "../nav/menu";
import Footer from "../footer";

export default function SectionPageLayout({children}) {
    return (<>
        <Header/>
        <Menu/>
        <section className="px-5 lg:px-24 bg-midnight">
            {children}
        </section>
        <Footer/>
    </>)
}