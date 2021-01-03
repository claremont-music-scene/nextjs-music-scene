import Link from 'next/link';

export default function Event({ e }) {
    const description = e.description ? e.description.replace(/\n/g, '<br/>') : null,
        contact = e.contact_info ? e.contact_info.replace(/\n/g, '<br/>') : null;

    return (
        <div>
            <h1>{e.event_name}</h1>
            <h2>When</h2>
            <div className='event-detail-group'>
                {e.start_date}
                {e.end_date && ' to ' + e.end_date}
            </div>
            <h2>Where</h2>
            <div className='event-detail-group'>
                {e.street && <div>{e.street}</div>}
                <div>
                    {e.city && e.city}
                    {e.city && e.state && ', '}
                    {e.state && e.state}
                    {e.state && e.zip && ' '}
                    {e.zip && e.zip}
                </div>
                {e.lat && e.long && <div>
                    <a target='_blank' href={`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.long}`}>Find this location on Google Maps</a>
                </div>}
            </div>
            {description && <>
                <h2>Description</h2>
                <div className='event-detail-group'
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </>}
            {contact && <>
                <h2>Contact</h2>
                <div className='event-detail-group'
                    dangerouslySetInnerHTML={{ __html: contact }}
                />
            </>}
            <div>
                <Link href='/community/events/'>
                    <a>Back to events</a>
                </Link>
            </div>
        </div>
    );
}