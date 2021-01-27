import {apiGetter} from "../../util/server";
import DetailPage from "../../components/layouts/detail-page";
import NewsContentSection from "../../components/news/detail";

export async function getStaticPaths() {
    const allPosts = await apiGetter('/news')
    //TODO update for slug
    const paramList = allPosts.map(p => ({params: {slug: p.id.toString()}}))
    return {
        paths: paramList,
        fallback: false
    };
}

//TODO API needs update to accept slug lookup so slug is ID
export async function getStaticProps({params}) {
    const post = await apiGetter(`/news/${params.slug}`)
    const allPosts = await apiGetter('/news')
    return {props: {post: post, related: allPosts.slice(0, 2)}}
}


export default function NewsPost({post, related}) {
    return (
        <DetailPage headline={post.title}>
            <NewsContentSection contentItem={post} sidebarItems={related}/>
        </DetailPage>
    )
}