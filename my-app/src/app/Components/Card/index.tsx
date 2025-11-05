import { Trip } from "@/app/types/Types"
import Image from "next/image";
import styles from "./Card.module.css"
import Link from "next/link"

type Props = {
    trip: Trip
}

const Card = ({ trip }: Props) => {

    return (
        <div className={styles.card}>
            <Image src={trip.imagem} alt={`Imagem de ${trip.nome}`} width={200} height={200} className={styles.card__image} />
            <div>
                <h3 className={styles.card__title}>{trip.nome}</h3>
                <p className={styles.card__text}>{trip.descricao}</p>
            </div>
            <Link className={styles.card__button} href={`/destinos/${trip.id}`}>Agende a sua viagem</Link>
        </div>
    )
}

export default Card;