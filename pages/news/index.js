import SectionPageLayout from "../../components/layouts/section-page";
import NewsCardGrid from "../../components/cards/news-card-grid";
import {apiGetter} from "../../util/server";
import CardFullWidthImageLeft from "../../components/cards/_fullwidth-image-left";


export async function getStaticProps() {
    const news = await apiGetter('/news/')
    return {props: {news}}
}


export default function News({news}) {
    return (
        <SectionPageLayout title="News">
            <CardFullWidthImageLeft/>
            <NewsCardGrid news={news}/>
        </SectionPageLayout>
    )
}
