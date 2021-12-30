import classNames from "classnames"
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
                        <div className="flex flex-row items-center mt-4 space-x-1">
                            <span className="px-3 py-1 text-sm font-medium rounded text-violet-100 bg-violet-900">
                                Anteprima
                            </span>
                            <span className="px-3 py-1 text-sm font-medium text-blue-100 bg-blue-900 rounded">
                                Flutter 2
                            </span>
                            <span className="px-3 py-1 text-sm font-medium text-green-100 bg-green-900 rounded">
                                Aggiornato 2 mesi fa
                            </span>
                        </div>
                        <p className="max-w-3xl mt-4 leading-6 text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos quibusdam, repellendus, necessitatibus esse ad iure voluptatum totam quasi sunt officia excepturi! Reiciendis, iusto! Possimus pariatur nesciunt itaque sequi eveniet!
                        </p>
                    </div>
                    <div className="relative w-full mt-8">
                        <div className="flex flex-row items-stretch max-w-xl mx-auto">
                            <div className="flex flex-row items-center flex-1">
                                <div className="flex flex-col flex-1 py-3 space-y-1 text-left">
                                    <span className="text-xs text-gray-400 uppercase">
                                        Lezioni guardate
                                    </span>
                                    <span className="font-medium">
                                        12 <span className="mx-1 font-normal text-gray-400">su</span> 123
                                    </span>
                                </div>
                                <div className="w-5 h-5 -mt-0.5 bg-transparent rounded-full border-[3px] border-gray-100" />
                            </div>

                            <div className="w-8 mx-12" style={{ background: 'linear-gradient(to top left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), #ffffff22 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%)' }} />

                            <div className="flex flex-row items-center flex-1">
                                <div className="flex flex-col flex-1 py-3 space-y-1 text-left">
                                    <span className="text-xs text-gray-400 uppercase">
                                        Streak giorni
                                    </span>
                                    <span className="font-medium">
                                        4
                                    </span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentHeader>

            <div className="border-b border-gray-200 sticky top-[4rem] bg-white z-10">
                <div className="flex flex-row items-center justify-between w-full mx-auto space-x-8 max-w-7xl">
                    <div className="flex items-center justify-center py-2.5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                    </div>

                    <div className="flex flex-row flex-1 py-2 overflow-x-auto scrollbar-hidden">
                        <span className="font-medium whitespace-nowrap text-violet-900 py-2.5 px-4 bg-violet-100 rounded cursor-pointer hover:border-gray-900">1. Introduzione</span>
                        <span className="font-medium whitespace-nowrap text-gray-600 py-2.5 px-4 cursor-pointer hover:border-gray-900">2. Componenti</span>
                        <span className="font-medium whitespace-nowrap text-gray-600 py-2.5 px-4 cursor-pointer hover:border-gray-900">3. Layout</span>
                        <span className="font-medium whitespace-nowrap text-gray-600 py-2.5 px-4 cursor-pointer hover:border-gray-900">4. Pagine scrollabili</span>
                        <span className="font-medium whitespace-nowrap text-gray-600 py-2.5 px-4 cursor-pointer hover:border-gray-900">5. Form</span>
                        <span className="font-medium whitespace-nowrap text-gray-600 py-2.5 px-4 cursor-pointer hover:border-gray-900">6. Componenti di navigazione</span>
                        <span className="font-medium whitespace-nowrap text-gray-600 py-2.5 px-4 cursor-pointer hover:border-gray-900">7. HTTP &amp; JSON</span>
                    </div>
                    <div className="flex-row items-center flex-shrink-0">
                        <button className="flex-shrink-0 py-2.5 px-4 flex flex-row items-center justify-center font-medium text-white bg-violet-600 rounded">
                            <span>
                                Riprendi dall'ultima lezione
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full py-8 mx-auto max-w-7xl">
                <div className="flex flex-row items-center px-4 space-x-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>Cerca per nome della lezione o argomenti... </span>
                </div>

                <div className="grid grid-cols-4 gap-8 pt-8 mx-auto max-w-7xl">
                    {[...Array(6)].map((_, index) => (
                        <div className="space-y-4">
                            <div className="pb-[66%] relative bg-violet-500 rounded overflow-hidden">
                                <div className={classNames("absolute inset-0 bg-gray-300 bg-center bg-no-repeat bg-cover rounded", {
                                    "m-2": index === 1,
                                })} style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                            </div>
                            <div className="flex flex-col px-1">
                                <div>
                                    <div className="flex flex-row items-center w-full">
                                        <h6 className="flex-1 text-lg font-medium leading-none">TabBar</h6>
                                        <div className="w-5 h-5 -mt-0.5 bg-white rounded-full border-[3px] border-violet-500" />
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

            <div className="w-full h-[1px] bg-gray-200"></div>

            <div className="grid grid-cols-4 gap-8 py-8 mx-auto max-w-7xl">
                {[...Array(2)].map(_ => (
                    <div className="space-y-4">
                        <div className="pb-[66%] relative bg-violet-500 rounded overflow-hidden">
                            <div className="absolute inset-0 bg-gray-300 bg-center bg-no-repeat bg-cover rounded" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                        </div>
                        <div className="flex flex-col px-1">
                            <div>
                                <div className="flex flex-row items-center w-full">
                                    <h6 className="flex-1 text-lg font-medium leading-none">TabBar</h6>
                                    <div className="w-5 h-5 -mt-0.5 bg-white rounded-full border-[3px] border-violet-500" />
                                </div>
                                <span className="text-sm text-gray-500">
                                    8:32 — 2. Componenti
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
