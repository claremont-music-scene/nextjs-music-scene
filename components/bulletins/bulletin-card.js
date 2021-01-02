import Link from 'next/link';

export default function BulletinCard({ bulletin }) {
    const bulletinClass = 'grid-cell'/*  + (bulletin.isFeature ? ' feat-' + bulletin.isFeature : '') */,
        bulletinId = bulletin.id;

    return (
        <div key={bulletinId} className={bulletinClass}>
            {/* <div><img src={bulletin.thumbUrl} /></div> */}
            <div>
                <div>
                    <Link href={'/community/bulletins/' + bulletinId}>
                        <a>{bulletin.title}</a>
                    </Link>
                </div>
                <div>{bulletin.content}</div>
            </div>
        </div>
    );
}