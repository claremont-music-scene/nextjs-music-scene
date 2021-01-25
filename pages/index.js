import Head from 'next/head'
import HeaderSocialLinks from "../components/header-social-links";
import Footer from "../components/footer";
import Nav from "../components/nav";
import VolunteerTeaser from "../components/community/volunteer-teaser";
import NewsletterSignup from "../components/newsletter-signup";
import TwoColumnSection from "../components/layouts/two-column-section";
import {apiGetter} from "../util/server";
import BulletinList from "../components/bulletins/bulletin-list";
import EventGroups from "../components/events/event-group";

export async function getStaticProps() {
    const bulletins = await apiGetter('/bulletin_board/items/')
    const events = await apiGetter('/events/occurrence/')
    return {props: {bulletins, events}}
}

export default function Home({bulletins, events}) {
    return (
        <>
            <Head>
                <title>Claremont Music Scene</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div id="wrapper">
                <div id="main">
                    <div className="inner">
                        <HeaderSocialLinks/>

                        <p className="nav navmenu"></p>


                        <h2>Latest Bulletins</h2>
                        <BulletinList bulletins={bulletins} length={3}/>

                        <h2>Upcoming Events</h2>
                        <EventGroups events={events}/>

                        <TwoColumnSection>
                            <VolunteerTeaser/>
                            <NewsletterSignup/>
                        </TwoColumnSection>
                    </div>
                </div>
                <div id="sidebar" className="">
                    <div className="inner">
                        <Nav/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    )
}
