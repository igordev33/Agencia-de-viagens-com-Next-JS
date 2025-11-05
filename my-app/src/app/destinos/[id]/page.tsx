import { destinos } from "@/app/libs/destinos"
import { Trip } from "@/app/types/Types"

type Params = {
    params: {
        id: string
    }
}

async function DestinoDetails({ params }: Params) {
    const destino: Trip = destinos.find((dados) => dados.id === params.id)!

    console.log(destino)

    if (!destino) return <h1>Destino não encontrado</h1>

    return (
        <main>
            <img src={destino.imagem} alt={`Imagem do seu destino em ${destino.nome}`} />
            <div>
                <h2>{destino.nome}</h2>
                <p>{destino.descricao}</p>
                <button>Agende a sua viagem</button>
            </div>
        </main>
    )
}

export default DestinoDetails;