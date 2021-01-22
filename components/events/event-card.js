import Link from 'next/link';
import {getSiteEventPath} from "../../util/events";
import dayjs from "dayjs";

export default function EventCard({event}) {
    const eventClass = 'event-card'/*  + (event.isFeature ? ' feat-' + event.isFeature : '') *//* ,
        description = event.description ? event.description.replace(/\n/g, '<br/>') : null */;

    const eventUrl = `/community/events/${getSiteEventPath(event)}`
    return (
        <div key={event.event_id} className={eventClass}>
            <div>
                <div>
                    <Link href={eventUrl}>
                        <a>{event.title}</a>
                    </Link>
                    <span> - {dayjs(event.start).format('dddd MMM D, ha')}</span>
                    {event.location && <span> - {event.location}</span>}
                </div>
                {/* <div dangerouslySetInnerHTML={{ __html: description }} /> */}
            </div>
        </div>
    );
}