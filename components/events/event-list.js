import EventCard from './event-card';

export default function EventList({ events }) {
    console.log('🚀 ~ EventList ~ events', events);
    return (
        <div>
            <h1>Current Events</h1>
            {events.map(e => <EventCard event={e} />)}
        </div>
    );
}