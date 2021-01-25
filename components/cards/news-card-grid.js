import HeadlineCard from "./headline";

export default function NewsCardGrid({children}) {
    return (
        <div className="container w-full py-10 mx-auto ">
            <div className="bg-white shadow-green">
                <div className="flex flex-wrap p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}