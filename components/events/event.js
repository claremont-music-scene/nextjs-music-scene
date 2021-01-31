import Link from 'next/link';
import dayjs from 'dayjs'

export default function Event({ e }) {
    const description = e.description ? e.description.replace(/\n/g, '<br/>') : null,
        contact = e.contact_info ? e.contact_info.replace(/\n/g, '<br/>') : null;

    const startDisplay = dayjs(e.start).format('dddd MMM D, ha')
    //TODO assumes same day end
    const endDisplay = e.end ? dayjs(e.end).format('ha') : ''


    return (
    <section className="text-gray-600 body-font bg-cream">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <h2 className="sm:text-3xl text-2xl text-black font-medium title-font mb-2 md:w-2/5">{e.title}</h2>
            <div className="md:w-3/5 md:pl-6">
                <p className="leading-relaxed text-base text-black">{e.description}</p>
            </div>
        </div>
        <div>
            <Link href='/community/events/'>
                <a>Back to events</a>
            </Link>
        </div>
    </section>
    );
}