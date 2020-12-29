import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav() {

    return (
        <nav id="menu">
            <header className="major"><h2>Menu</h2></header>
            <ul>
                <li><Link href="/"><a>Welcome</a></Link></li>
                <li><Link href="/news/"><a>News</a></Link></li>
                <li><Link href="/events/"><a>Events</a></Link></li>
                <li><Link href="/community/"><a>Community</a></Link></li>
                <li><Link href="/about/"><a>About</a></Link></li>
            </ul>
        </nav>
    )
}