import React from "react"
import AppBar from "src/components/AppBar"
import ContentHeader from "src/components/ContentHeader"

export default function home() {
    return (
        <div className="w-screen min-h-screen text-gray-900 bg-white">
            <AppBar showMenuIcon />

            <ContentHeader>
                <div>
                    <div className="py-12">
                        <h1 className="text-3xl font-extrabold tracking-tight">
                            Diventa uno sviluppatore Flutter
                        </h1>

                        <p className="max-w-3xl mt-4 leading-6 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos quibusdam, repellendus, necessitatibus esse ad iure voluptatum totam quasi sunt officia excepturi.
                        </p>
                    </div>

                    <div className="flex flex-row items-center justify-center pb-6 space-x-4">
                        <button className="font-medium text-gray-600 py-1.5 px-2 flex flex-row space-x-2 items-center cursor-pointer hover:bg-violet-100 hover:text-violet-900 rounded-sm focus:outline-none">
                            <span>
                                Gruppo telegram
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </button>

                        <button className="font-medium text-gray-600 py-1.5 px-2 flex flex-row space-x-2 items-center cursor-pointer hover:bg-violet-100 hover:text-violet-900 rounded-sm focus:outline-none">
                            <span>
                                Consulenza aziendale
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </button>
                    </div>
                </div>
            </ContentHeader>

            <div className="border-b border-gray-200 sticky top-[4rem] bg-white z-10">
                <div className="flex flex-row items-center justify-between w-full py-2 mx-auto max-w-7xl">
                    <div className="flex flex-row flex-1">
                        <span className="font-medium text-violet-800 py-2.5 px-4 bg-violet-100 rounded-sm cursor-pointer">Percorsi formativi</span>
                        <span className="font-medium text-gray-500 py-2.5 px-4 cursor-pointer">Corsi disponibili</span>
                        <span className="font-medium text-gray-500 py-2.5 px-4 cursor-pointer">Corsi in libreria</span>
                    </div>
                </div>
            </div>

            <div className="relative w-full py-8 mx-auto space-y-32 border-gray-200 max-w-7xl border-x">
                <div>
                    <div>
                        <div className="max-w-3xl p-8">
                            <h2 className="text-3xl font-extrabold">
                                Flutter Developer
                            </h2>

                            <div className="flex flex-row items-center mt-4 space-x-1">
                                <span className="px-3 py-1 text-sm font-medium text-green-900 bg-green-100 rounded">
                                    Aggiornato a Flutter 2
                                </span>
                            </div>

                            <p className="mt-4 text-gray-500">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolore modi ratione sit. Ea veritatis iusto saepe laboriosam ullam asperiores aut! Consequuntur omnis, necessitatibus a repudiandae voluptate ea! Non, aperiam!
                            </p>

                            <div className="grid grid-cols-3 gap-4 mt-8">
                                <div className="flex flex-row items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>
                                        7 corsi
                                    </span>
                                </div>

                                <div className="flex flex-row items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>
                                        39 sezioni
                                    </span>
                                </div>

                                <div className="flex flex-row items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>
                                        143 lezioni
                                    </span>
                                </div>

                                <div className="flex flex-row items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>
                                        17 ore
                                    </span>
                                </div>

                                <div className="flex flex-row items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>
                                        Materiali aggiuntivi
                                    </span>
                                </div>

                                <div className="flex flex-row items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>
                                        Supporto community
                                    </span>
                                </div>

                                <div className="flex flex-row items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>
                                        Supporto insegnante
                                    </span>
                                </div>

                                <div className="flex flex-row items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>
                                        Accesso per la vita
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-4 gap-[1px] py-[1px] bg-gray-200">
                        <div className="flex flex-col items-center p-8 text-center bg-white">
                            <div className="w-full bg-gray-100 rounded-sm aspect-square"></div>

                            <h6 className="mt-4 text-lg font-semibold">
                                1. Flutter 2 Start
                            </h6>

                            <p className="mt-2 leading-6 text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id consequuntur fuga voluptas architecto autem commodi.
                            </p>

                            <div className="flex flex-row items-center mt-2 space-x-1 text-sm text-gray-500 text-gray-dark-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>7 ore</span>
                            </div>

                        </div>

                        <div className="flex flex-col items-center p-8 text-center bg-white">
                            <div className="w-full bg-gray-100 rounded-sm aspect-square"></div>

                            <h6 className="mt-4 text-lg font-semibold">
                                1. Flutter 2 Start
                            </h6>

                            <p className="mt-2 leading-6 text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id consequuntur fuga voluptas architecto autem commodi.
                            </p>

                            <div className="flex flex-row items-center mt-2 space-x-1 text-sm text-gray-500 text-gray-dark-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>7 ore</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 text-center bg-white">
                            <div className="w-full bg-gray-100 rounded-sm aspect-square"></div>

                            <h6 className="mt-4 text-lg font-semibold">
                                1. Flutter 2 Start
                            </h6>

                            <p className="mt-2 leading-6 text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id consequuntur fuga voluptas architecto autem commodi.
                            </p>

                            <div className="flex flex-row items-center mt-2 space-x-1 text-sm text-gray-500 text-gray-dark-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>7 ore</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 text-center bg-white">
                            <div className="w-full bg-gray-100 rounded-sm aspect-square"></div>

                            <h6 className="mt-4 text-lg font-semibold">
                                1. Flutter 2 Start
                            </h6>

                            <p className="mt-2 leading-6 text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id consequuntur fuga voluptas architecto autem commodi.
                            </p>

                            <div className="flex flex-row items-center mt-2 space-x-1 text-sm text-gray-500 text-gray-dark-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>7 ore</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 text-center bg-white">
                            <div className="w-full bg-gray-100 rounded-sm aspect-square"></div>

                            <h6 className="mt-4 text-lg font-semibold">
                                1. Flutter 2 Start
                            </h6>

                            <p className="mt-2 leading-6 text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id consequuntur fuga voluptas architecto autem commodi.
                            </p>

                            <div className="flex flex-row items-center mt-2 space-x-1 text-sm text-gray-500 text-gray-dark-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>7 ore</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 text-center bg-white">
                            <div className="w-full bg-gray-100 rounded-sm aspect-square"></div>

                            <h6 className="mt-4 text-lg font-semibold">
                                1. Flutter 2 Start
                            </h6>

                            <p className="mt-2 leading-6 text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id consequuntur fuga voluptas architecto autem commodi.
                            </p>

                            <div className="flex flex-row items-center mt-2 space-x-1 text-sm text-gray-500 text-gray-dark-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>7 ore</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 text-center bg-white">
                            <div className="w-full bg-gray-100 rounded-sm aspect-square"></div>

                            <h6 className="mt-4 text-lg font-semibold">
                                1. Flutter 2 Start
                            </h6>

                            <p className="mt-2 leading-6 text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id consequuntur fuga voluptas architecto autem commodi.
                            </p>

                            <div className="flex flex-row items-center mt-2 space-x-1 text-sm text-gray-500 text-gray-dark-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>7 ore</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 text-center bg-white">
                            <div className="w-full bg-gray-100 rounded-sm aspect-square"></div>

                            <h6 className="mt-4 text-lg font-semibold">
                                1. Flutter 2 Start
                            </h6>

                            <p className="mt-2 leading-6 text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id consequuntur fuga voluptas architecto autem commodi.
                            </p>

                            <div className="flex flex-row items-center mt-2 space-x-1 text-sm text-gray-500 text-gray-dark-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>7 ore</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
