import styles from './layout.module.css'
import Nav from './nav'

export default function Layout({ children }) {
    return <div className={styles.container}><Nav/>{children}</div>
}
