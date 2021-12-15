import React from "react"
import AppBar from "src/components/AppBar"

export default function courseVideoOverview() {
    return (
        <div className="w-screen min-h-screen bg-white">
            <AppBar />

            <div className="relative flex flex-row w-full mx-auto space-x-16 max-w-7xl">
                <div className="flex-1 py-8 space-y-6">
                    <div className="w-full pb-[56.25%] rounded-sm bg-cover bg-center bg-no-repeat bg-gray-900" />
                    <div className="flex flex-row space-x-4">
                        <div className="flex-1">
                            <h1 className="text-xl font-semibold">
                                TabBar
                            </h1>
                            <p className="text-gray-500">
                                1. Introduzione — 50:42
                            </p>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <button className="px-4 pr-2 py-1.5 flex flex-row items-center space-x-4 text-gray-900 border border-gray-200 rounded-full focus:outline-none">
                                <span className="font-medium">
                                    Guarda in autoplay
                                </span>
                                <div className="w-12 h-6 bg-gray-300 rounded-full" />
                            </button>
                            <div className="flex items-center justify-center w-6 h-6 text-white bg-purple-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate odit culpa quam quisquam quo inventore recusandae, nesciunt impedit mollitia numquam quasi in sint ab porro. Saepe nisi excepturi animi molestias.
                    </p>
                    <div className="grid grid-cols-2 border border-gray-200 rounded-sm gap-[1px] bg-gray-200">
                        <div className="flex flex-row items-center p-4 space-x-4 text-gray-600 bg-white border border-transparent cursor-pointer hover:text-purple-600 hover:bg-purple-50 hover:border-purple-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            <span>
                                Codice sorgente
                            </span>
                        </div>
                        <div className="flex flex-row items-center p-4 space-x-4 text-gray-600 bg-white border border-transparent cursor-pointer hover:text-purple-600 hover:bg-purple-50 hover:border-purple-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            <span>
                                Design
                            </span>
                        </div>
                        <div className="flex flex-row items-center p-4 space-x-4 text-gray-600 bg-white border border-transparent cursor-pointer hover:text-purple-600 hover:bg-purple-50 hover:border-purple-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            <span>
                                Documentazione PageView
                            </span>
                        </div>
                        <div className="flex flex-row items-center p-4 space-x-4 text-gray-600 bg-white border border-transparent cursor-pointer hover:text-purple-600 hover:bg-purple-50 hover:border-purple-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            <span>
                                Richiedi certificato
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center pt-4 pb-2 space-x-4 border-b border-gray-200">
                        <div className="flex flex-row items-center flex-1 space-x-4">
                            <h6 className="text-xl font-semibold text-gray-900">
                                Domande e risposte
                            </h6>
                            <span className="text-gray-400">
                                23
                            </span>
                        </div>
                        <button className="px-4 py-1.5 flex flex-row items-center space-x-2 text-gray-900 border border-gray-200 rounded-sm focus:outline-none">
                            <span className="font-medium">
                                Hai una domanda?
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full max-w-2xl py-2 space-y-8">
                        <div className="flex flex-row items-start space-x-6">
                            <div className="border-[3px] border-purple-500 p-1 rounded-full">
                                <div className="w-6 h-6 bg-purple-300 rounded-full" />
                            </div>
                            <div className="space-y-1">
                                <div className="flex flex-row items-baseline space-x-4">
                                    <h6 className="font-medium">
                                        Gabriel Gatu
                                    </h6>
                                    <span className="text-sm text-gray-400">
                                        2 settimane fa
                                    </span>
                                </div>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde aperiam doloremque vitae error in? Non, qui minima soluta nobis omnis odit impedit provident pariatur nam in ducimus veniam facilis placeat.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row items-start space-x-6">
                            <div className="border-[3px] border-purple-500 p-1 rounded-full">
                                <div className="w-6 h-6 bg-purple-300 rounded-full" />
                            </div>
                            <div className="space-y-1">
                                <div className="flex flex-row items-baseline space-x-4">
                                    <h6 className="font-medium">
                                        Gabriel Gatu
                                    </h6>
                                    <span className="text-sm text-gray-400">
                                        2 settimane fa
                                    </span>
                                </div>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde aperiam doloremque vitae error in? Non, qui minima soluta nobis omnis odit impedit provident pariatur nam in ducimus veniam facilis placeat.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row items-start space-x-6">
                            <div className="border-[3px] border-purple-500 p-1 rounded-full">
                                <div className="w-6 h-6 bg-purple-300 rounded-full" />
                            </div>
                            <div className="space-y-1">
                                <div className="flex flex-row items-baseline space-x-4">
                                    <h6 className="font-medium">
                                        Gabriel Gatu
                                    </h6>
                                    <span className="text-sm text-gray-400">
                                        2 settimane fa
                                    </span>
                                </div>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde aperiam doloremque vitae error in? Non, qui minima soluta nobis omnis odit impedit provident pariatur nam in ducimus veniam facilis placeat.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row items-start space-x-6">
                            <div className="border-[3px] border-purple-500 p-1 rounded-full">
                                <div className="w-6 h-6 bg-purple-300 rounded-full" />
                            </div>
                            <div className="space-y-1">
                                <div className="flex flex-row items-baseline space-x-4">
                                    <h6 className="font-medium">
                                        Gabriel Gatu
                                    </h6>
                                    <span className="text-sm text-gray-400">
                                        2 settimane fa
                                    </span>
                                </div>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde aperiam doloremque vitae error in? Non, qui minima soluta nobis omnis odit impedit provident pariatur nam in ducimus veniam facilis placeat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-sm" />
                <div className="w-full max-w-sm fixed py-4 top-0 pt-[70px] right-[8.5rem] bottom-0 overflow-y-auto">
                    <div className="space-y-2 bg-white">
                        <div className="sticky top-0 flex flex-row items-center pt-8 pb-4 space-x-4 bg-white">
                            <div className="flex items-center justify-center w-8 h-8 border border-gray-200 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </div>
                            <h6 className="text-lg font-semibold">
                                1. Introduzione
                            </h6>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-24 h-16 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                            <div className="flex-1">
                                <h6 className="font-medium leading-none">
                                    1. Introduzione
                                </h6>
                                <span className="text-sm text-gray-400">
                                    23:40
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-5 h-5 text-white bg-purple-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-24 h-16 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                            <div className="flex-1">
                                <h6 className="font-medium leading-none">
                                    1. Introduzione
                                </h6>
                                <span className="text-sm text-gray-400">
                                    23:40
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-5 h-5 text-white bg-purple-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-24 h-16 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                            <div className="flex-1">
                                <h6 className="font-medium leading-none">
                                    1. Introduzione
                                </h6>
                                <span className="text-sm text-gray-400">
                                    23:40
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-5 h-5 text-white bg-purple-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-24 h-16 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                            <div className="flex-1">
                                <h6 className="font-medium leading-none">
                                    1. Introduzione
                                </h6>
                                <span className="text-sm text-gray-400">
                                    23:40
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-5 h-5 text-white bg-purple-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2 bg-white">
                        <div className="sticky top-0 flex flex-row items-center pt-8 pb-4 space-x-4 bg-white">
                            <div className="flex items-center justify-center w-8 h-8 border border-gray-200 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </div>
                            <h6 className="text-lg font-semibold">
                                2. Componenti
                            </h6>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-24 h-16 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                            <div className="flex-1">
                                <h6 className="font-medium leading-none">
                                    1. Introduzione
                                </h6>
                                <span className="text-sm text-gray-400">
                                    23:40
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-5 h-5 text-white bg-purple-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-24 h-16 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                            <div className="flex-1">
                                <h6 className="font-medium leading-none">
                                    1. Introduzione
                                </h6>
                                <span className="text-sm text-gray-400">
                                    23:40
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-5 h-5 text-white bg-purple-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-24 h-16 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                            <div className="flex-1">
                                <h6 className="font-medium leading-none">
                                    1. Introduzione
                                </h6>
                                <span className="text-sm text-gray-400">
                                    23:40
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-5 h-5 text-white bg-purple-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-24 h-16 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                            <div className="flex-1">
                                <h6 className="font-medium leading-none">
                                    1. Introduzione
                                </h6>
                                <span className="text-sm text-gray-400">
                                    23:40
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-5 h-5 text-white bg-purple-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2 bg-white">
                        <div className="sticky top-0 flex flex-row items-center pt-8 pb-4 space-x-4 bg-white">
                            <div className="flex items-center justify-center w-8 h-8 border border-gray-200 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </div>
                            <h6 className="text-lg font-semibold">
                                3. Liste scrollabili
                            </h6>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-24 h-16 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                            <div className="flex-1">
                                <h6 className="font-medium leading-none">
                                    1. Introduzione
                                </h6>
                                <span className="text-sm text-gray-400">
                                    23:40
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-5 h-5 text-white bg-purple-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-24 h-16 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                            <div className="flex-1">
                                <h6 className="font-medium leading-none">
                                    1. Introduzione
                                </h6>
                                <span className="text-sm text-gray-400">
                                    23:40
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-5 h-5 text-white bg-purple-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-24 h-16 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                            <div className="flex-1">
                                <h6 className="font-medium leading-none">
                                    1. Introduzione
                                </h6>
                                <span className="text-sm text-gray-400">
                                    23:40
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-5 h-5 text-white bg-purple-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-24 h-16 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                            <div className="flex-1">
                                <h6 className="font-medium leading-none">
                                    1. Introduzione
                                </h6>
                                <span className="text-sm text-gray-400">
                                    23:40
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-5 h-5 text-white bg-purple-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2 bg-white">
                        <div className="sticky top-0 flex flex-row items-center pt-8 pb-4 space-x-4 bg-white">
                            <div className="flex items-center justify-center w-8 h-8 border border-gray-200 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </div>
                            <h6 className="text-lg font-semibold">
                                4. HTTP &amp; JSON
                            </h6>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-24 h-16 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                            <div className="flex-1">
                                <h6 className="font-medium leading-none">
                                    1. Introduzione
                                </h6>
                                <span className="text-sm text-gray-400">
                                    23:40
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-5 h-5 text-white bg-purple-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-24 h-16 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                            <div className="flex-1">
                                <h6 className="font-medium leading-none">
                                    1. Introduzione
                                </h6>
                                <span className="text-sm text-gray-400">
                                    23:40
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-5 h-5 text-white bg-purple-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-24 h-16 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                            <div className="flex-1">
                                <h6 className="font-medium leading-none">
                                    1. Introduzione
                                </h6>
                                <span className="text-sm text-gray-400">
                                    23:40
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-5 h-5 text-white bg-purple-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-24 h-16 bg-center bg-no-repeat bg-cover rounded-sm" style={{ backgroundImage: 'url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)' }} />
                            <div className="flex-1">
                                <h6 className="font-medium leading-none">
                                    1. Introduzione
                                </h6>
                                <span className="text-sm text-gray-400">
                                    23:40
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-5 h-5 text-white bg-purple-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
