import Link from 'next/link';

export default function VenueList({venues}) {
    return (
        <ul className='style2'>
            {venues.map((venue) => (
                <li key={venue.slug}>
                    <Link
                        href={{
                            pathname: '/events/venues/[slug]',
                            query: venue.slug
                        }}>
                        <a>{venue.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}