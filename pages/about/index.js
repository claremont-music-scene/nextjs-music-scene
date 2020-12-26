import Link from 'next/link'
import HeaderSocialLinks from "../../components/header-social-links";
import Nav from "../../components/nav";
import Footer from "../../components/footer";

export default function About() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <HeaderSocialLinks/>
                    <p className="nav navmenu"><span><a
                        href="/">Home</a> &nbsp; &nbsp;</span></p>
                    <section>
                        <header className="main"><h2>About Us</h2></header>
                        <p>Claremont Music Scene was created with a purpose of elevating the music and arts community in
                            and
                            around Claremont, CA.
                            By creating a network of like minded people and a set of tools and channels for managing an
                            organic community,
                            the music scene becomes a product of those who are a part of it. Whether you’re a performer,
                            educator, venue, or a fan -
                            Claremont Music Scene has something for you. Our events calendar keeps you up-to-date on
                            what’s
                            happening around town.
                            Use our social media channels and web presence to promote your gigs, fill your classes and
                            to
                            connect with others.</p></section>
                    <div className="container">The
                        music scene grows in vibrancy as the sum of its members.<br/>A beautiful organic orchestra; a
                        choir of the commons.
                    </div>
                </div>
            </div>
            <div id="sidebar" className="inactive">
                <div className="inner">
                    <Nav/>
                    <Footer/>
                </div>
                <a href="#sidebar" className="toggle">Toggle</a></div>
        </div>
    )
}
