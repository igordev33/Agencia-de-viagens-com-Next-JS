import Link from "next/link"
import styles from "./page.module.css"

export default function Home() {
  return (
      <main className={styles.main}>
        <h1 className={styles.main__title}>Viaje para Sentir, Descobrir e Viver Novos Horizontes</h1>
        <p className={styles.main__text}>Cada destino conta uma história e a próxima pode ser a sua. De praias paradisíacas a cidades históricas, embarque em experiências que transformam seu olhar sobre o mundo.</p>
        <Link href="/destinos" className={styles.main__link}>Clique aqui e conheça o destino da sua próxima viagem</Link>
      </main>
  );
}
