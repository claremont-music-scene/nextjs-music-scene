import BulletinCard from './bulletin-card';
import styles from './bulletin-list.module.css'

export default function BulletinList({ bulletins, length=null }) {
    if (length) {
        bulletins = bulletins.slice(0, length)
    }
    return (
        <div className={`grid-wrap ${styles.bulletin_board}`}>
            {bulletins.map(b => <BulletinCard key={b.id} bulletin={b} />)}
        </div>
    );
}