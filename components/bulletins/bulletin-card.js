import Router from 'next/router';


export default function BulletinCard({ bulletin }) {
    const { meta, id, is_featured, featured_order, title, content, image } = bulletin,
        bulletinClass = 'grid-cell clickable' + (is_featured ? ' feat-' + featured_order : ''),
        layout = meta && meta.image_only ? 'FullSizeImage(nobackgroundortext)' : meta && meta.layout || 'NoImage', // temporarily complex

        onClickCard = () => {
            Router.push('/community/bulletins/' + id);
        },

        imageSection = <div><img src={image} /></div>,

        titleSection = <div className={'title'}>{title}</div>,

        contentSection = <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }} />;

    let layoutHtml = <></>;

    console.log('🚀 ~ BulletinCard ~ layout', layout);

    switch (layout) {
        case 'FullSizeImage(nobackgroundortext)':
            layoutHtml = imageSection;
            break;
        default:
            layoutHtml = <>{imageSection} {titleSection} {contentSection}</>;
    }

    return (
        <div key={id} className={bulletinClass} onClick={onClickCard}>
            {layoutHtml}
        </div>
    );
}