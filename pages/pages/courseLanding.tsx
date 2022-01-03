import { motion } from "framer-motion"
import React from "react"
import AppBar from "src/components/AppBar"
import ContentHeader, { ContentHeaderBackground } from "src/components/ContentHeader"

export default function courseLanding() {
    return (
        <div className="w-screen min-h-screen text-gray-900 bg-white">
            <AppBar />

            <div className="relative w-full">
                <div className="fixed inset-0 grid grid-cols-2">
                    <div className="relative h-full bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%2318253c' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");`
                        }} />
                    </div>
                    <div className="h-full bg-white"></div>
                </div>

                <div className="relative grid grid-cols-2 mx-auto max-w-7xl">
                    <div className="sticky flex flex-col justify-between w-full py-8 pr-12 text-white top-16" style={{ height: "calc(100vh - 4rem)" }}>
                        <div></div>

                        <div className="max-w-md">
                            <h6 className="text-lg font-medium text-gray-300">
                                Corso
                            </h6>

                            <h1 className="mt-6 text-4xl font-extrabold">
                                Flutter 2 Start
                            </h1>

                            <p className="mt-4 text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, esse voluptatibus at ullam nulla ratione enim nisi odio voluptates? Explicabo vero beatae dolore pariatur nisi quisquam neque recusandae accusamus eaque.
                            </p>

                            <div className="flex flex-row flex-shrink-0 mt-12 space-x-2">
                                <button className="py-2.5 px-4 shadow-sm flex flex-row items-center justify-center font-medium text-white bg-violet-700 rounded">
                                    <span>
                                        Compra € 199.00
                                    </span>
                                </button>

                                <button className="py-2.5 px-4 border border-gray-700 text-white flex flex-row font-medium items-center justify-center bg-gray-800 shadow-sm rounded">
                                    <span>
                                        Acquisto aziendale?
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-row items-center pt-4 space-x-8 border-t border-gray-700">
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-gray-400">
                                    Contenuti
                                </p>

                                <h6 className="text-lg font-bold">
                                    47 Lezioni
                                </h6>
                            </div>

                            <div className="space-y-1">
                                <p className="text-sm font-medium text-gray-400">
                                    Durata
                                </p>

                                <h6 className="text-lg font-bold">
                                    12 Ore
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="px-12 py-8 space-y-12">
                        <div className="flex flex-row space-x-8 border-b border-gray-200">
                            <span className="py-4 font-medium border-b cursor-pointer text-violet-800 border-violet-800">
                                Generale
                            </span>
                            <span className="py-4 font-medium text-gray-600 cursor-pointer">
                                Recensioni
                            </span>
                            <span className="py-4 font-medium text-gray-600 cursor-pointer">
                                Scheda tecnica
                            </span>
                            <span className="py-4 font-medium text-gray-600 cursor-pointer">
                                Contenuti
                            </span>
                            <span className="py-4 font-medium text-gray-600 cursor-pointer">
                                FAQ
                            </span>
                        </div>

                        <div className="relative w-full mt-8 bg-black bg-center bg-no-repeat bg-cover rounded aspect-video">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white/20" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-extrabold">
                                Il Corso
                            </h3>

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

                            <p className="mt-4 text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita ipsam voluptas nihil doloremque dolor possimus id deserunt beatae quibusdam. Nobis veritatis perferendis repudiandae ratione minima. Blanditiis consequuntur officiis sapiente!
                            </p>

                            <p className="mt-2 text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita ipsam voluptas nihil doloremque dolor possimus id deserunt beatae quibusdam. Nobis veritatis perferendis repudiandae ratione minima. Blanditiis consequuntur officiis sapiente.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-extrabold">
                                Recensioni
                            </h3>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {[...Array(2)].map(_ => (
                                    <div className="space-y-4">
                                        <div className="p-6 space-y-4 bg-gray-100 rounded">
                                            <div className="flex flex-row items-center space-x-4">
                                                <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                                                <div>
                                                    <h6 className="font-semibold">
                                                        Ryan Florence
                                                    </h6>

                                                    <p className="text-sm text-gray-700">
                                                        Remix & React training
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="leading-6 text-gray-700">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptas praesentium eos tenetur, amet maiores? Dolorem corporis fugiat eaque.
                                            </p>
                                        </div>

                                        <div className="p-6 space-y-4 bg-gray-100 rounded">
                                            <div className="flex flex-row items-center space-x-4">
                                                <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                                                <div>
                                                    <h6 className="font-semibold">
                                                        Ryan Florence
                                                    </h6>

                                                    <p className="text-sm text-gray-700">
                                                        Remix & React training
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="leading-6 text-gray-700">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptas praesentium eos tenetur, amet maiores? Dolorem corporis fugiat eaque.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-extrabold">
                                Per chi è?
                            </h3>

                            <p className="mt-4 text-gray-700">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id tempore, repellat cupiditate maxime saepe nemo. Fuga soluta velit qui porro non saepe nihil quo animi.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-extrabold">
                                Prerequisiti
                            </h3>

                            <p className="mt-4 text-gray-700">
                                Conoscenza base di programmazione in qualsiasi linguaggio
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-extrabold">
                                Progetto finale
                            </h3>

                            <p className="mt-4 text-gray-700">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id tempore, repellat cupiditate maxime saepe nemo. Fuga soluta velit qui porro non saepe nihil quo animi.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-extrabold">
                                Argomenti trattati
                            </h3>

                            <div className="flex flex-wrap max-w-sm mt-4 text-gray-700">
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

                        <div>
                            <h3 className="text-2xl font-extrabold">
                                Contenuti del corso
                            </h3>

                            <p className="max-w-3xl mt-4 text-gray-700">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, optio iure! Eum temporibus nisi qui suscipit est, ipsam reiciendis nobis molestias libero, iste voluptates pariatur laboriosam illum beatae fuga maxime.
                            </p>

                            <div className="flex flex-row mt-4 space-x-8 border-b border-gray-200">
                                <span className="py-6 font-medium border-b cursor-pointer text-violet-600 border-violet-600">1. Introduzione</span>
                                <span className="py-6 font-medium text-gray-600 cursor-pointer">2. Componenti</span>
                                <span className="py-6 font-medium text-gray-600 cursor-pointer">3. HTTP & JSON</span>
                            </div>

                            <div className="grid w-full grid-cols-2 mt-8 gap-x-4 gap-y-4">
                                {[...Array(6)].map(_ => (
                                    <div className="space-y-4">
                                        <div className="relative rounded aspect-video bg-violet-500">
                                            <div className="absolute inset-0 bg-gray-300 bg-center bg-no-repeat bg-cover rounded" style={{ backgroundImage: `url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)` }}></div>
                                        </div>

                                        <div className="flex flex-col px-1">
                                            <div>
                                                <div className="flex flex-row items-center w-full">
                                                    <h6 className="flex-1 text-lg font-medium leading-none">TabBar</h6>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                                    </svg>
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

                        <div>
                            <h3 className="text-2xl font-extrabold">
                                Domande frequenti
                            </h3>

                            <p className="max-w-3xl mt-4 text-gray-700">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, optio iure! Eum temporibus nisi qui suscipit est <span className="font-medium text-violet-600">customer support</span> team.
                            </p>

                            <div className="mt-8 space-y-8">
                                {[...Array(8)].map(_ => (
                                    <div className="flex flex-col space-y-1">
                                        <h4 className="font-semibold">How much do I pay?</h4>
                                        <p className="leading-relaxed text-gray-700"><span>Every course you create starts with a free period of 30 days. Afterward you're gonna be asked to pay 20$ to cover the fees for the next month of hosting, and so on every month (think Netflix). You don't have to pay for bandwidth nor storage.</span></p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
