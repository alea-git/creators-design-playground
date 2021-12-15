import React from "react"
import AppBar from "src/components/AppBar"
import ContentHeader from "src/components/ContentHeader"

export default function courseLanding() {
    return (
        <div className="w-screen min-h-screen text-gray-900 bg-white">
            <AppBar />

            <ContentHeader>
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight">
                        Flutter 2 Start
                    </h1>

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

                    <p className="max-w-3xl mt-4 leading-6 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos quibusdam, repellendus, necessitatibus esse ad iure voluptatum totam quasi sunt officia excepturi! Reiciendis, iusto! Possimus pariatur nesciunt itaque sequi eveniet!
                    </p>
                </div>
            </ContentHeader>

            <div className="border-b border-gray-200 sticky top-[4.54rem] bg-white z-10">
                <div className="flex flex-row items-center justify-between w-full py-2 mx-auto max-w-7xl">
                    <div className="flex flex-row flex-1">
                        <span className="font-medium text-violet-800 py-2.5 px-4 bg-violet-100 rounded-sm cursor-pointer">Generale</span>
                        <span className="font-medium text-gray-500 py-2.5 px-4 cursor-pointer">Recensioni</span>
                        <span className="font-medium text-gray-500 py-2.5 px-4 cursor-pointer">Contenuti</span>
                        <span className="font-medium text-gray-500 py-2.5 px-4 cursor-pointer">Sommario</span>
                        <span className="font-medium text-gray-500 py-2.5 px-4 cursor-pointer">Domande frequenti</span>
                    </div>

                    <div className="flex flex-row flex-shrink-0 space-x-2">
                        <button className="py-2.5 px-4 bg-violet-50 flex flex-row font-medium items-center justify-center text-violet-900 rounded-sm">
                            <span>
                                Acquisto aziendale?
                            </span>
                        </button>

                        <button className="py-2.5 px-4 flex flex-row items-center justify-center font-medium text-white bg-violet-600 rounded-sm">
                            <span>
                                Compra € 77.00
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative w-full pb-8 mx-auto space-y-32 max-w-7xl">
                <div className="grid w-full grid-cols-12 mt-16 gap-x-16">
                    <div className="col-span-7">
                        <div className="w-full pb-[56.25%] rounded-sm bg-cover bg-center bg-no-repeat bg-gray-900 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white/20" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center col-span-5 space-y-8">
                        <div className="space-y-4">
                            <h6 className="inline pb-2 text-lg font-semibold border-b-2 border-purple-600">
                                Highlights
                            </h6>

                            <ul>
                                <li className="py-1.5 flex flex-row items-center space-x-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    <span className="text-gray-700">
                                        4 sezioni
                                    </span>
                                </li>
                                <li className="py-1.5 flex flex-row items-center space-x-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    <span className="text-gray-700">
                                        23 lezioni
                                    </span>
                                </li>
                                <li className="py-1.5 flex flex-row items-center space-x-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    <span className="text-gray-700">
                                        4 ore
                                    </span>
                                </li>
                                <li className="py-1.5 flex flex-row items-center space-x-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    <span className="text-gray-700">
                                        Materiali aggiuntivi
                                    </span>
                                </li>
                                <li className="py-1.5 flex flex-row items-center space-x-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    <span className="text-gray-700">
                                        Supporto community
                                    </span>
                                </li>
                                <li className="py-1.5 flex flex-row items-center space-x-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    <span className="text-gray-700">
                                        Supporto insegnante
                                    </span>
                                </li>
                                <li className="py-1.5 flex flex-row items-center space-x-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    <span className="text-gray-700">
                                        Accesso per la vita
                                    </span>
                                </li>
                                <li className="py-1.5 flex flex-row items-center space-x-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    <span className="text-gray-700">
                                        Certificato completamento
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="relative w-full">
                    <div className="grid grid-cols-3 gap-8">
                        <div className="space-y-8">
                            <div className="p-8 space-y-4 rounded-sm bg-gray-50">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                                    <div>
                                        <h6 className="font-medium">
                                            Ryan Florence
                                        </h6>

                                        <p className="text-sm text-gray-400">
                                            Remix & React training
                                        </p>
                                    </div>
                                </div>
                                <p className="leading-6 text-gray-500">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptas praesentium eos tenetur, amet maiores? Dolorem corporis fugiat eaque.
                                </p>
                            </div>

                            <div className="p-8 space-y-4 rounded-sm bg-gray-50">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                                    <div>
                                        <h6 className="font-medium">
                                            Ryan Florence
                                        </h6>

                                        <p className="text-sm text-gray-400">
                                            Remix & React training
                                        </p>
                                    </div>
                                </div>
                                <p className="leading-6 text-gray-500">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptas praesentium eos tenetur, amet maiores?
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="p-8 space-y-4 rounded-sm bg-gray-50">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                                    <div>
                                        <h6 className="font-medium">
                                            Ryan Florence
                                        </h6>

                                        <p className="text-sm text-gray-400">
                                            Remix & React training
                                        </p>
                                    </div>
                                </div>
                                <p className="leading-6 text-gray-500">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptas praesentium eos tenetur, amet maiores?
                                </p>
                            </div>

                            <div className="p-8 space-y-4 rounded-sm bg-gray-50">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                                    <div>
                                        <h6 className="font-medium">
                                            Ryan Florence
                                        </h6>

                                        <p className="text-sm text-gray-400">
                                            Remix & React training
                                        </p>
                                    </div>
                                </div>
                                <p className="leading-6 text-gray-500">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptas praesentium eos tenetur, amet maiores? Dolorem corporis fugiat eaque.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="p-8 space-y-4 rounded-sm bg-gray-50">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                                    <div>
                                        <h6 className="font-medium">
                                            Ryan Florence
                                        </h6>

                                        <p className="text-sm text-gray-400">
                                            Remix & React training
                                        </p>
                                    </div>
                                </div>
                                <p className="leading-6 text-gray-500">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptas praesentium eos tenetur, amet maiores? Dolorem corporis fugiat eaque.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>

                            <div className="p-8 space-y-4 rounded-sm bg-gray-50">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                                    <div>
                                        <h6 className="font-medium">
                                            Ryan Florence
                                        </h6>

                                        <p className="text-sm text-gray-400">
                                            Remix & React training
                                        </p>
                                    </div>
                                </div>
                                <p className="leading-6 text-gray-500">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptas praesentium eos tenetur, amet maiores?
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-4 h-1/2 bg-gradient-to-b from-transparent via-white/75 to-white">
                        <button className="py-1.5 flex flex-row items-center space-x-1 shadow-sm bg-gray-800 px-4 font-medium text-gray-100 rounded-full">
                            <span>
                                Mostra più recensioni
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-extrabold">
                        Contenuti del corso
                    </h2>

                    <p className="max-w-3xl mt-4 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, optio iure! Eum temporibus nisi qui suscipit est, ipsam reiciendis nobis molestias libero, iste voluptates pariatur laboriosam illum beatae fuga maxime.
                    </p>

                    <div className="flex flex-row mt-4 space-x-8 border-b border-gray-200">
                        <span className="py-6 font-medium border-b cursor-pointer text-violet-600 border-violet-600">1. Generale</span>
                        <span className="py-6 font-medium text-gray-500 cursor-pointer">2. Recensioni</span>
                        <span className="py-6 font-medium text-gray-500 cursor-pointer">3. Contenuti</span>
                        <span className="py-6 font-medium text-gray-500 cursor-pointer">4. Sommario</span>
                        <span className="py-6 font-medium text-gray-500 cursor-pointer">5. Domande frequenti</span>
                    </div>

                    <div className="grid w-full grid-cols-4 gap-8 mt-8">
                        <div className="space-y-4">
                            <div className="pb-[66%] relative bg-violet-500 rounded-sm">
                                <div className="absolute inset-0 bg-gray-300 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: `url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)` }}></div>
                            </div>

                            <div className="flex flex-col px-1">
                                <div>
                                    <div className="flex flex-row items-center w-full">
                                        <h6 className="flex-1 text-lg font-medium leading-none">TabBar</h6>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                        </svg>
                                    </div>

                                    <span className="text-sm text-gray-400">
                                        8:32 — 1. Introduzione
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="pb-[66%] relative bg-violet-500 rounded-sm">
                                <div className="absolute inset-0 bg-gray-300 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: `url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)` }}></div>
                            </div>

                            <div className="flex flex-col px-1">
                                <div>
                                    <div className="flex flex-row items-center w-full">
                                        <h6 className="flex-1 text-lg font-medium leading-none">TabBar</h6>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                        </svg>
                                    </div>

                                    <span className="text-sm text-gray-400">
                                        8:32 — 1. Introduzione
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="pb-[66%] relative bg-violet-500 rounded-sm">
                                <div className="absolute inset-0 bg-gray-300 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: `url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)` }}></div>
                            </div>

                            <div className="flex flex-col px-1">
                                <div>
                                    <div className="flex flex-row items-center w-full">
                                        <h6 className="flex-1 text-lg font-medium leading-none">TabBar</h6>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                        </svg>
                                    </div>

                                    <span className="text-sm text-gray-400">
                                        8:32 — 1. Introduzione
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="pb-[66%] relative bg-violet-500 rounded-sm">
                                <div className="absolute inset-0 bg-gray-300 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: `url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)` }}></div>
                            </div>

                            <div className="flex flex-col px-1">
                                <div>
                                    <div className="flex flex-row items-center w-full">
                                        <h6 className="flex-1 text-lg font-medium leading-none">TabBar</h6>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                        </svg>
                                    </div>

                                    <span className="text-sm text-gray-400">
                                        8:32 — 1. Introduzione
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="pb-[66%] relative bg-violet-500 rounded-sm">
                                <div className="absolute inset-0 bg-gray-300 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: `url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)` }}></div>
                            </div>

                            <div className="flex flex-col px-1">
                                <div>
                                    <div className="flex flex-row items-center w-full">
                                        <h6 className="flex-1 text-lg font-medium leading-none">TabBar</h6>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                        </svg>
                                    </div>

                                    <span className="text-sm text-gray-400">
                                        8:32 — 1. Introduzione
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="pb-[66%] relative bg-violet-500 rounded-sm">
                                <div className="absolute inset-0 bg-gray-300 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: `url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)` }}></div>
                            </div>

                            <div className="flex flex-col px-1">
                                <div>
                                    <div className="flex flex-row items-center w-full">
                                        <h6 className="flex-1 text-lg font-medium leading-none">TabBar</h6>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                        </svg>
                                    </div>

                                    <span className="text-sm text-gray-400">
                                        8:32 — 1. Introduzione
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-32">
                    <div>
                        <h2 className="text-3xl font-extrabold">
                            Sommario
                        </h2>

                        <p className="max-w-3xl mt-4 text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, optio iure! Eum temporibus nisi qui suscipit est, ipsam reiciendis nobis molestias libero, iste voluptates pariatur laboriosam illum beatae fuga maxime.
                        </p>

                        <div className="grid grid-cols-2 mt-16 gap-x-12 gap-y-16">
                            <div className="pt-4 space-y-4 border-t border-gray-200">
                                <h6 className="font-medium">
                                    Per chi è?
                                </h6>

                                <p className="text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id tempore, repellat cupiditate maxime saepe nemo. Fuga soluta velit qui porro non saepe nihil quo animi.
                                </p>
                            </div>

                            <div className="pt-4 space-y-4 border-t border-gray-200">
                                <h6 className="font-medium">
                                    Requisiti
                                </h6>

                                <p className="text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id tempore, repellat cupiditate maxime saepe nemo. Fuga soluta velit qui porro non saepe nihil quo animi. Ullam praesentium dolore ducimus dolores.
                                </p>
                            </div>

                            <div className="pt-4 space-y-4 border-t border-gray-200">
                                <h6 className="font-medium">
                                    Obiettivi
                                </h6>

                                <p className="text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id tempore, repellat cupiditate maxime saepe nemo. Fuga soluta velit qui porro non saepe nihil quo animi.
                                </p>
                            </div>

                            <div className="pt-4 space-y-4 border-t border-gray-200">
                                <h6 className="font-medium">
                                    Progetto finale
                                </h6>

                                <p className="text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id tempore, repellat cupiditate maxime saepe nemo.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-gray-200 rounded-sm"></div>
                        <div className="bg-gray-200 rounded-sm"></div>
                        <div className="bg-gray-200 rounded-sm"></div>
                        <div className="bg-gray-200 rounded-sm"></div>
                    </div>
                </div>

                <div className="grid grid-cols-12 mt-16 gap-x-16">
                    <div className="col-span-5">
                        <h2 className="text-3xl font-extrabold">
                            Domande frequenti
                        </h2>

                        <p className="max-w-3xl mt-4 text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, optio iure! Eum temporibus nisi qui suscipit est <span className="font-medium text-violet-600">customer support</span> team.
                        </p>
                    </div>

                    <div className="col-span-7 space-y-8">
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-medium">How much do I pay?</h4>
                            <p className="leading-relaxed text-gray-500"><span>Every course you create starts with a free period of 30 days. Afterward you're gonna be asked to pay 20$ to cover the fees for the next month of hosting, and so on every month (think Netflix). You don't have to pay for bandwidth nor storage.</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-medium">Do I have to pay for free courses?</h4>
                            <p className="leading-relaxed text-gray-500"><span>Yes, it's your choice to make someone pay for your courses. We apply the same pricing to premium and free courses.</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-medium">Why 30 free days?</h4>
                            <p className="leading-relaxed text-gray-500"><span>You never pay to create a course and for the first 30 days, this free period is meant to evaluate Creators.so, to set up the course and prepare for launch.</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-medium">Do I need a credit card to sign up?</h4>
                            <p className="leading-relaxed text-gray-500"><span>No, creating a new platform is completely free and no credit card is required. We ask for a credit card only when you have to pay for your course invoices, after the free course period of 30 days.</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-medium">How to stop paying for a course?</h4>
                            <p className="leading-relaxed text-gray-500"><span>Just delete it. We apply a 20$ / course / month fee to pay for the service, hosting, and bandwidth. If you keep it, we have to charge you for it.</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-medium">How can a user pay for my course?</h4>
                            <p className="leading-relaxed text-gray-500"><span>Using PayPal or a debit/credit card accepted by Stripe.</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-medium">How do I receive payments from the platform?</h4>
                            <p className="leading-relaxed text-gray-500"><span>Directly to your Stripe/PayPal account (we don't act as an intermediary).</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-medium">What if I have another question?</h4>
                            <p className="leading-relaxed text-gray-500"><span>You can send us an email to <a href="mailto:team@creators.so" className="underline">team@creators.so</a> or contact us directly on Telegram (<a target="_blank" href="https://t.me/Creators_so" className="underline">@creators_so</a>),</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-medium">Do you offer educational discounts?</h4>
                            <p className="leading-relaxed text-gray-500"><span>Yes, if you are a teacher or working in the educational sector contact us at <a href="mailto:team@creators.so" className="underline">team@creators.so</a> using your institutional email.</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-medium">Do you offer enterprise discounts?</h4>
                            <p className="leading-relaxed text-gray-500"><span>Yes, if you have to upload a large number of courses or have specific needs contact us at <a href="mailto:team@creators.so" className="underline">team@creators.so</a> using your company email.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
