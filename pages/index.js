import Head from 'next/head'
import VolunteerTeaser from "../components/community/volunteer-teaser";
import NewsletterSignup from "../components/newsletter-signup";
import {apiGetter} from "../util/server";
import BulletinList from "../components/bulletins/bulletin-list";
import EventGroups from "../components/events/event-group";
import CardRowWithShadowContainer from "../components/cards/row-with-shadow-container";
import CategoryAndDescriptionCard from "../components/cards/category-and-description";
import NewsCardGrid from "../components/cards/news-card-grid";
import HeadlineCard from "../components/cards/headline";
import SectionPageLayout from "../components/layouts/section-page";
import {rollerDerby, reallySalmon} from "../components/cards/themes"

export async function getStaticProps() {
    const bulletins = await apiGetter('/bulletin_board/items/')
    const events = await apiGetter('/events/occurrence/')
    const news = await apiGetter('/news/')
    return {props: {bulletins, events}}
}

export default function Home({bulletins, events}) {
    return (
        <>
            <Head>
                <title>Claremont Music Scene</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <SectionPageLayout>
                <BulletinList bulletins={bulletins} length={3}/>

                <CardRowWithShadowContainer>
                    <CategoryAndDescriptionCard headline="First A Box" theme={reallySalmon}/>
                    <CategoryAndDescriptionCard headline="Then Another" theme={{bgColor: 'teal'}}/>
                    <CategoryAndDescriptionCard headline="Looks like we're on a roll here" theme={{bgColor: "cream"}}/>
                </CardRowWithShadowContainer>

                <CardRowWithShadowContainer>
                    <CategoryAndDescriptionCard headline="A second row" bgColor="pink-600" bgGradientFrom="red-light"
                                                bgGradientTo="skyblue"/>
                    <CategoryAndDescriptionCard headline="Row Row Row" bgColor="skyblue" bgGradientFrom="green"
                                                bgGradientTo="cream"/>
                    <CategoryAndDescriptionCard headline="Looks like we're on a row here" bgColor="green"/>
                </CardRowWithShadowContainer>

                <NewsCardGrid>
                    <HeadlineCard/>
                    <HeadlineCard/>
                    <HeadlineCard/>
                    <HeadlineCard/>
                </NewsCardGrid>

            </SectionPageLayout>
        </>
    )
}
