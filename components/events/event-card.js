import Link from 'next/link';

export default function EventCard({ event }) {
    const eventClass = 'event-card'/*  + (event.isFeature ? ' feat-' + event.isFeature : '') *//* ,
        description = event.description ? event.description.replace(/\n/g, '<br/>') : null */;

    return (
        <div key={event.id} className={eventClass}>
            <div>
                <div>
                    <Link href={'/community/events/' + event.id}>
                        <a>{event.title}</a>
                    </Link>
                    <span> - {event.start}</span>
                    <span> - [Location>]</span>
                </div>
                {/* <div dangerouslySetInnerHTML={{ __html: description }} /> */}
            </div>
        </div>
    );
}