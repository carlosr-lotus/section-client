import styles from "./Header.module.css";

export default function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>/s</div>
            <input type="text" placeholder="Search..." className={styles.search}/>
        </header>
    )
}