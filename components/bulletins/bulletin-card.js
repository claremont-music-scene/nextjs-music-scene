import Link from 'next/link';

export default function BulletinCard({ bulletin }) {
    const bulletinClass = 'grid-cell' + (bulletin.is_featured ? ' feat-' + bulletin.featured_order : ''),
        content = bulletin.content.replace(/\n/g, '<br/>');

    return (
        <div key={bulletin.id} className={bulletinClass}>
            <div><img src={bulletin.image} /></div>
            <div>
                <div>
                    <Link href={'/community/bulletins/' + bulletin.id}>
                        <a className={'title'}>{bulletin.title}</a>
                    </Link>
                </div>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
}