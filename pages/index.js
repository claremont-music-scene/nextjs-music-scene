import Head from 'next/head'
import VolunteerTeaser from "../components/community/volunteer-teaser";
import NewsletterSignup from "../components/newsletter-signup";
import {apiGetter} from "../util/server";
import BulletinList from "../components/bulletins/bulletin-list";
import NewsCardGrid from "../components/cards/news-card-grid";
import SectionPageLayout from "../components/layouts/section-page";
import UpcomingEvents from "../components/events/upcoming-events";
import SignupBanner from "../components/subscription-banner";

export async function getStaticProps() {
    const bulletins = await apiGetter('/bulletin_board/items/')
    const events = await apiGetter('/events/occurrence/')
    const news = await apiGetter('/news/')
    return {props: {bulletins, events, news}}
}

export default function Home({bulletins, events, news}) {
    return (
        <>
            <Head>
                <title>Claremont Music Scene</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <SectionPageLayout>
                <BulletinList bulletins={bulletins} length={3}/>
                <UpcomingEvents events={events}/>
                <NewsCardGrid news={news}/>
                <SignupBanner/>
            </SectionPageLayout>
        </>
    )
}
