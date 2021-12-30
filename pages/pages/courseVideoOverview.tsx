import React from "react"
import AppBar from "src/components/AppBar"

export default function courseVideoOverview() {
    return (
        <div className="w-screen min-h-screen bg-white">
            <AppBar title="Flutter 2 Start" />

            <div className="w-full text-white bg-gray-900">
                <div className="relative flex flex-row items-stretch mx-auto space-x-16 max-w-7xl">
                    <div className="flex flex-col w-full max-w-sm overflow-hidden text-gray-900 bg-white">
                        <div className="px-8 py-6 bg-gray-50">
                            <div className="flex flex-row items-start">
                                <h6 className="flex-1 text-lg font-semibold">Contenuti del corso</h6>

                                <button className="flex flex-row items-center -mt-0.5 justify-center w-8 h-8 space-x-4 rounded-full focus:outline-none hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>

                            <div className="w-full h-1 mt-4 bg-gray-300 rounded">
                                <div className="w-1/5 h-1 rounded bg-violet-700"></div>
                            </div>

                            <div className="flex flex-row items-center justify-between w-full mt-2">
                                <div className="flex flex-row items-center w-full space-x-2 text-sm text-gray-700">
                                    <span className="font-medium text-gray-900">20% Completato</span>

                                    <span>-</span>

                                    <span>10 ore rimaste</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex-1">
                            <div className="absolute inset-0 overflow-y-auto scrollbar-hidden">
                                {[...Array(10)].map((_) => (
                                    <div>
                                        <div className="sticky top-0 flex flex-row items-center px-8 py-4 space-x-4 border-gray-200 bg-gray-50 border-y">
                                            <div className="flex-1">
                                                <h6 className="font-bold">1. Introduzione</h6>

                                                <div className="flex flex-row items-center space-x-2 text-sm font-medium text-gray-500">
                                                    <span>0 / 5</span>

                                                    <span>|</span>

                                                    <span>1h 17min</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-center border border-gray-500 rounded-full w-7 h-7">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 15l7-7 7 7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="pl-8 divide-y divide-gray-100 pr-9">
                                            {[...Array(4)].map((_, index) => (
                                                <div className="flex flex-row items-center py-3 space-x-4">
                                                    <div className="w-16 bg-gray-900 rounded aspect-video"></div>

                                                    <div className="flex-1">
                                                        <h6 className="font-medium">
                                                            Introduzione
                                                        </h6>
                                                        <p className="text-xs text-gray-600">
                                                            23:40
                                                        </p>
                                                    </div>

                                                    <div className="flex items-center justify-center w-5 h-5 text-xs font-semibold border-2 rounded-full border-violet-500" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 py-12">
                        <div className="w-full bg-black rounded aspect-video"></div>

                        <div className="flex flex-row items-start mt-8">
                            <div className="flex-1">
                                <h1 className="text-3xl font-extrabold">Installazione</h1>
                                <h6 className="mt-1 text-sm font-medium text-gray-200">
                                    1. Introduzione
                                </h6>
                            </div>

                            <button className="px-4 pr-2 py-1.5 flex flex-row items-center space-x-4 border border-gray-800 rounded-full focus:outline-none">
                                <span className="font-medium">Guarda in autoplay</span>
                                <div className="w-12 h-6 bg-gray-700 rounded-full"></div>
                            </button>
                        </div>

                        <p className="mt-4 text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis enim
                            quis ut quod dolore, officiis deleniti, et cumque quaerat totam.
                        </p>

                        <div className="mt-8">
                            <div className="w-full h-1 bg-gray-700 rounded">
                                <div className="w-1/3 h-1 bg-white rounded"></div>
                            </div>

                            <div className="flex flex-row items-center mt-2 space-x-2 text-gray-400">
                                <span className="font-medium text-white">35% Completato</span>

                                <span>-</span>

                                <span>7 ore rimaste</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 mt-12 bg-gray-800 border border-gray-800 rounded">
                            {[
                                "Codice sorgente",
                                "Design",
                                "Documentazione PageView",
                                "Richiedi certificato",
                            ].map((text) => (
                                <div className="flex flex-row items-center p-4 m-0.5 space-x-4 text-white bg-gray-900 rounded cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-5 h-5 opacity-50"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                        />
                                    </svg>
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row w-full py-16 mx-auto space-x-16 max-w-7xl">
                <div className="w-full max-w-sm">
                    <div className="w-full max-w-xs">
                        <h2 className="text-2xl font-extrabold">Domande e risposte</h2>

                        <p className="mt-4 text-sm text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
                            cumque est numquam, sit ut voluptate quisquam repellendus corrupti,
                            libero magnam accusamus ipsum voluptas eos quae.
                        </p>

                        <button className="w-full h-12 px-4 mt-8 font-medium text-gray-900 bg-transparent border border-gray-400 rounded shadow-sm">
                            Hai una domanda?
                        </button>
                    </div>
                </div>

                <div className="w-full max-w-2xl py-2 space-y-6">
                    {[...Array(4)].map((_) => (
                        <div className="flex flex-row items-start space-x-6">
                            <div
                                className="flex-shrink-0 w-10 h-10 bg-purple-300 bg-center bg-no-repeat bg-cover rounded-full"
                                style={{
                                    backgroundImage:
                                        "url(https://media-exp1.licdn.com/dms/image/C4E03AQHO9fs7VQUjtw/profile-displayphoto-shrink_400_400/0/1594903913636?e=1644451200&v=beta&t=k9GKFQ_2QBzDf0cPhyH6lskIanwIYJE9jtpumViCKPw)",
                                }}
                            />

                            <div className="pb-6 border-b border-gray-200">
                                <div className="flex flex-row items-center">
                                    <div className="flex-1">
                                        <h6 className="font-semibold">Gabriel Gatu</h6>
                                        <span className="text-sm text-gray-600">
                                            2 settimane fa
                                        </span>
                                    </div>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-gray-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                </div>

                                <p className="mt-4 text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                    aperiam doloremque vitae error in? Non, qui minima soluta nobis
                                    omnis odit impedit provident pariatur nam in ducimus veniam
                                    facilis placeat.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
