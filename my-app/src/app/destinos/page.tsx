import { destinos } from "@/app/libs/destinos"
import { Trip } from "../types/Types";
import Card from "../Components/Card";
import styles from "./Destinos.module.css"

const Destinos = () => {

    const ListaDeDestinos: Trip[] = destinos

    return (
        <main className={styles.main}>
            <div className={styles.main__container}>
                {ListaDeDestinos.map((dados) => <Card trip={dados} key={dados.id} />)}
            </div>
        </main>
    )
}

export default Destinos;