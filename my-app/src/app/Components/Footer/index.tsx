import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer__text}>© 2025 Igor Ferreira Sampaio. Todos os direitos reservados</p>
            <p className={styles.footer__text}>Site desenvolvido por <a href="wa.me/+5562983091240" target="_blank" className={styles.footer__link}>Igor Ferreira Sampaio</a></p>
        </footer>
    )
}

export default Footer;