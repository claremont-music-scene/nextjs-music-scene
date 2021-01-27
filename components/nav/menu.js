import MenuAction from "./action";

export default function Menu() {
    return (
        <div className="w-full bg-black border-t-4 border-b border-orange">
            <div
                 className="flex flex-col max-w-screen-xl px-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-10">

                <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:flex-row lg:ml-10">
                   <MenuAction href="/" title="Welcome"/>
                    <MenuAction href="/news" title="News" hoverBg='blue'/>
                    <MenuAction href="/events" title="Events" hoverBg='red'/>
                    <MenuAction href="/community" title="Community" hoverBg='green'/>
                    <MenuAction href="/about" title="About" hoverBg='pink'/>
                </nav>
            </div>
        </div>
    )
}