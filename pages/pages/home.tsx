import classNames from "classnames"
import { motion } from "framer-motion"
import React from "react"
import AppBar from "src/components/AppBar"
import ContentHeader, { ContentHeaderBackground } from "src/components/ContentHeader"

export default function home() {
    return (
        <div className="w-screen min-h-screen text-gray-900 bg-white">
            <AppBar showMenuIcon />

            <div className="border-b border-gray-800 bg-gray-900 sticky top-[4rem] text-white z-10">
                <div className="flex flex-row items-center w-full h-16 mx-auto space-x-8 max-w-7xl">
                    <div className="flex flex-row items-center justify-center h-full space-x-3 font-medium text-white border-b-2 border-white cursor-pointer">
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
                    <div className="flex flex-row items-center justify-center h-full space-x-3 font-medium text-gray-400 cursor-pointer">
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

                            <h1 className="mt-4 text-3xl font-extrabold">
                                Flutter & Firebase
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
                                    Riprendi: Flutter 2 Start
                                </motion.button>

                                <button className="h-12 px-4 font-medium text-white bg-transparent border border-gray-500 rounded shadow-sm">
                                    Vai al percorso
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentHeaderBackground>

            <div className="w-full divide-y divide-gray-200">
                {[...Array(2)].map(_ => (
                    <div className="w-full">
                        <div className="flex flex-row items-stretch w-full mx-auto space-x-16 max-w-7xl">
                            <div className="flex-1 py-16">
                                <h2 className="text-2xl font-bold">
                                    Flutter Developer
                                </h2>

                                <p className="max-w-xl mt-4 text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum, culpa facilis architecto error sit, deleniti pariatur quasi eaque distinctio nostrum molestias minus optio ipsum fuga! Recusandae expedita repellat vel.
                                </p>

                                <div className="mt-8 space-y-8">
                                    <div className="space-y-2">
                                        <h6 className="text-xs font-bold uppercase">
                                            Tags
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

                                    <div className="space-y-2">
                                        <h6 className="text-xs font-bold uppercase">
                                            Prerequisiti
                                        </h6>

                                        <p className="max-w-sm text-gray-700">
                                            Conoscenza base di programmazione in qualsiasi linguaggio
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <h6 className="text-xs font-bold uppercase">
                                            Argomenti trattati
                                        </h6>

                                        <div className="flex flex-wrap max-w-sm text-gray-700">
                                            {`Front-End Development Basics, HTML, CSS, Python Syntax,
                                            Text Processing in Python, DevTools, Command Line Interface
                                            Basics, Code Debugging, JavaScript Data Structures, Control
                                            Flow in JavaScript`.split(",").map(word => (
                                                <span className="px-2 text-sm py-0.5 bg-gray-100 mb-2 mr-2 text-gray-700 font-medium rounded">
                                                    {word.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full h-12 max-w-xs px-4 mt-8 font-medium text-gray-900 bg-transparent border border-gray-400 rounded shadow-sm">
                                    Vai al percorso
                                </button>
                            </div>

                            <div className="flex-1 p-8 py-16 bg-gray-100">
                                <h6 className="mt-10 text-lg font-semibold">
                                    Corsi inclusi nel percorso
                                </h6>

                                <p className="mt-1 text-sm text-gray-700">
                                    Acquistando questo percorso sbloccherai tutti e 5 i corsi mostrati sotto.
                                </p>

                                <div className="mt-8">
                                    {[
                                        {
                                            name: "Dart Begin",
                                            infos: "2 ore",
                                        },
                                        {
                                            name: "Flutter 2 Start",
                                            infos: "12 ore",
                                        },
                                        {
                                            name: "Flutter 2 Advanced",
                                            infos: "8 ore",
                                        },
                                        {
                                            name: "Flutter 2 Focus",
                                            infos: "6 ore",
                                        },
                                        {
                                            name: "Flutter 2 Pro",
                                            infos: "7 ore",
                                        },
                                    ].map((course, index) => (
                                        <div className="flex flex-row items-stretch space-x-4">
                                            <div className="flex flex-col items-center">
                                                <div className={classNames("flex-1 w-[1px]",
                                                    index === 0
                                                        ? "bg-transparent"
                                                        : "bg-gray-300",
                                                )} />
                                                <div className="w-3 h-3 my-2 bg-gray-300 rounded-full" />
                                                <div className={classNames("flex-1 w-[1px]",
                                                    index === 4
                                                        ? "bg-transparent"
                                                        : "bg-gray-300",
                                                )} />
                                            </div>

                                            <div className={classNames("flex flex-row items-center flex-1 py-2 space-x-4", {
                                                "border-b border-gray-200": index !== 4,
                                            })}>
                                                <div className="h-12 bg-center bg-no-repeat bg-cover rounded aspect-square" style={{
                                                    backgroundImage: "url(https://backmain.s3.eu-central-1.amazonaws.com/06751de3-c345-47fd-bc37-2a44ac9ab4177244218256204182333.jpg)",
                                                }}></div>

                                                <div className="flex-1">
                                                    <h6 className="font-medium">
                                                        {course.name}
                                                    </h6>

                                                    <p className="text-sm text-gray-700">
                                                        {course.infos}
                                                    </p>
                                                </div>

                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}
