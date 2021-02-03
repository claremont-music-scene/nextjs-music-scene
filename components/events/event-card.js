import Link from 'next/link';
import {getSiteEventPath} from "../../util/events";
import dayjs from "dayjs";

export default function EventCard({event}) {

    let eventUrl = null
    if (event.external_url) {
        eventUrl = event.external_url
    } else if (event.use_detail_page) {
        eventUrl = `/events/${getSiteEventPath(event)}`
    }


    return (
        <div key={event.event_id} className="px-2 py-8 flex flex-nowrap bg-cream">

            <div className="md:w-32 md:mb-0 mb-6 px-2 flex flex-col flex-shrink text-center justify-center">
                <span className="font-semibold title-font text-black uppercase">{dayjs(event.start).format('ddd')}</span>
                <span className="font-semibold title-font text-black uppercase">{dayjs(event.start).format('MMM')}</span>
                <span className="font-semibold title-font text-black text-3xl">{dayjs(event.start).format('DD')}</span>
            </div>

            <div className="md:flex-grow px-4">
                <h2 className="text-lg md:text-3xl font-medium title-font mb-2">{event.title}</h2>
                {event.location && <p className="text-gray">{event.location}</p>}
                {eventUrl &&
                    <Link href={eventUrl}><a className="inline-flex items-center mt-4">Details
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                             strokeWidth="2" fill="none" strokeLinecap="round"
                             strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a></Link>}
            </div>
        </div>
    );
}