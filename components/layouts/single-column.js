import HeaderSocialLinks from "../header-social-links";
import Link from "next/link";
import Nav from "../nav";
import Footer from "../footer";
import {useRouter} from "next/router";

export default function SingleColumnLayout({children}) {
    const router = useRouter()
    const parts = router.pathname.split('/')
    let crumbs = []
    if (parts.length > 2) {
        crumbs.push(parts[1])
    }

    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <HeaderSocialLinks />
                    <p className="nav navmenu">
                        <Link href="/"><a>Home</a></Link>
                        {crumbs.map((crumb, idx) => {
                            return (<span key={idx}>&nbsp;
                                    <Link href={`/${crumb}/`}>
                                    <a>{crumb}</a>
                                </Link></span>
                            )
                        })}
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