import Link from 'next/link';
import dayjs from 'dayjs'

export default function Event({ e }) {
    const description = e.description ? e.description.replace(/\n/g, '<br/>') : null,
        contact = e.contact_info ? e.contact_info.replace(/\n/g, '<br/>') : null;

    const startDisplay = dayjs(e.start).format('dddd MMM D, ha')
    //TODO assumes same day end
    const endDisplay = e.end ? dayjs(e.end).format('ha') : ''


    return (<>


        <div>
            <h1>{e.title}</h1>
            <h2>When</h2>
            <div className='content-group'>
                {startDisplay}
                {e.end && ' to ' + endDisplay}
            </div>
            {e.location && (<>
                <h2>Where</h2>
                <div className='content-group'>
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
            </>)}
            {description && <>
                <h2>Description</h2>
                <div className='content-group'
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </>}
            {contact && <>
                <h2>Contact</h2>
                <div className='content-group'
                    dangerouslySetInnerHTML={{ __html: contact }}
                />
            </>}
            <div>
                <Link href='/community/events/'>
                    <a>Back to events</a>
                </Link>
            </div>
        </div>

    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <h2 className="sm:text-3xl text-2xl text-pink font-medium title-font mb-2 md:w-2/5">{e.title}</h2>
            <div className="md:w-3/5 md:pl-6">
                <p className="leading-relaxed text-base text-cream">{e.description}</p>
            </div>
        </div>
    </section>
    </>);
}