import SignupBanner from "../subscription-banner";
import Menu from "../nav/menu";
import Footer from "../footer";
import DetailHeader from "./detail-header";

export default function DetailPage({headline, children}) {
    return (<>
        <Menu/>
        <DetailHeader headline={headline} author="Brian"/>
        {children}
        <SignupBanner/>
        <Footer/>
    </>)
}