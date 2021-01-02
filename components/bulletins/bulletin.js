import Link from 'next/link';

export default function Bulletin({ bulletin }) {
    return (
        <div>
            <h1>{bulletin.title}</h1>
            {/* <div><img src={bulletin.imageUrl} /></div> */}
            <div>{bulletin.content}</div>
            <div>
                <Link href='/community/bulletins/'>
                    <a>Back to bulletins</a>
                </Link>
            </div>
        </div>
    );
}