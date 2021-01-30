import Link from 'next/link';
import {getSiteEventPath} from "../../util/events";
import dayjs from "dayjs";

export default function EventCard({event}) {

    //TODO
    event.location = "TODO Location"
    const eventUrl = `/community/events/${getSiteEventPath(event)}`
    return (

        <div key={event.event_id} className="p-8 flex flex-wrap md:flex-nowrap bg-cream">

            <div className="md:w-32 md:mb-0 mb-6 flex flex-col flex-shrink-0 bg-orange-light text-center justify-center">
                    <span className="font-semibold title-font text-black">{dayjs(event.start).format('dddd')}</span>
                <span className="font-semibold title-font text-black">{dayjs(event.start).format('MMM')}</span>
                <span className="font-semibold title-font text-black text-3xl">{dayjs(event.start).format('D')}</span>

            </div>

            <div className="md:flex-grow px-4">
                <h2 className="text-3xl font-medium title-font mb-2">{event.title}</h2>
                {event.location && <p className="text-gray">{event.location}</p>}
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