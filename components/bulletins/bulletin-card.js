import Router from 'next/router';

export default function BulletinCard({ bulletin }) {
    const { meta, id, is_featured, featured_order, title, content, image } = bulletin,
        metadata = meta ? id >= 18 ? JSON.parse(meta) : meta : null, // temporarily complex
        bulletinClass = 'grid-cell clickable' + (is_featured ? ' feat-' + featured_order : ''),
        layout = metadata && metadata.image_only ? 'Full-SizeImage(nobackgroundortext)' : metadata && metadata.layout || 'NoImage', // temporarily complex

        onClickCard = () => {
            Router.push('/community/bulletins/' + id);
        },

        imageSection = <div><img src={image} /></div>,

        titleSection = <div className={'title'}>{title}</div>,

        contentSection = <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }} />;

    let layoutHtml = <></>;

    switch (layout) {
        case 'Full-SizeImage(nobackgroundortext)':
            layoutHtml = imageSection;
            break;

        case 'Full-SizeImagewithTitleascaption':
            layoutHtml =
                <div className='overlay-wrap'>
                    <div className='overlay-img'>{imageSection}</div>
                    <div className='overlay-text'>{titleSection}</div>
                </div>;
            break;

        case 'SplitVerticalImageandText':
            layoutHtml =
                <div className='split-wrap vertical'>
                    <div>{imageSection}</div>
                    <div>{titleSection} {contentSection}</div>
                </div>;
            break;

        case 'SmallSquareThumbnailinCorner':
            layoutHtml =
                <div className='thumb-in-corner'>
                    <div className='img-wrap'>{imageSection}</div>
                    <div>{titleSection} {contentSection}</div>
                </div>;
            break;

        default:
            layoutHtml = <div>{imageSection} {titleSection} {contentSection}</div>;
    }

    return (
        <div key={id} className={bulletinClass} onClick={onClickCard}>
            {layoutHtml}
        </div>
    );
}