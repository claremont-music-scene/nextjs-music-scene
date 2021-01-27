import Link from 'next/link';
import {getSiteEventPath} from "../../util/events";
import dayjs from "dayjs";

export default function EventCard({event}) {


    const eventUrl = `/community/events/${getSiteEventPath(event)}`
    return (

        <div key={event.event_id} className="p-8 flex flex-wrap md:flex-nowrap bg-red">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-black bg-cream p-4">MUSIC</span>
                <span className="mt-1 text-black bg-orange-light text-sm p-2">{dayjs(event.start).format('dddd MMM D, ha')}</span>
            </div>
            <div className="md:flex-grow px-4">
                <h2 className="text-5xl font-medium title-font mb-2">{event.title}</h2>
                {event.location && <p>{event.location}</p>}
                <Link href={eventUrl}><a className="inline-flex items-center mt-4">Details
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                         strokeWidth="2" fill="none" strokeLinecap="round"
                         strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a></Link>
            </div>
        </div>
    );
}