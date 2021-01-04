import Link from 'next/link';

export default function BulletinCard({ bulletin }) {
    const bulletinClass = 'grid-cell' + (bulletin.is_featured ? ' feat-' + bulletin.featured_order : ''),
        content = bulletin.content.replace(/\n/g, '<br/>');

    const contentSection = (<div>
        <div>
            <Link href={'/community/bulletins/' + bulletin.id}>
                <a className={'title'}>{bulletin.title}</a>
            </Link>
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>)

    return (
        <div key={bulletin.id} className={bulletinClass}>
            <div><Link href={'/community/bulletins/' + bulletin.id}><a><img src={bulletin.image} /></a></Link></div>
            {bulletin.meta && bulletin.meta.image_only ? '': contentSection }
        </div>
    );
}