import {useState} from 'react'
import MenuAction from "./action";


export default function Menu() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const handleMenuOpener = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
    const showCommunity = false
    const showAbout = false
    const menuItemListStyle = `w-full flex-grow md:flex md:items-center md:w-auto md:block pt-6 md:pt-0${hamburgerOpen ? "": " hidden"}`

    return (
    <nav className="flex items-center justify-between flex-wrap bg-black border-t-4 border-b border-orange w-full">
        <div className="block md:hidden">
            <button id="nav-toggle"
                    onClick={handleMenuOpener}
                    className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>
        </div>
        <div className={menuItemListStyle}>
            <ul className="list-reset md:flex flex-1 items-center justify-center">
                <MenuAction href="/" title="Welcome"/>
                <MenuAction href="/news" title="News" hoverBg='blue'/>
                <MenuAction href="/events" title="Events" hoverBg='red'/>
                {showCommunity && <MenuAction href="/community" title="Community" hoverBg='green'/>}
                {showAbout && <MenuAction href="/about" title="About" hoverBg='pink'/>}
            </ul>
        </div>
    </nav>)
}