import Link from 'next/link';
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

export default function EventCard({event}) {
    const eventClass = 'event-card'/*  + (event.isFeature ? ' feat-' + event.isFeature : '') *//* ,
        description = event.description ? event.description.replace(/\n/g, '<br/>') : null */;

    const startDate = dayjs(event.start).utc()
    const eventUrl = `/community/events/${event.event_id}/${startDate.year()}/${startDate.month()+1}/${startDate.date()}/${startDate.hour()}/${startDate.minute()}/${startDate.second()}`
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