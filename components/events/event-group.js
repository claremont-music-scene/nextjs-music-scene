import EventCard from './event-card';


export default function EventGroups({ heading, events }) {
    return (
        <div className='content-group'>
            <h2>{heading}</h2>
            {events.map(e => <EventCard key={e.event_id} event={e} />)}
        </div>
    );
}