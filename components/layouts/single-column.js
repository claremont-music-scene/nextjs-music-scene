import HeaderSocialLinks from "../header-social-links";
import Link from "next/link";
import Nav from "../nav";
import Footer from "../footer";

export default function SingleColumnLayout({children}) {
return (
    <div id="wrapper">
        <div id="main">
            <div className="inner">
                <HeaderSocialLinks/>
                <p className="nav navmenu">
                    <Link href="/"><a>Home</a></Link>
                </p>
                {children}
            </div>
        </div>
        <div id="sidebar" className="inactive">
            <div className="inner">
                <Nav/>
                <Footer/>
            </div>
            <a href="#sidebar" className="toggle">Toggle</a>
        </div>
    </div>
)
}