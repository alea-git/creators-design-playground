import React from "react"

export default function filter() {
    return (
        <div className="flex items-center justify-center w-screen min-h-screen p-12 bg-gray-600">
            <div className="flex flex-col shadow-lg">
                <div className="inline-block w-16 ml-4 overflow-hidden">
                    <div className="h-5 w-5 bg-gray-100 rounded -mb-0.5 rotate-45 transform origin-bottom-left" />
                </div>
                <div className="w-[48rem] bg-white rounded-md flex flex-row items-stretch overflow-hidden">
                    <div className="w-56 px-3 py-5 space-y-1 bg-gray-100">
                        <div className="flex flex-row items-center px-2 py-2 space-x-2 border rounded cursor-pointer border-violet-700 bg-violet-100 text-violet-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="flex-1 font-medium">
                                Data
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-75" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex flex-row items-center px-2 py-2 space-x-2 text-gray-600 border-2 border-transparent cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <span className="flex-1">
                                Contenuto
                            </span>
                        </div>
                        <div className="flex flex-row items-center px-2 py-2 space-x-2 text-gray-600 border-2 border-transparent cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="flex-1">
                                Valore
                            </span>
                        </div>
                        <div className="px-2 py-2 border-2 border-transparent cursor-pointer text-violet-700">
                            <div className="flex flex-row items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="flex-1 font-medium">
                                    Account
                                </span>
                                <div className="w-1 h-1 rounded-full bg-violet-700" />
                            </div>
                            <p className="text-xs ml-[1.75rem] text-violet-700">
                                5 corsi selezionati
                            </p>
                        </div>
                        <div className="flex flex-row items-center px-2 py-2 space-x-2 text-gray-600 border-2 border-transparent cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            <span className="flex-1">
                                Metodo
                            </span>
                        </div>
                        <div className="flex flex-row items-center px-2 py-2 space-x-2 text-gray-600 border-2 border-transparent cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                            <span className="flex-1">
                                Origine
                            </span>
                        </div>
                        <div className="flex flex-row items-center px-2 py-2 space-x-2 text-gray-600 border-2 border-transparent cursor-pointer">
                            <svg className="w-5 h-5" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.943 2.667A1 1 0 0 0 13 2h-2a1 1 0 0 0-.943.667L4.292 19H2v2h20v-2h-2.292L13.943 2.667zM15.47 13H8.53l1.06-3h4.82l1.06 3zm-3.763-9h.586l1.412 4h-3.41l1.412-4zM7.825 15h8.35l1.412 4H6.413l1.412-4z" />
                            </svg>
                            <span className="flex-1">
                                Stato
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 px-8 py-8">
                        <div className="flex flex-col space-y-2">
                            <span className="text-sm font-medium text-gray-700">
                                Mostra le entrate
                            </span>
                            <div className="w-full border border-gray-200 rounded bg-gray-50">
                                <div className="flex flex-row items-center h-10 p-2 space-x-4 text-gray-900">
                                    <span className="flex-1">
                                        Sempre
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="-mx-8 h-[1px] bg-gray-200 my-8" />
                        <div className="flex flex-row items-end space-x-4">
                            <div className="flex-1 space-y-2">
                                <span className="text-sm font-medium text-gray-700">
                                    Da
                                </span>
                                <div className="w-full border border-gray-200 rounded bg-gray-50">
                                    <div className="flex flex-row items-center h-10 p-2 space-x-4 text-gray-900">
                                        Gen 1, 2017
                                    </div>
                                </div>
                            </div>
                            <span className="mb-2.5 text-gray-300">
                                —
                            </span>
                            <div className="flex-1 space-y-2">
                                <span className="text-sm font-medium text-gray-700">
                                    A
                                </span>
                                <div className="w-full border border-gray-200 rounded bg-gray-50">
                                    <div className="flex flex-row items-center h-10 p-2 space-x-4 text-gray-900">
                                        Oggi
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-12 mt-8">
                            <div>
                                <div className="flex flex-row items-center justify-between px-6 space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-600">
                                        2020
                                    </span>
                                    <div />
                                </div>
                                <div className="grid grid-cols-3 mt-2">
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Gen</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Feb</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Mar</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Apr</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Mag</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Giu</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Lug</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Ago</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Set</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Ott</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Nov</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Dic</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row items-center justify-center px-4 space-x-4">
                                    <span className="text-sm font-medium text-gray-600">
                                        2021
                                    </span>
                                </div>
                                <div className="grid grid-cols-3 mt-2">
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Gen</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Feb</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Mar</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Apr</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Mag</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Giu</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Lug</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Ago</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Set</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Ott</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Nov</span>
                                    <span className="p-2 text-sm text-center text-gray-700 rounded cursor-pointer hover:bg-gray-100">Dic</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
