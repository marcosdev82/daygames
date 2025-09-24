import Container from "@/componentes/container";
import { GameProps } from "@/utils/types/games";
import Image from "next/image";
import Link from "next/link";
import { BsArrowBarRightSquare } from "react-icons/bs";

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
            <div className="w-full bg-back rounded-lg">
              <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2">
                <p className="font-bold text-xl text-white">{daylyGame.title}</p>
                <BsArrowBarRightSquare size={24} color="#fff" />
              </div>
              <Image
                src={daylyGame.image_url}
                alt={daylyGame.title}
                priority={true}
                quality={100}
                fill={true}
                className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200) 33vw"
              />
            </div>
          </section>
        </Link>
      </Container>
    </main >
  );
}
