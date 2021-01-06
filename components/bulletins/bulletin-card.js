// import Link from 'next/link';
import Router from 'next/router';


export default function BulletinCard({ bulletin }) {
    const bulletinClass = 'grid-cell clickable' + (bulletin.is_featured ? ' feat-' + bulletin.featured_order : ''),
        content = bulletin.content.replace(/\n/g, '<br/>'),
        { meta } = bulletin,
        layout = meta && meta.image_only ? 'FullSizeImage(nobackgroundortext)' : meta && meta.layout || 'NoImage',
        bulletinUrl = '/community/bulletins/' + bulletin.id,

        onClickCard = () => {
            Router.push(bulletinUrl);
        },

        contentSection =
            <div>
                <div className={'title'}>{bulletin.title}</div>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>;

    return (
        <div key={bulletin.id} className={bulletinClass} onClick={onClickCard}>
            <div><img src={bulletin.image} /></div>
            {layout !== 'FullSizeImage(nobackgroundortext)' && contentSection}
        </div>
    );
}