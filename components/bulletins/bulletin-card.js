import Router from 'next/router';
import dayjs from 'dayjs';

export default function BulletinCard({ bulletin }) {
    const {
        meta,
        id,
        is_featured,
        featured_order,
        title,
        content,
        image,
        date_created,
        category
    } = bulletin,

        metadata = meta ? id >= 9 ? JSON.parse(meta) : meta : null, // temporarily complex

        bulletinClass = 'grid-cell clickable' + (is_featured ? ' feat-' + featured_order : ''),

        layout = metadata && metadata.image_only ? 'Full-SizeImage(nobackgroundortext)' : metadata && metadata.layout ? metadata.layout : 'NoImage', // temporarily complex

        onClickCard = () => {
            Router.push('/community/bulletins/' + id);
        },

        titleSection = <div className={'title'}>{title}</div>,

        metaSection = <div className={'meta'}>Posted {dayjs(date_created).format('MMM D')} {category && 'in ' + category.name}</div>,

        contentSection = <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }} />;

    let layoutHtml = <></>;

    switch (layout) {
        case 'Full-SizeImage(nobackgroundortext)':
            layoutHtml = <div className='image-only'><img src={image} /></div>;
            break;

        case 'Full-SizeImagewithTitleascaption':
            layoutHtml =
                <div className='overlay-wrap'>
                    <div className='overlay-img'><img src={image} /></div>
                    <div className='overlay-text'>{titleSection}</div>
                </div>;
            break;

        case 'SplitVerticalImageandText':
            layoutHtml =
                <div className='split-wrap vertical'>
                    <div className='image'><img src={image} /></div>
                    <div>{titleSection} {contentSection}</div>
                </div>;
            break;

        case 'SmallSquareThumbnailinCorner':
            layoutHtml =
                <div className='thumb-in-corner'>
                    <div className='image left'><img src={image} /></div>
                    <div>
                        {titleSection}
                        {metaSection}
                    </div>
                    <div className='clear-both'>{contentSection}</div>
                </div>;
            break;

        default:
            layoutHtml =
                <>
                    {image && <>
                        <div className='no-pad'><img src={image} /></div>
                        <div>
                            {titleSection}
                            {metaSection}
                        </div>
                        <div>{contentSection}</div>
                    </>}

                    {!image && <div className='no-pad no-image'>{titleSection} {metaSection} {contentSection}</div>}
                </>;
    }

    return (
        <div key={id} className={bulletinClass} onClick={onClickCard}>
            {layoutHtml}
        </div>
    );
}