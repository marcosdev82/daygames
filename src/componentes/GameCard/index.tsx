import Link from "next/link"
import Image from "next/image"
import { BiCircle, BiRightArrowCircle } from "react-icons/bi"
import { GameProps } from "@/utils/types/games"

interface GameCardProps {
    data: GameProps
}

export default function GameCard({ data }: GameCardProps) {
    return (
        <Link href={`/game/${data.id}`}>
            <section className="full bg-slate-200 rounded-lg p-4 mb-5">
                <div className="relative w-full h-56 transition-all duration-300">
                    <div className="relative w-full h-64">
                        <Image
                            className="rounded-lg object-cover"
                            src={data.image_url}
                            alt={data.title}
                            fill
                            quality={100}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                        />
                    </div>

                </div>
                <div className="flex items-center mt-4 justify-between">
                    <p className="text-sm font-bold px-2 text-black text-ellipsis 
                    truncate whitespace-nowrap overflow-hidden">${data.title}</p>
                    <BiRightArrowCircle />
                </div>
            </section>
        </Link>
    )
}