export default function Nav() {
    return (
        <nav id="menu">
            <header className="major"><h2>Menu</h2></header>
            <ul>
                <li><a href="/">Welcome</a></li>
                <li><a href="/news/">News</a></li>
                <li><span className="opener">Events</span>
                    <ul>
                        <li><a href="/events/">Guide</a></li>
                        <li><a href="/events/series/">Series / Special Events</a></li>
                        <li><a href="/events/open-mic/">Open Mic</a></li>
                        <li><a href="/events/calendar/">Calendar</a></li>
                        <li><a href="/events/venues/">Venue Guide</a></li>
                        <li><a href="/events/planning/">Planning</a></li>
                    </ul>
                </li>
                <li><span className="opener">Community</span>
                    <ul>
                        <li><a href="/community/">Overview</a></li>
                        <li><a href="/community/volunteering/">Volunteer</a></li>
                    </ul>
                </li>
                <li><a href="/about/">About</a></li>
            </ul>
        </nav>
    )
}