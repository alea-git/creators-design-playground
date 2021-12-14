import React from "react"

export default function commandMenu() {
    return (
        <div className="w-screen min-h-screen p-12 bg-gray-600">
            <div className="w-full max-w-lg mx-auto overflow-hidden bg-white rounded-md shadow-lg">
                <div className="px-8 pt-6 pb-4 space-y-6 bg-gray-100">
                    <div className="flex flex-row items-center space-x-2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-lg font-medium">
                            Naviga tra le pagine
                        </span>
                    </div>
                    <div className="flex flex-row items-center space-x-8">
                        <div className="flex flex-row items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 text-sm font-medium text-gray-700 uppercase bg-gray-200 rounded">
                                ⌘
                            </div>
                            <div className="flex items-center justify-center w-6 h-6 text-sm font-medium text-gray-700 uppercase bg-gray-200 rounded">
                                K
                            </div>
                            <span className="text-gray-600">
                                Apri pannello
                            </span>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 text-sm font-medium text-gray-700 uppercase bg-gray-200 rounded">
                                ↑
                            </div>
                            <div className="flex items-center justify-center w-6 h-6 text-sm font-medium text-gray-700 uppercase bg-gray-200 rounded">
                                ↓
                            </div>
                            <span className="text-gray-600">
                                Naviga
                            </span>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 text-sm font-medium text-gray-700 uppercase bg-gray-200 rounded">
                                ↵
                            </div>
                            <span className="text-gray-600">
                                Seleziona
                            </span>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="mx-4 px-4 py-2.5 flex flex-row space-x-4 items-center rounded-sm bg-purple-100">
                        <div className="w-8 h-8 bg-purple-600 rounded-sm" />
                        <span className="flex-1 font-medium text-purple-800">
                            Entrate
                        </span>
                        <div className="flex flex-row items-center space-x-2 text-purple-800">
                            <span className="text-sm">
                                Seleziona
                            </span>
                            <div className="flex items-center justify-center w-6 h-6 text-sm font-medium text-purple-600 uppercase bg-purple-200 rounded">
                                ↵
                            </div>
                        </div>
                    </div>
                    <div className="mx-4 px-4 py-2.5 flex flex-row space-x-4 items-center rounded-sm bg-white">
                        <div className="w-8 h-8 bg-gray-300 rounded-sm" />
                        <span className="flex-1 text-gray-600">
                            Membri
                        </span>
                    </div>
                    <div className="mx-4 px-4 py-2.5 flex flex-row space-x-4 items-center rounded-sm bg-white">
                        <div className="w-8 h-8 bg-gray-300 rounded-sm" />
                        <span className="flex-1 text-gray-600">
                            Piattaforma
                        </span>
                    </div>
                    <div className="mx-4 px-4 py-2.5 flex flex-row space-x-4 items-center rounded-sm bg-white">
                        <div className="w-8 h-8 bg-gray-300 rounded-sm" />
                        <span className="flex-1 text-gray-600">
                            Integrazioni
                        </span>
                    </div>
                    <div className="mx-4 px-4 py-2.5 flex flex-row space-x-4 items-center rounded-sm bg-white">
                        <div className="w-8 h-8 bg-gray-300 rounded-sm" />
                        <span className="flex-1 text-gray-600">
                            Percorsi
                        </span>
                    </div>
                    <div className="mx-4 px-4 py-2.5 flex flex-row space-x-4 items-center rounded-sm bg-white">
                        <div className="w-8 h-8 bg-gray-300 rounded-sm" />
                        <span className="flex-1 text-gray-600">
                            Corsi
                        </span>
                    </div>
                    <div className="mx-4 px-4 py-2.5 flex flex-row space-x-4 items-center rounded-sm bg-white">
                        <div className="w-8 h-8 bg-gray-300 rounded-sm" />
                        <span className="flex-1 text-gray-600">
                            Codici sconto
                        </span>
                    </div>
                </div>
                <div className="px-8 py-6 bg-gray-100">
                    <h6 className="font-medium text-gray-6ì700">
                        Hai bisogno di assistenza?
                    </h6>
                    <p className="text-sm text-gray-500">
                        Abbiamo una live chat sempre disponibile per i nostri Creators.
                    </p>
                </div>
            </div>
        </div>

    )
}
