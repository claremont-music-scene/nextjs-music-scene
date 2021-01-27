import StoryLeftSidebar from "./left-sidebar";

export default function NewsContentSection({contentItem, sidebarItems}) {
    return (
        <section className="bg-black body-font lg:-mt-32">
            <div className="container px-5 mx-auto lg:pt-12 lg:pb-12 ">
                <div className="flex flex-col lg:flex-row lg:space-x-12">
                    <StoryLeftSidebar items={sidebarItems}/>
                    <div className="w-full px-4 mt-12 text-lg leading-none tracking-tight text-white lg:px-0 lg:w-3/4">
                        {contentItem.image && <img src={contentItem.image}/>}
                        {contentItem.body}
                    </div>
                </div>
            </div>
        </section>
    )
}