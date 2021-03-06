import Router from 'next/router';
import dayjs from 'dayjs';

export default function BulletinCard({ bulletin }) {
    const {
        id,
        is_featured,
        featured_order,
        title,
        content,
        image,
        date_created,
        category,
        style
    } = bulletin,

        bulletinClass = 'grid-cell clickable' + (is_featured ? ' feat-' + featured_order : ''),

        layout = style.name,

        onClickCard = () => {
            Router.push('/community/bulletins/' + id);
        },

        titleSection = <div className={'title'}>{title}</div>,

        metaSection = <div className={'meta'}>Posted {dayjs(date_created).format('MMM D')} {category && 'in ' + category.name}</div>,

        contentSection = <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }} />;

    let layoutHtml = <></>;

    switch (layout) {
        case 'Full-Size Image (no background or text)':
            layoutHtml = <div className='image-only'><img src={image} /></div>;
            break;

        case 'Full-Size Image with Title as caption':
            layoutHtml =
                <div className='overlay-wrap'>
                    <div className='overlay-img'><img src={image} /></div>
                    <div className='overlay-text'>{titleSection}</div>
                </div>;
            break;

        case 'Split Vertical Image and Text':
            layoutHtml =
                <div className='split-wrap vertical'>
                    <div className='image'><img src={image} /></div>
                    <div>{titleSection} {contentSection}</div>
                </div>;
            break;

        case 'Small Square Thumbnail in Corner':
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