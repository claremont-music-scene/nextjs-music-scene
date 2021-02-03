import Link from 'next/link';

export default function Event({ event }) {
    const description = event.description ? event.description.replace(/\n/g, '<br/>') : null

    return (
    <section className="text-gray-600 body-font bg-cream">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <h2 className="sm:text-3xl text-2xl text-black font-medium title-font mb-2 md:w-2/5">{event.title}</h2>
            <div className="md:w-3/5 md:pl-6">
                <p className="leading-relaxed text-base text-black">{description}</p>
            </div>
        </div>
        <div>
            <Link href='/events/'>
                <a>Back to events</a>
            </Link>
        </div>
    </section>
    )
}