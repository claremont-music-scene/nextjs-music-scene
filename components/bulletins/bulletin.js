import Link from 'next/link';

export default function Bulletin({ bulletin }) {
    const content = bulletin.content.replace(/\n/g, '<br/>');
    return (
        <div>
            <style jsx>{`
              div img { max-height: 100%; max-width: 100%}
            `}</style>
            <h1>{bulletin.title}</h1>
            <div><img src={bulletin.image} /></div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div>
                <Link href='/community/bulletins/'>
                    <a>Back to bulletins</a>
                </Link>
            </div>
        </div>
    );
}