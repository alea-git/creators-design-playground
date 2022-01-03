import classNames from "classnames"
import { motion } from "framer-motion"
import React from "react"
import AppBar from "src/components/AppBar"
import ContentHeader from "src/components/ContentHeader"

export default function pathOverview() {
    return (
        <div className="w-screen min-h-screen text-gray-900 bg-white">
            <AppBar />

            <ContentHeader>
                <div className="py-12">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h6 className="text-lg font-medium text-gray-300">
                            Percorso formativo
                        </h6>

                        <h1 className="mt-4 text-3xl font-extrabold tracking-tight">
                            Flutter Developer
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
                                1 di 5 corsi completati
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

            <div className="flex flex-col w-full py-8 mx-auto max-w-7xl">
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
                ].map((course, index) => (
                    <div className="flex flex-row items-stretch space-x-8">
                        <div className={classNames("flex-1 py-8", {
                            "opacity-0": index % 2 === 1,
                        })}>
                            <div className="flex flex-row items-center h-full space-x-6">
                                <div className="flex flex-col items-end flex-1 text-right">
                                    <h6 className="flex-1 text-2xl font-bold">
                                        {course.name}
                                    </h6>

                                    <p className="max-w-md mt-4 text-gray-700">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum, culpa facilis architecto error sit, deleniti pariatur quasi eaque distinctio nostrum molestias minus optio ipsum fuga! Recusandae expedita repellat vel.
                                    </p>

                                    <div className="max-w-sm mt-4 text-gray-700">
                                        {`Front-End Development Basics, HTML, CSS, Python Syntax,
                                            Text Processing in Python`.split(",").map(word => (
                                            <span className="px-2 float-right text-sm py-0.5 bg-gray-100 mb-2 ml-2 text-gray-700 font-medium rounded">
                                                {word.trim()}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="h-10 max-w-xs px-12 mt-4 font-medium text-gray-900 bg-transparent border border-gray-400 rounded shadow-sm">
                                        Vai al corso
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className={classNames("h-6 w-[2px]",
                                index === 0
                                    ? "bg-transparent"
                                    : "bg-gray-200",
                            )} />
                            <div className="w-8 h-8 my-2 bg-gray-200 rounded-full" />
                            <div className={classNames("flex-1 w-[2px]",
                                index === 4
                                    ? "bg-transparent"
                                    : "bg-gray-200",
                            )} />
                        </div>

                        <div className={classNames("flex-1 py-8", {
                            "opacity-0": index % 2 === 0,
                        })}>
                            <div className="flex flex-row items-center h-full space-x-6">
                                <div className="flex flex-col items-start flex-1">
                                    <h6 className="flex-1 text-2xl font-bold">
                                        {course.name}
                                    </h6>

                                    <p className="max-w-md mt-4 text-gray-700">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum, culpa facilis architecto error sit, deleniti pariatur quasi eaque distinctio nostrum molestias minus optio ipsum fuga! Recusandae expedita repellat vel.
                                    </p>

                                    <div className="max-w-sm mt-4 text-gray-700">
                                        {`Front-End Development Basics, HTML, CSS, Python Syntax,
                                            Text Processing in Python`.split(",").map(word => (
                                            <span className="px-2 float-left text-sm py-0.5 bg-gray-100 mb-2 mr-2 text-gray-700 font-medium rounded">
                                                {word.trim()}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="h-10 max-w-xs px-12 mt-4 font-medium text-gray-900 bg-transparent border border-gray-400 rounded shadow-sm">
                                        Vai al corso
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="self-center w-8 h-8 my-2 bg-gray-200 rounded-full" />

                <div className="flex flex-row items-center self-center mt-8 space-x-6">
                    <div className="flex flex-col items-center flex-1 text-center">
                        <h6 className="flex-1 text-2xl font-bold">
                            Flutter 2 Pro
                        </h6>

                        <p className="max-w-md mt-4 text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum, culpa facilis architecto error sit, deleniti pariatur quasi eaque distinctio nostrum molestias minus optio ipsum fuga! Recusandae expedita repellat vel.
                        </p>

                        <div className="flex-wrap content-center max-w-sm mt-4 text-gray-700">
                            {`Front-End Development Basics, HTML, CSS, Python Syntax,
                                            Text Processing in Python`.split(",").map(word => (
                                <span className="px-2 inline-block text-sm py-0.5 bg-gray-100 mb-2 mr-2 text-gray-700 font-medium rounded">
                                    {word.trim()}
                                </span>
                            ))}
                        </div>

                        <button className="h-10 max-w-xs px-12 mt-4 font-medium text-gray-900 bg-transparent border border-gray-400 rounded shadow-sm">
                            Vai al corso
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
