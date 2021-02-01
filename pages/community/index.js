import Head from 'next/head'
import Link from 'next/link'
import SectionPageLayout from "../../components/layouts/section-page";

export default function Community() {
    return (<>
        <Head>
            <title>Community Information and Services | Claremont Music Scene Community</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

    <SectionPageLayout>

        <section className='text-cream'>
            <Link href={'/community/events'}><a>Events</a></Link>&nbsp;|&nbsp;
            <Link href={'/community/bulletins'}><a>Bulletin Board</a></Link>
        </section>

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
                        <div className="content"><h3><Link href="/community/music-stores/"><a>Music Stores</a></Link>
                        </h3><p>Instruments, equipment, repairs, connections to lessons</p><Link
                            className="button" href="/community/music-stores/"><a>Learn More</a></Link></div>
                    </article>
                    <article><span className="icon solid fa-hands-helping"></span>
                        <div className="content"><h3><Link href="/community/volunteering/"><a>Volunteering</a></Link>
                        </h3><p>Learn about volunteering makes CMS great</p><Link className="button"
                                                                               href="/community/volunteering/"><a>Learn
                            More</a></Link></div>
                    </article>
                    <article><span className="icon solid fa-school"></span>
                        <div className="content"><h3><Link href="/community/learning/"><a>Lessons</a></Link></h3>
                            <p>Directory to local tutors, teachers, classes</p><Link className="button"
                                                                                  href="/community/learning/"><a>Learn
                                More</a></Link></div>
                    </article>
                    <article><span className="icon solid fa-theater-masks"></span>
                        <div className="content"><h3><Link href="/community/performers/"><a>Performers</a></Link></h3>
                            <p>People, performers, audio clips maybe</p><Link className="button"
                                                                           href="/community/performers/"><a>Learn
                                More</a></Link></div>
                    </article>
                </div>
            </section>
        </section>
    </SectionPageLayout>
    </>)
}
