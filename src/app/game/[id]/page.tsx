import Container from "@/componentes/container"
import { GameProps } from "@/utils/types/games"
import { redirect } from "next/navigation"
import Image from "next/image"
import { Label } from "./components/label"
import GameCard from "@/componentes/GameCard"

async function getData(id: string) {
    try {
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, { next: { revalidate: 60 * 60 * 24 } })
        return res.json();
    } catch (err) {
        return null
    }
}

async function getGameSorted() {
    try {
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { cache: 'no-store' })
        return res.json()
    } catch (err) {
        throw new Error("Failed to fetch date")
    }
}

export default async function Game(props: {
    params: Promise<{ id: string }>
}) {
    const { id } = await props.params
    const data: GameProps = await getData(id)
    const sortedGames: GameProps = await getGameSorted();

    if (!data) {
        redirect('/')
    }

    return (
        <main className="w-full text-black">
            <div className="bg-black h-80 sm:h-96 w-full relative">
                <Image
                    className="object-cover w-full h-80 sm:h-96 opacity-75"
                    src={data.image_url}
                    alt={data.title}
                    priority={true}
                    fill={true}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200) 33vw"
                />
            </div>
            <Container>
                <h1 className="font-bol text-xl my-4">{data.title}</h1>
                <p>{data.description}</p>

                <h2 className="font-bold text-lg mt-7 mb-2">Categorias:</h2>
                <div className="flex gap-2 flex-wrap">
                    {data.categories.map((item) => (
                        <Label name={item} key={item} />
                    ))}
                </div>

                <h2 className="font-bold text-lg mt-7 mb-2">Plataformas:</h2>
                <div className="flex gap-2 flex-wrap">
                    {data.platforms.map((item) => (
                        <Label name={item} key={item} />
                    ))}
                </div>

                <p className="mt-7 mb-2">Data de lançamento: {data.realease}</p>

                <h2 className="font-bold text-lg mt-7 mb-2">Jogos recomenddos:</h2>
                <div className="flex gap-2">
                    <div className="flex-grow">
                        <GameCard key={sortedGames.id} data={sortedGames} />
                    </div>
                </div>

            </Container>
        </main>
    )
}