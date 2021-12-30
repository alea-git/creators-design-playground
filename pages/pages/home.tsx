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
                    <div className="flex flex-row items-center justify-center h-full space-x-3 font-medium text-gray-500 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>

                        <span>
                            Corsi disponibili
                        </span>
                    </div>
                    <div className="flex flex-row items-center justify-center h-full space-x-3 font-medium text-gray-500 cursor-pointer">
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
                                Stai andando alla grande, Gabriel!
                            </h6>

                            <h1 className="mt-6 text-3xl font-extrabold">
                                Flutter Developer
                            </h1>

                            <p className="mt-2 text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis enim quis ut quod dolore, officiis deleniti, et cumque quaerat totam.
                            </p>

                            <div className="mt-12">
                                <div className="w-full h-1 bg-gray-700 rounded">
                                    <div className="w-1/3 h-1 bg-white rounded"></div>
                                </div>

                                <div className="flex flex-row items-center mt-2 space-x-2 text-gray-400">
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
                                    Riprendi percorso
                                </motion.button>

                                <button className="h-12 px-4 font-medium text-white bg-transparent border border-gray-500 rounded shadow-sm">
                                    Vai al percorso
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

                                <p className="mt-4 text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequatur labore distinctio quas suscipit.
                                </p>

                                <div className="mt-8 divide-y divide-gray-200">
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
                                    ].map(course => (
                                        <div className="flex flex-row items-center py-2 space-x-4">
                                            <div className="h-12 bg-gray-300 rounded aspect-square"></div>

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
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="w-full mx-auto border-gray-200 divide-y divide-gray-200 max-w-7xl border-x">
                {[...Array(4)].map(_ => (
                    <div className="grid grid-cols-4 text-gray-700 cursor-pointer">
                        <div className="flex flex-col p-4">
                            <div className="w-full bg-gray-200 rounded-md aspect-square">
                            </div>
                        </div>

                        <div className="flex flex-col col-span-3 py-2">
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

                            <div className="px-4 pb-4 space-y-2">
                                <h6 className="text-xl font-semibold text-gray-900">
                                    Flutter Developer
                                </h6>

                                <p className="text-sm leading-5">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsam consequuntur consequatur officia pariatur soluta aliquid eaque.
                                </p>
                            </div>

                            <div className="flex flex-row items-center px-4 py-2 mx-4 space-x-4 rounded bg-purple-50">
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

                            <div className="px-4 py-6 space-y-6">
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

                <div className="min-h-screen py-8 w-80">
                    <div className="pb-2 border-b border-gray-200">
                        <h6 className="flex flex-col text-xl">
                            <span className="text-gray-500">Buon pomeriggio,</span>
                            <span className="font-semibold">Gabriel</span>
                        </h6>
                    </div>

                    <div className="flex flex-row items-start w-full p-4 mt-4 space-x-4 rounded-md bg-gray-50">
                        <div className="flex items-center justify-center w-8 h-8 mt-1 text-white rounded-full bg-violet-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </div>

                        <div className="flex-1">
                            <h6 className="font-semibold">
                                Riprendi Flutter 2 Start
                            </h6>

                            <p className="text-sm text-gray-500">
                                Sei al 23% del corso! Riprendi dalla lezione "Installazione"
                            </p>

                            <button className="px-4 py-1 mt-1 text-sm font-medium text-white rounded bg-violet-600 focus:outline-none">
                                Riprendi
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 space-y-4">
                        <h6 className="text-lg font-bold">
                            Eventi
                        </h6>

                        <div className="px-3">
                            <div className="flex flex-row items-center justify-between">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>

                                <span className="font-semibold">
                                    Novembre 2021
                                </span>

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </div>

                            <div className="grid grid-cols-7 gap-1 mt-4">
                                {["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"].map((text) => (
                                    <span className="text-xs font-semibold text-gray-400 uppercase">
                                        {text}
                                    </span>
                                ))}
                            </div>

                            <div className="grid grid-cols-7 gap-1 mt-4 text-center">
                                {[...Array(28)].map((_, index) => (
                                    <span className="py-2 text-sm text-gray-700">
                                        {index + 1}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 space-y-4">
                        <h6 className="text-lg font-bold">
                            Link utili
                        </h6>

                        <div className="space-y-2">
                            {[...Array(2)].map(_ => (
                                <div className="flex flex-row p-4 space-x-4 rounded bg-gray-50">
                                    <div className="flex items-center justify-center w-8 h-8 mt-1 text-white rounded-full bg-violet-600" />

                                    <div className="flex-1">
                                        <h6 className="font-semibold">
                                            Gruppo telegram
                                        </h6>

                                        <p className="text-sm text-gray-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem vel aliquam tempore.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}
        </div >
    )
}
