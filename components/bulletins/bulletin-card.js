import Link from 'next/link';

export default function BulletinCard({ bulletin, idx }) {
    const bulletinClass = 'grid-cell'/*  + (bulletin.isFeature ? ' feat-' + bulletin.isFeature : '') */,
        bulletinId = bulletin.id || idx + 1; // need dynamic id

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