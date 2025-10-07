import Container from "@/componentes/container";
import Image from "next/image";
import userImg from "public/profile.jpg";
import { FaShareAlt } from "react-icons/fa";
import { FavoriteCard } from "./components/favorite";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Perfil do Usuário - DalyGames",
    description: "Perfil do usuário no DalyGames, veja seus jogos favoritos e configurações.",
}

export default function ProfilePage() {
    return (
        <main className="w-full text-black">
            <Container>
                <section className="my-8 flex flex-col items-center justify-between 
                relative gap-3 sm:flex-row">
                    <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row">
                        <Image
                            src="/user.png"
                            alt="Imagem perfil do usuário"
                            width={150}
                            height={150}
                            className="rounded-full object-cover"
                        />
                        <h1>Marcos Tavares</h1>
                    </div>
                    <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center mt-2">
                        <button className="bg-gray-700 px-4 py-3 rounded-lg text-white">Configurações</button>
                        <button className="bg-gray-700 px-4 py-3 rounded-lg text-white"><FaShareAlt size={24} color="#fff" /></button>
                    </div>


                </section>
                <section className="w-full flex flex-wrap gap-5 md:flex-row flex-col">
                    <div className="flex-1 min-w-[250px] flex justify-center items-stretch">
                        <FavoriteCard />
                    </div>
                    <div className="flex-1 min-w-[250px] flex justify-center items-stretch">
                        <FavoriteCard />
                    </div>
                    <div className="flex-1 min-w-[250px] flex justify-center items-stretch">
                        <FavoriteCard />
                    </div>
                </section>

            </Container>
        </main>
    )
}
