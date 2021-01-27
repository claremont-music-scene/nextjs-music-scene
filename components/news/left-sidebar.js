import Link from 'next/link'

export default function StoryLeftSidebar({items}) {
    return (<>
        <div className="w-full max-w-screen-sm m-auto mt-12 lg:w-1/4">

        {items.map(i => {
            //TODO slug
            const path = `/news/${i.id}`
            return (<div className="px-5">
                <div className="flex h-full">
                    <div className="w-full py-4 bg-black">
                        <div className="mb-1 bg-black">
                            <Link href={path}><a><h1
                                className="py-4 text-2xl font-black leading-none tracking-tighter text-transparent uppercase bg-gradient-to-tr from-blue to-pink bg-clip-text">
                                “{i.title}”
                            </h1></a></Link>
                        </div>
                        <h1 className="py-4 mb-3 text-lg font-medium text-white uppercase border-b border-pink">
                            News
                            <small className="text-xs text-pink ">
                                <span className="text-gray-500">BY</span>
                                Brian
                            </small>
                        </h1>
                        <p className="my-4 font-medium leading-none tracking-tighter text-white">
                            TODO teaser text</p>

                    </div>
                </div>
            </div>)
        })}
        </div>
    </>)




}