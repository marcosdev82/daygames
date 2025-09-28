import Container from "@/componentes/container";
import GameCard from "@/componentes/GameCard";
import { GameProps } from "@/utils/types/games";

async function getData(title: string) {

    const decodeTitle = decodeURI(title)

    console.log("parametro: " + decodeTitle)

    try {
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`)
        return res.json();
    } catch (err) {
        return null
    }
}

export default async function Search(props: {
    params: Promise<{ title: string }>
}) {
    const { title } = await props.params
    const games: GameProps[] = await getData(title)

    return (
        <main className="w-full text-black">
            <Container>
                <h1 className="font-bold text-xl mt-8 mb-5">Veja o que encontramos na nossa base:</h1>

                {!games && (
                    <p>Esse jogo não foi encontrado!...</p>
                )}

                <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {games && games.map((item) => (
                        <GameCard key={item.id} data={item} />
                    ))}
                </section>
            </Container>
        </main>
    )
}