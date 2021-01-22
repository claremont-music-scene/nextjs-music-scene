import Link from "next/link";

export default function OverviewBox() {
    return (
        <section>
            <header className="major"><h2>Connect With The Community</h2></header>
            <div className="features">
                <article><span className="icon fa-calendar-alt"></span>
                    <div className="content"><h3><Link href="/events/"><a>Events
                        Calendar &amp; Guide</a></Link></h3>
                        <p>Check out
                            our <Link href="/events/calendar/"><a>events calendar</a></Link> to find out
                            what's happening
                            in the area.
                            Our <Link href="/events/"><a>guides</a></Link> for ongoing events like open
                            mics and music
                            series performances
                            will keep you
                            informed.</p></div>
                </article>
                <article><span className="icon solid fa-graduation-cap"></span>
                    <div className="content"><h3><Link href="/community/"><a>Learning &amp; Lessons</a></Link>
                    </h3>
                        <p>Explore
                            opportunities for learning: private lessons, group classes, music schools,
                            recreational classes, etc.</p></div>
                </article>
                <article><span className="icon solid fa-bullhorn"></span>
                    <div className="content"><h3><Link
                        href="/events/planning/"><a>Planning &amp; Promoting</a></Link>
                    </h3><p>Planning
                        an event or <Link href="/events/planning/"><a>have an idea</a></Link>? We can
                        help with finding
                        venues,
                        connecting with
                        performers, and distributing information to our audience.</p></div>
                </article>
                <article><span className="icon solid fa-book-open"></span>
                    <div className="content"><h3>Information &amp; Archives</h3><p><Link
                        href="/news/"><a>News
                        articles</a></Link>,
                        photo and video galleries, event listings, venue
                        information</p></div>
                </article>
            </div>
        </section>
    )
}