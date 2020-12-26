import Head from 'next/head'
import Link from 'next/link'
import HeaderSocialLinks from "../components/header-social-links";


//TODO
//migrate the Head items over
//convert to Links

export default function Home() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <HeaderSocialLinks/>
                    <p className="nav navmenu"></p>
                    <section id="banner">
                        <div className="content">
                            <header><h1>Claremont Music Scene</h1><p>A Community Project for Music in Claremont</p>
                            </header>
                        </div>
                        <span className="image object"><img src="/images/Mountain-Color-WhiteBorder.svg"
                        /></span></section>
                    <section>
                        <header className="major"><h2>Connect With The Community</h2></header>
                        <div className="features">
                            <article><span className="icon fa-calendar-alt"></span>
                                <div className="content"><h3><a href="/events/">Events Calendar &amp; Guide</a></h3>
                                    <p>Check out
                                        our <a href="/events/calendar/">events calendar</a> to find out what's happening
                                        in the area.
                                        Our <a href="/events/">guides</a> for ongoing events like open mics and music
                                        series performances
                                        will keep you
                                        informed.</p></div>
                            </article>
                            <article><span className="icon solid fa-graduation-cap"></span>
                                <div className="content"><h3><a href="/community/">Learning &amp; Lessons</a></h3>
                                    <p>Explore
                                        opportunities for learning: private lessons, group classes, music schools,
                                        recreational classes, etc.</p></div>
                            </article>
                            <article><span className="icon solid fa-bullhorn"></span>
                                <div className="content"><h3><a href="/events/planning/">Planning &amp; Promoting</a>
                                </h3><p>Planning
                                    an event or <a href="/events/planning/">have an idea</a>? We can help with finding
                                    venues,
                                    connecting with
                                    performers, and distributing information to our audience.</p></div>
                            </article>
                            <article><span className="icon solid fa-book-open"></span>
                                <div className="content"><h3>Information &amp; Archives</h3><p><a href="/news/">News
                                    articles</a>,
                                    photo and video galleries, event listings, venue
                                    information</p></div>
                            </article>
                        </div>
                    </section>
                    <div className="row">
                        <div className="col-6 col-12-small"><h3>Want to Help?</h3><span className="image left"><img
                            src="/images/Logo-black-and-white-no-text-110x75px.png"/></span><p>Have ideas? Like meeting
                            people?
                            Enjoy writing? Like event planning? Have some extra space for
                            people to use? A philanthropic itch?</p><p>Get more information about volunteering with
                            Claremont Music
                            Scene. <a href="/community/volunteering/"
                                      className="button primary large icon solid fa-hands-helping">I'm a Helper!</a></p>
                        </div>
                        <div className="col-6 col-12-small"><h3>Stay Connected</h3>
                            <div className="box"><p>Sign up for our newsletter to receive occasional news
                                and updates.</p>
                                <form method="post" name="newsletter-signup"><input type="hidden" name="form-name"
                                                                                    value="newsletter-signup"/>
                                    <div className="row gtr-uniform">
                                        <div className="col-12"><input type="email" name="demo-email" id="demo-email"
                                                                       placeholder="Email"
                                        />
                                        </div>
                                        <div className="col-12">
                                            <ul className="actions">
                                                <li><input type="submit" value="Sign Up" className="primary"/></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sidebar" className="">
                <div className="inner">
                    <nav id="menu">
                        <header className="major"><h2>Menu</h2></header>
                        <ul>
                            <li><a href="/">Welcome</a></li>
                            <li><a href="/news/">News</a></li>
                            <li><span className="opener">Events</span>
                                <ul>
                                    <li><a href="/events/">Guide</a></li>
                                    <li><a href="/events/series/">Series / Special Events</a></li>
                                    <li><a href="/events/open-mic/">Open Mic</a></li>
                                    <li><a href="/events/calendar/">Calendar</a></li>
                                    <li><a href="/events/venues/">Venue Guide</a></li>
                                    <li><a href="/events/planning/">Planning</a></li>
                                </ul>
                            </li>
                            <li><span className="opener">Community</span>
                                <ul>
                                    <li><a href="/community/">Overview</a></li>
                                    <li><a href="/community/volunteering/">Volunteer</a></li>
                                </ul>
                            </li>
                            <li><a href="/about/">About</a></li>
                        </ul>
                    </nav>
                    <footer id="footer"><p className="copyright">©2020 Claremont Music Scene. All rights reserved.</p>
                    </footer>
                </div>
                <a href="#sidebar" className="toggle">Toggle</a></div>
        </div>
    )
}
