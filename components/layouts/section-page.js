import Head from 'next/head'
import Header from "../header";
import Menu from "../nav/menu";
import Footer from "../footer";

export default function SectionPageLayout({title=null, children}) {
    return (<>
        <Head>
            <title>{title && `${title} | `}Claremont Music Scene</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Header/>
        <Menu/>
        <section className="px-5 lg:px-24 bg-midnight">
            {children}
        </section>
        <Footer/>
    </>)
}