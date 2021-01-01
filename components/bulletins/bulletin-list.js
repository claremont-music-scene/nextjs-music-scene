import BulletinCard from './bulletin-card';

export default function BulletinList({ bulletins }) {
    return (
        <div className='grid-wrap'>
            {bulletins.map((b, idx) => <BulletinCard key={idx} bulletin={b} idx={idx} />)} {/* need dynamic id */}
        </div>
    );
}