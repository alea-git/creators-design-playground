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

            <div className="relative grid w-full grid-cols-2 gap-8 py-8 mx-auto max-w-7xl">
                {[...Array(4)].map(_ => (
                    <div className="flex flex-row items-stretch overflow-hidden text-gray-700 border border-gray-200 rounded-md cursor-pointer">
                        <div className="w-40 bg-gray-900">
                        </div>

                        <div className="flex flex-col flex-1 py-2">
                            <div className="flex flex-row self-end h-6">
                                <div className="inline-block w-6 overflow-hidden h-9">
                                    <div className="h-full origin-top-left transform -rotate-45 bg-violet-600"></div>
                                </div>

                                <div className="flex items-center justify-center px-2 bg-violet-600">
                                    <span className="text-xs font-semibold tracking-tight text-white uppercase">
                                        Percorso formativo
                                    </span>
                                </div>
                            </div>

                            <div className="px-6 pb-4 space-y-2">
                                <h6 className="text-xl font-bold text-gray-900">
                                    Flutter Developer
                                </h6>

                                <p className="text-sm leading-5">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsam consequuntur consequatur officia pariatur soluta aliquid eaque.
                                </p>
                            </div>

                            <div className="flex flex-row items-center w-full px-6 py-2 space-x-4 bg-purple-50">
                                <div className="flex flex-row items-center space-x-2 text-purple-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>

                                    <span className="text-sm">
                                        Novizio
                                    </span>
                                </div>

                                <div className="flex flex-row items-center space-x-2 text-purple-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span className="text-sm">
                                        27 ore
                                    </span>
                                </div>
                            </div>

                            <div className="px-6 py-6 space-y-6">
                                <div className="space-y-2">
                                    <h6 className="text-xs font-bold tracking-tight text-purple-800 uppercase">
                                        Argomenti trattati
                                    </h6>

                                    <p className="text-sm leading-5">
                                        Front-End Development Basics, HTML, CSS, Python Syntax,
                                        Text Processing in Python, DevTools, Command Line Interface
                                        Basics, Code Debugging, JavaScript Data Structures, Control
                                        Flow in JavaScript
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h6 className="text-xs font-bold tracking-tight text-purple-800 uppercase">
                                        Prerequisiti
                                    </h6>

                                    <p className="text-sm leading-5">
                                        Conoscenza base di programmazione in qualsiasi linguaggio
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
