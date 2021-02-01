import HeadlineCard from "./headline";
import SectionWithHeader from "../layouts/section-with-header";

export default function NewsCardGrid({news}) {
    return (
        <SectionWithHeader header={"Latest News"}>
            <div className="flex flex-wrap p-4">
                {news.map(n => <HeadlineCard key={n.id} headline={n.title} path={`/news/${n.id}`}/>)}
            </div>
        </SectionWithHeader>
    )
}