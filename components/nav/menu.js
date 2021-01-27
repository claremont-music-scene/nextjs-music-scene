import MenuAction from "./action";

export default function Menu() {
    return (



    <nav className="flex items-center justify-between flex-wrap bg-black border-t-4 border-b border-orange w-full">


        <div className="block lg:hidden">
            <button id="nav-toggle"
                    className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>
        </div>

        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0 hidden"
             id="nav-content">
            <ul className="list-reset lg:flex flex-1 items-center justify-center">
                <MenuAction href="/" title="Welcome"/>
                <MenuAction href="/news" title="News" hoverBg='blue'/>
                <MenuAction href="/events" title="Events" hoverBg='red'/>
                <MenuAction href="/community" title="Community" hoverBg='green'/>
                <MenuAction href="/about" title="About" hoverBg='pink'/>
            </ul>
        </div>
    </nav>)
}