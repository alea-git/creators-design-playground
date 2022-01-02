import classNames from "classnames"
import { motion } from "framer-motion"
import React from "react"
import AppBar from "src/components/AppBar"
import ContentHeader from "src/components/ContentHeader"

export default function courseOverview() {
    return (
        <div className="w-screen min-h-screen text-gray-900 bg-white">
            <AppBar />

            <ContentHeader>
                <div className="py-12">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-3xl font-extrabold tracking-tight">
                            Flutter 2 Start
                        </h1>

                        <p className="max-w-3xl mt-4 leading-6 text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos quibusdam, repellendus, necessitatibus esse ad iure voluptatum totam quasi sunt officia excepturi! Reiciendis, iusto! Possimus pariatur nesciunt itaque sequi eveniet!
                        </p>
                    </div>

                    <div className="w-full max-w-xl mx-auto mt-8">
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

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-row items-center w-64 h-12 px-4 mx-auto mt-8 space-x-2 font-medium text-white transition-colors duration-100 rounded shadow-sm bg-violet-600 hover:bg-violet-700"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <span>
                            Riprendi da: Installazione
                        </span>
                    </motion.button>
                </div>
            </ContentHeader>

            <div className="flex flex-row items-stretch w-full mx-auto space-x-12 max-w-7xl">
                <div className="border-r border-gray-200 w-80">
                    <div className="sticky py-8 top-16">
                        <h2 className="text-xl font-semibold">
                            Sezioni del corso
                        </h2>



                        <div className="flex flex-col mt-4">
                            {[
                                "1. Introduzione",
                                "2. Componenti",
                                "3. Layout",
                                "4. Pagine scrollabili",
                                "5. Form",
                                "6. Componenti di navigazione",
                                "7. HTTP & JSON",
                            ].map((sectionName, index) => (
                                <a href="" className={classNames("flex flex-row items-center py-3 space-x-4 text-gray-600 border-r-2 cursor-pointer", {
                                    "border-violet-700 text-violet-700": index === 0,
                                    "border-transparent": index !== 0,
                                })}>
                                    <span className="font-medium">
                                        {sectionName}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1 py-8">
                    <div className="w-full">
                        <div className="flex flex-row items-center space-x-4 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span>Cerca per nome della lezione o argomenti... </span>
                        </div>

                        <div className="grid grid-cols-3 gap-8 mt-10">
                            {[...Array(6)].map((_, index) => (
                                <div className="space-y-4 cursor-pointer">
                                    <div className="pb-[66%] relative bg-violet-500 rounded overflow-hidden">
                                        <div className={classNames("absolute inset-0 bg-gray-300 bg-center bg-no-repeat bg-cover rounded", {
                                            "m-2": index === 1,
                                        })} style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                                    </div>
                                    <div className="flex flex-col px-1">
                                        <div>
                                            <div className="flex flex-row items-center w-full">
                                                <h6 className="flex-1 font-medium leading-none">Installazione</h6>
                                                <div className="w-5 h-5 -mt-0.5 bg-white rounded-full border-[3px] border-violet-600" />
                                            </div>
                                            <span className="text-sm text-gray-700">
                                                8:32 — 1. Introduzione
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-row items-center w-full pt-2 mt-6 mb-10 space-x-4">
                        <div className="flex-1 border-t border-gray-200"></div>
                        <h6 className="text-gray-400">
                            2. Componenti
                        </h6>
                        <div className="flex-1 border-t border-gray-200"></div>
                    </div>

                    <div className="grid w-full grid-cols-3 gap-8">
                        {[...Array(2)].map(_ => (
                            <div className="space-y-4 cursor-pointer">
                                <div className="pb-[66%] relative bg-violet-500 rounded overflow-hidden">
                                    <div className="absolute inset-0 bg-gray-300 bg-center bg-no-repeat bg-cover rounded" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                                </div>
                                <div className="flex flex-col px-1">
                                    <div>
                                        <div className="flex flex-row items-center w-full">
                                            <h6 className="flex-1 font-medium leading-none">TabBar</h6>
                                            <div className="w-5 h-5 -mt-0.5 bg-white rounded-full border-[3px] border-gray-300" />
                                        </div>
                                        <span className="text-sm text-gray-700">
                                            8:32 — 2. Componenti
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-row items-center w-full pt-2 mt-6 mb-10 space-x-4">
                        <div className="flex-1 border-t border-gray-200"></div>
                        <h6 className="text-gray-400">
                            3. Layout
                        </h6>
                        <div className="flex-1 border-t border-gray-200"></div>
                    </div>

                    <div className="grid w-full grid-cols-3 gap-8">
                        {[...Array(4)].map(_ => (
                            <div className="space-y-4 cursor-pointer">
                                <div className="pb-[66%] relative bg-violet-500 rounded overflow-hidden">
                                    <div className="absolute inset-0 bg-gray-300 bg-center bg-no-repeat bg-cover rounded" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                                </div>
                                <div className="flex flex-col px-1">
                                    <div>
                                        <div className="flex flex-row items-center w-full">
                                            <h6 className="flex-1 font-medium leading-none">Column e Row</h6>
                                            <div className="w-5 h-5 -mt-0.5 bg-white rounded-full border-[3px] border-gray-300" />
                                        </div>
                                        <span className="text-sm text-gray-700">
                                            8:32 — 3. Layout
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}
