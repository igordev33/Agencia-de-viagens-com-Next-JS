import Link from "next/link";
import styles from "./Header.module.css"

type Props = {
    text: string
}

const Header = ({ text }: Props) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>{text}</h1>
            <nav className={styles.header__nav}>
                <Link href="/" className={styles.header__link}>Home</Link>
                <Link href="/destinos" className={styles.header__link}>Destinos</Link>
            </nav>
        </header>
    )
}

export default Header;