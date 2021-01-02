import Link from 'next/link';

export default function BulletinCard({ bulletin }) {
    const bulletinClass = 'grid-cell'/*  + (bulletin.isFeature ? ' feat-' + bulletin.isFeature : '') */,
        content = bulletin.content.replace(/\n/g, '<br/>');

    return (
        <div key={bulletin.id} className={bulletinClass}>
            {/* <div><img src={bulletin.thumbUrl} /></div> */}
            <div>
                <div>
                    <Link href={'/community/bulletins/' + bulletin.id}>
                        <a>{bulletin.title}</a>
                    </Link>
                </div>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
}