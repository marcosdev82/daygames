"use client"
import { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";

export function FavoriteCard() {
    const [input, setInput] = useState("")
    const [showInput, setShowInput] = useState(false)
    const [gameName, setGameName] = useState("")

    function handeButton() {
        setShowInput(!showInput)

        if (input !== "") {
            {
                setGameName(input)
            }


            setInput("")
        }
    }

    return (
        <div className="w-full bg-gray-900 p-4 h-44 text-white rounded-lg flex justify-between flex-col">

            {showInput ? (
                <div className="w-full">
                    <input
                        className="w-full rounded-md h-8 bg-white text-black p-2 mb-1"
                        type="text"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <button onClick={handeButton}>
                        <FiX size={24} color="#fff" />
                    </button>
                </div>
            ) : (
                <button
                    className="self-start hover:scale-110 duration-200 transition-all"
                    onClick={handeButton}
                >
                    <FiEdit size={24} color="#fff" />
                </button>
            )}

            {gameName && (
                <div>
                    <span className="text-white">Jogo Favorito:</span>
                    <p className="font-bold text-white">{gameName}</p>
                </div>
            )}

            {/* <p className="font-bold text-white">Adicionar jogo</p> */}
        </div>
    )

}