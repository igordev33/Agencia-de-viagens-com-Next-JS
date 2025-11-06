import { destinos } from "@/app/libs/destinos"
import styles from "./page.module.css"

type Params = {
    params: Promise<{
        id: string
    }>
}

async function DestinoDetails({ params }: Params) {
    const {id} = await params

    const destino = destinos.find(dados => dados.id === id);

    if (!destino) return <h1>Destino não encontrado</h1>

    return (
        <main className={styles.main}>
            <div className={styles.main__card}>
                <img src={destino.imagem} alt={`Imagem do seu destino em ${destino.nome}`} className={styles.card__image} />
                <div className={styles.card__textContainer}>
                    <h2 className={styles.card__title}>{destino.nome}</h2>
                    <p className={styles.card__text}>{destino.descricao}</p>
                    <button className={styles.card__button}>Agende a sua viagem</button>
                </div>
            </div>
        </main>
    )
}

export default DestinoDetails;