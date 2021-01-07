import Link from 'next/link'
import VenueList from "../../components/venues/venue-list";
import SingleColumnLayout from "../../components/layouts/single-column";

export async function getStaticProps() {
    const res = await fetch('http://dev.claremontmusicscene.com:8000/api/venues/')
    const venues = await res.json()
    return {props: {venues}}
}

export default function Events({venues}) {
    return (
        <SingleColumnLayout>
            <div className="container">Due
                to the Covid-19 Pandemic, events have been cancelled or postponed. Information on these pages
                may be inaccurate
                or out-of-date due to the circumstances. We will work to update and adapt the information
                accordingly as time progresses.
            </div>

            <section>
                <div className="posts">
                    <article><Link href="/events/series/" className="image"><a><img
                        sizes="(min-width: 30em) 43vw, 95vw" srcSet=", /events/technopagan_hu75e5cbecd5bcf498c2af6806ed763681_3245165_210x0_resize_q75_box.jpg 210w
, /events/technopagan_hu75e5cbecd5bcf498c2af6806ed763681_3245165_256x0_resize_q75_box.jpg 256w
, /events/technopagan_hu75e5cbecd5bcf498c2af6806ed763681_3245165_430x0_resize_q75_box.jpg 430w
, /events/technopagan_hu75e5cbecd5bcf498c2af6806ed763681_3245165_650x0_resize_q75_box.jpg 650w"
                        src="/events/technopagan.jpg" alt=""/></a></Link><h3>Series and Special Events</h3><p>Get
                        information about the different types of regular and special events around the area.
                        There’s usually a weekly event or a seasonal festival going on.</p>
                        <ul className="actions">
                            <li><Link href="/events/series/" className="button"><a>More</a></Link></li>
                        </ul>
                    </article>
                    <article><Link href="/events/open-mic/" className="image"><a><img
                        sizes="(min-width: 30em) 43vw, 95vw" srcSet=", /events/tabula-rasa-junction_hudcad328aef68e69a08021a92d3784262_1734167_210x0_resize_q75_box.jpg 210w
, /events/tabula-rasa-junction_hudcad328aef68e69a08021a92d3784262_1734167_256x0_resize_q75_box.jpg 256w
, /events/tabula-rasa-junction_hudcad328aef68e69a08021a92d3784262_1734167_430x0_resize_q75_box.jpg 430w
, /events/tabula-rasa-junction_hudcad328aef68e69a08021a92d3784262_1734167_650x0_resize_q75_box.jpg 650w"
                        src="/events/tabula-rasa-junction.jpg" alt=""/></a></Link><h3>Open Mics</h3><p>Find local open
                        mic events</p>
                        <ul className="actions">
                            <li><Link href="/events/open-mic/" className="button"><a>More</a></Link></li>
                        </ul>
                    </article>
                </div>
            </section>
            <section><h3>Event Planning</h3><p>Do you have an idea for an event or want to try something out?
                Take advantage of our network
                to help with
                planning and promotion.</p>
                <footer><Link href="/events/planning/" className="button icon solid fa-info-circle"><a>Find out
                    more</a></Link></footer>
            </section>
            <section>
                <h3>Venues Directory</h3>
                <VenueList venues={venues}/>
            </section>
        </SingleColumnLayout>

    )
}
