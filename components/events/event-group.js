import EventCard from './event-card';


export default function EventGroups({ heading, events }) {
    return (
        <div>
            <h2>{heading}</h2>
            {events.map(e => <EventCard key={e.id} event={e} />)}
        </div>
    );
}