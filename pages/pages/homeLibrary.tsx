import { motion } from "framer-motion"
import React from "react"
import AppBar from "src/components/AppBar"
import { ContentHeaderBackground } from "src/components/ContentHeader"
export default function homeLibrary() {
    return (<div className="w-screen min-h-screen text-gray-900 bg-white">
        <AppBar showMenuIcon />
        <div className="border-b border-gray-800 bg-gray-900 sticky top-[4rem] text-white z-10">
            <div className="flex flex-row items-center w-full h-16 mx-auto space-x-8 max-w-7xl">
                <div className="flex flex-row items-center justify-center h-full space-x-3 font-medium text-gray-400 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    <span>
                        Percorsi formativi
                    </span>
                </div>
                <div className="flex flex-row items-center justify-center h-full space-x-3 font-medium text-gray-400 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span>
                        Corsi disponibili
                    </span>
                </div>
                <div className="flex flex-row items-center justify-center h-full space-x-3 font-medium text-white border-b-2 border-white cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>
                        Corsi in libreria
                    </span>
                </div>
            </div>
        </div>

        <ContentHeaderBackground>
            <div className="w-full py-12 text-white">
                <div className="flex flex-row justify-between w-full mx-auto space-x-16 max-w-7xl">
                    <div className="flex flex-col items-center flex-1 max-w-xl mx-auto text-center">
                        <h6 className="text-lg font-medium text-gray-300">
                            Stai seguendo:
                        </h6>

                        <h1 className="mt-4 text-4xl font-extrabold">
                            Flutter 2 Start
                        </h1>

                        <p className="max-w-lg mt-4 text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis enim quis ut quod dolore, officiis deleniti, et cumque quaerat totam.
                        </p>

                        <div className="w-full mt-12">
                            <div className="w-full h-1 bg-gray-700 rounded">
                                <div className="w-1/3 h-1 bg-white rounded"></div>
                            </div>

                            <div className="flex flex-row items-center justify-center mt-2 space-x-2 text-gray-400">
                                <span className="font-medium text-white">
                                    35% Completato
                                </span>

                                <span>
                                    -
                                </span>

                                <span>
                                    7 ore rimaste
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-row items-center mt-12 space-x-4">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="h-12 px-4 font-medium text-white transition-colors duration-100 rounded shadow-sm bg-violet-600 hover:bg-violet-700"
                            >
                                Riprendi da: Installazione
                            </motion.button>

                            <button className="h-12 px-4 font-medium text-white bg-transparent border border-gray-500 rounded shadow-sm">
                                Vai al corso
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ContentHeaderBackground>

        <div className="relative w-full py-8 mx-auto divide-y divide-gray-200 max-w-7xl"> {
            [...Array(8)].map(_ => (<div className="flex flex-row items-center h-56 max-w-5xl py-6 mx-auto space-x-8">
                <div className="h-full bg-center bg-no-repeat bg-cover rounded aspect-square" style={{
                    backgroundImage: "url(https://backmain.s3.eu-central-1.amazonaws.com/3bcbe21c-1303-4aaf-a510-91769cb017fb17825647590982822154.png)"
                }} />

                <div className="flex-1">
                    <div className="flex flex-row items-center">
                        <h6 className="flex-1 text-xl font-semibold">
                            Flutter 2 Start
                        </h6>
                        <div className="flex flex-row items-center space-x-1">
                            <span className="px-3 py-1 text-sm font-medium rounded text-violet-900 bg-violet-100">
                                Anteprima
                            </span>
                            <span className="px-3 py-1 text-sm font-medium text-blue-900 bg-blue-100 rounded">
                                Flutter 2
                            </span>
                            <span className="px-3 py-1 text-sm font-medium text-green-900 bg-green-100 rounded">
                                Aggiornato 2 mesi fa
                            </span>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minus assumenda cupiditate mollitia repudiandae culpa ab possimus veniam officiis eum.
                    </p>
                    <div className="w-full h-1 mt-6 bg-gray-300 rounded">
                        <div className="w-2/3 h-1 rounded bg-violet-600"></div>
                    </div>
                    <div className="flex flex-row items-center mt-2 space-x-2 text-gray-700">
                        <span className="font-medium text-violet-800">
                            70% Completato
                        </span>
                        <span>
                            -
                        </span>
                        <span>
                            2 ore rimaste
                        </span>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </div>))
        } </div>
    </div>)
}