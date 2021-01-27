import HeadlineCard from "./headline";

export default function NewsCardGrid({news}) {
    return (
        <div className="container w-full py-10 mx-auto ">
            <div className="bg-cream shadow-green">
                <div className="flex flex-wrap p-4">
                    {news.map(n => <HeadlineCard headline={n.title} path={`/news/${n.id}`}/>)}
                </div>
            </div>
        </div>
    )
}