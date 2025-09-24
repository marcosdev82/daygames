import Container from "@/componentes/container";
import { GameProps } from "@/utils/types/games";
import Image from "next/image";
import Link from "next/link"

async function getDalyGame() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`)
    return res.json();
  } catch (err) {
    throw new Error("Faliled to fetch data")
  }
}

export default async function Home() {

  const daylyGame: GameProps = await getDalyGame()

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl text-black mt-8 mb-5">Separamos um jogo exclusivo pra você</h1>
        <Link href={`/game/${daylyGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <Image
              src={daylyGame.image_url}
              alt={daylyGame.title}
              priority={true}
              quality={100}
              fill={true}
            />
          </section>
        </Link>
      </Container>
    </main >
  );
}
