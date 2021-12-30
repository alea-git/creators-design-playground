import React from "react"
import AppBar from "src/components/AppBar"
import { ContentHeaderBackground } from "src/components/ContentHeader"

export default function homeLibrary() {
    return (
        <div className="w-screen min-h-screen text-gray-900 bg-white">
            <AppBar showMenuIcon />

            <div className="border-b border-gray-800 bg-gray-900 sticky top-[4rem] text-white z-10">
                <div className="flex flex-row items-center w-full h-16 mx-auto space-x-8 max-w-7xl">
                    <div className="flex flex-row items-center justify-center h-full space-x-3 font-medium text-gray-500 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>

                        <span>
                            Percorsi formativi
                        </span>
                    </div>
                    <div className="flex flex-row items-center justify-center h-full space-x-3 font-medium text-gray-500 cursor-pointer">
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
                        <div className="flex-1 max-w-2xl">
                            <h6 className="text-lg font-medium text-gray-300">
                                Riprendi il corso che stai seguendo!
                            </h6>

                            <h1 className="mt-6 text-3xl font-extrabold">
                                Flutter 2 Start
                            </h1>

                            <p className="mt-2 text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis enim quis ut quod dolore, officiis deleniti, et cumque quaerat totam.
                            </p>

                            <div className="mt-12">
                                <div className="w-full h-1 bg-gray-700 rounded">
                                    <div className="w-2/3 h-1 bg-white rounded"></div>
                                </div>

                                <div className="flex flex-row items-center mt-2 space-x-2 text-gray-400">
                                    <span className="font-medium text-white">
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

                            <div className="flex flex-row items-center mt-12 space-x-4">
                                <button className="h-12 px-4 font-medium text-white rounded shadow-sm bg-violet-600">
                                    Riprendi corso
                                </button>

                                <button className="h-12 px-4 font-medium text-white bg-transparent border border-gray-400 rounded shadow-sm">
                                    Vedi tutte le lezioni
                                </button>
                            </div>
                        </div>

                        <div className="flex-shrink-0 w-1/3 min-w-[20rem]">
                            <h6 className="mt-4 font-medium">
                                Prossimi:
                            </h6>

                            <div className="mt-4 space-y-4">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-24 bg-gray-500 rounded aspect-video"></div>

                                    <div className="space-y-0.5">
                                        <h6 className="font-medium">
                                            Come installare Flutter
                                        </h6>

                                        <p className="text-sm text-gray-400">
                                            1. Introduzione - 12 min
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-24 bg-gray-500 rounded aspect-video"></div>

                                    <div className="space-y-0.5">
                                        <h6 className="font-medium">
                                            Come installare Flutter
                                        </h6>

                                        <p className="text-sm text-gray-400">
                                            1. Introduzione - 12 min
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-24 bg-gray-500 rounded aspect-video"></div>

                                    <div className="space-y-0.5">
                                        <h6 className="font-medium">
                                            Come installare Flutter
                                        </h6>

                                        <p className="text-sm text-gray-400">
                                            1. Introduzione - 12 min
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentHeaderBackground>

            <div className="relative w-full py-12 mx-auto divide-y divide-gray-200 max-w-7xl">
                {[...Array(8)].map(_ => (
                    <div className="flex flex-row items-center py-6 space-x-8 h-60">
                        <div className="h-full bg-black rounded aspect-square"></div>

                        <div className="w-full max-w-2xl">
                            <div className="flex flex-row items-baseline">
                                <h6 className="flex-1 text-2xl font-bold">
                                    Flutter 2 Start
                                </h6>

                                <div className="flex flex-row items-center mt-4 space-x-1">
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

                            <div className="w-full h-1 mt-4 bg-gray-300 rounded">
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
                    </div>
                ))}
            </div>
        </div >
    )
}
