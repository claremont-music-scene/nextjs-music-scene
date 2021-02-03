import SignupBanner from "../subscription-banner";
import Menu from "../nav/menu";
import Footer from "../footer";
import DetailHeader from "./detail-header";
import Head from "next/head";

export default function DetailPage({title=null, headline, children}) {
    return (<>
        <Head>
            <title>{title && `${title} | `}Claremont Music Scene</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Menu/>
        <DetailHeader headline={headline} author="Brian"/>
        {children}
        <SignupBanner/>
        <Footer/>
    </>)
}