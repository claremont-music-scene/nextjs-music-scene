import Link from 'next/link'
import HeaderSocialLinks from "../../components/header-social-links";
import Nav from "../../components/nav";
import Footer from "../../components/footer";

export default function Community() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <HeaderSocialLinks/>
                    <p className="nav navmenu"><span><a
                        href="/">Home</a> &nbsp; &nbsp;</span></p>
                    <section>
                        <header className="main"><h2>Community and Connections</h2></header>
                        <p>The Community is where we bring together the different foundational elements that a
                            thriving arts and music scene should have: education, supplies, space, and participants.
                            Through these lenses we can recognize different pieces of the puzzle such as
                            music stores, tutors and teachers, performance and creative venues, musicians, volunteers,
                            and supporters.</p>
                        <section>
                            <div className="features volunteering">
                                <article><span className="icon solid fa-guitar"></span>
                                    <div className="content"><h3><a href="/community/music-stores/">Music Stores</a>
                                    </h3><p>Instruments, equipment, repairs, connections to lessons</p><a
                                        className="button" href="/community/music-stores/">Learn More</a></div>
                                </article>
                                <article><span className="icon solid fa-hands-helping"></span>
                                    <div className="content"><h3><a href="/community/volunteering/">Volunteering</a>
                                    </h3><p>Learn about volunteering makes CMS great</p><a className="button"
                                                                                           href="/community/volunteering/">Learn
                                        More</a></div>
                                </article>
                                <article><span className="icon solid fa-school"></span>
                                    <div className="content"><h3><a href="/community/learning/">Lessons</a></h3>
                                        <p>Directory to local tutors, teachers, classes</p><a className="button"
                                                                                              href="/community/learning/">Learn
                                            More</a></div>
                                </article>
                                <article><span className="icon solid fa-theater-masks"></span>
                                    <div className="content"><h3><a href="/community/performers/">Performers</a></h3>
                                        <p>People, performers, audio clips maybe</p><a className="button"
                                                                                       href="/community/performers/">Learn
                                            More</a></div>
                                </article>
                            </div>
                        </section>
                    </section>
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
