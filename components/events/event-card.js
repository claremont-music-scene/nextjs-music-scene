import Link from 'next/link';
import {getSiteEventPath} from "../../util/events";

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
                    <span> - {event.start}</span>
                    <span> - [Location]</span>
                </div>
                {/* <div dangerouslySetInnerHTML={{ __html: description }} /> */}
            </div>
        </div>
    );
}