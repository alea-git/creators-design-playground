import React from "react"
import AppBar from "src/components/AppBar"
import ContentHeader from "src/components/ContentHeader"

export default function cmsDiscountCodes() {
    return (
        <div className="flex flex-col w-screen min-h-screen bg-white">
            <AppBar />

            <ContentHeader>
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight">
                        Codici sconto
                    </h1>
                    <p className="max-w-3xl mt-4 leading-6 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos quibusdam, repellendus, necessitatibus esse ad iure voluptatum totam quasi sunt officia excepturi! Reiciendis, iusto.
                    </p>
                    <button className="py-1.5 mt-2 px-4 font-medium text-purple-800 flex flex-row items-center space-x-2 rounded">
                        <span>
                            Crea un nuovo codice sconto
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </ContentHeader>

            <div className="flex-1 w-full py-8 mx-auto space-y-8 bg-white rounded-md max-w-7xl">
                <div className="flex flex-row items-center px-4 space-x-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>
                        Search discounts by name or code...
                    </span>
                </div>
                <table className="w-full">
                    <thead className="sticky top-[83px]" style={{ boxShadow: '0px -10px 0px 0px rgba(255,255,255,1), 0px 10px 0px 0px rgba(255,255,255,1)' }}>
                        <tr className="bg-gray-100 rounded-md">
                            <th className="px-4 py-3 font-medium text-left text-gray-900 rounded-l-sm">
                                Codice
                            </th>
                            <th className="px-4 py-3 font-medium text-left text-gray-900">
                                Valore
                            </th>
                            <th className="px-4 py-3 font-medium text-left text-gray-900">
                                Stato
                            </th>
                            <th className="px-4 py-3 font-medium text-left text-gray-900">
                                Corsi
                            </th>
                            <th className="px-4 py-3 font-medium text-left text-gray-900">
                                Usi
                            </th>
                            <th className="rounded-r-sm" />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-2 py-3 text-gray-900">
                                <span className="rounded-sm text-sm bg-gray-100 px-2 py-1.5 font-medium">
                                    BLACKFRIDAY
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                50%
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-violet-600" />
                                    <span className="text-violet-800">
                                        Attivo
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                Tutti i corsi
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                23
                            </td>
                            <td className="flex flex-row items-center justify-end px-2 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-3 text-gray-900">
                                <span className="rounded-sm text-sm bg-gray-100 px-2 py-1.5 font-medium">
                                    BLACKFRIDAY
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                50%
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-violet-600" />
                                    <span className="text-violet-800">
                                        Attivo
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                Tutti i corsi
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                23
                            </td>
                            <td className="flex flex-row items-center justify-end px-2 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-3 text-gray-900">
                                <span className="rounded-sm text-sm bg-gray-100 px-2 py-1.5 font-medium">
                                    BLACKFRIDAY
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                50%
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-violet-600" />
                                    <span className="text-violet-800">
                                        Attivo
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                Tutti i corsi
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                23
                            </td>
                            <td className="flex flex-row items-center justify-end px-2 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-3 text-gray-900">
                                <span className="rounded-sm text-sm bg-gray-100 px-2 py-1.5 font-medium">
                                    BLACKFRIDAY
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                50%
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-violet-600" />
                                    <span className="text-violet-800">
                                        Attivo
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                Tutti i corsi
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                23
                            </td>
                            <td className="flex flex-row items-center justify-end px-2 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-3 text-gray-900">
                                <span className="rounded-sm text-sm bg-gray-100 px-2 py-1.5 font-medium">
                                    BLACKFRIDAY
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                50%
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-violet-600" />
                                    <span className="text-violet-800">
                                        Attivo
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                Tutti i corsi
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                23
                            </td>
                            <td className="flex flex-row items-center justify-end px-2 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-3 text-gray-900">
                                <span className="rounded-sm text-sm bg-gray-100 px-2 py-1.5 font-medium">
                                    BLACKFRIDAY
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                50%
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-violet-600" />
                                    <span className="text-violet-800">
                                        Attivo
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                Tutti i corsi
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                23
                            </td>
                            <td className="flex flex-row items-center justify-end px-2 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-3 text-gray-900">
                                <span className="rounded-sm text-sm bg-gray-100 px-2 py-1.5 font-medium">
                                    BLACKFRIDAY
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                50%
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-violet-600" />
                                    <span className="text-violet-800">
                                        Attivo
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                Tutti i corsi
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                23
                            </td>
                            <td className="flex flex-row items-center justify-end px-2 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-3 text-gray-900">
                                <span className="rounded-sm text-sm bg-gray-100 px-2 py-1.5 font-medium">
                                    BLACKFRIDAY
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                50%
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-violet-600" />
                                    <span className="text-violet-800">
                                        Attivo
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                Tutti i corsi
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                23
                            </td>
                            <td className="flex flex-row items-center justify-end px-2 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-3 text-gray-900">
                                <span className="rounded-sm text-sm bg-gray-100 px-2 py-1.5 font-medium">
                                    BLACKFRIDAY
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                50%
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-violet-600" />
                                    <span className="text-violet-800">
                                        Attivo
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                Tutti i corsi
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                23
                            </td>
                            <td className="flex flex-row items-center justify-end px-2 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-3 text-gray-900">
                                <span className="rounded-sm text-sm bg-gray-100 px-2 py-1.5 font-medium">
                                    BLACKFRIDAY
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                50%
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-violet-600" />
                                    <span className="text-violet-800">
                                        Attivo
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                Tutti i corsi
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                23
                            </td>
                            <td className="flex flex-row items-center justify-end px-2 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-3 text-gray-900">
                                <span className="rounded-sm text-sm bg-gray-100 px-2 py-1.5 font-medium">
                                    BLACKFRIDAY
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                50%
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-violet-600" />
                                    <span className="text-violet-800">
                                        Attivo
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                Tutti i corsi
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                23
                            </td>
                            <td className="flex flex-row items-center justify-end px-2 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-3 text-gray-900">
                                <span className="rounded-sm text-sm bg-gray-100 px-2 py-1.5 font-medium">
                                    BLACKFRIDAY
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                50%
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-violet-600" />
                                    <span className="text-violet-800">
                                        Attivo
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                Tutti i corsi
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                23
                            </td>
                            <td className="flex flex-row items-center justify-end px-2 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-3 text-gray-900">
                                <span className="rounded-sm text-sm bg-gray-100 px-2 py-1.5 font-medium">
                                    BLACKFRIDAY
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                50%
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-violet-600" />
                                    <span className="text-violet-800">
                                        Attivo
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                Tutti i corsi
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                23
                            </td>
                            <td className="flex flex-row items-center justify-end px-2 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-3 text-gray-900">
                                <span className="rounded-sm text-sm bg-gray-100 px-2 py-1.5 font-medium">
                                    BLACKFRIDAY
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                50%
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-violet-600" />
                                    <span className="text-violet-800">
                                        Attivo
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                Tutti i corsi
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                23
                            </td>
                            <td className="flex flex-row items-center justify-end px-2 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-3 text-gray-900">
                                <span className="rounded-sm text-sm bg-gray-100 px-2 py-1.5 font-medium">
                                    BLACKFRIDAY
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                50%
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-violet-600" />
                                    <span className="text-violet-800">
                                        Attivo
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                Tutti i corsi
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                23
                            </td>
                            <td className="flex flex-row items-center justify-end px-2 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-3 text-gray-900">
                                <span className="rounded-sm text-sm bg-gray-100 px-2 py-1.5 font-medium">
                                    BLACKFRIDAY
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                50%
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-violet-600" />
                                    <span className="text-violet-800">
                                        Attivo
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                Tutti i corsi
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                23
                            </td>
                            <td className="flex flex-row items-center justify-end px-2 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-3 text-gray-900">
                                <span className="rounded-sm text-sm bg-gray-100 px-2 py-1.5 font-medium">
                                    BLACKFRIDAY
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                50%
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                <div className="flex flex-row items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-violet-600" />
                                    <span className="text-violet-800">
                                        Attivo
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                Tutti i corsi
                            </td>
                            <td className="px-4 py-3 text-gray-900">
                                23
                            </td>
                            <td className="flex flex-row items-center justify-end px-2 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="sticky bottom-0 flex flex-row items-center justify-between w-full px-2 py-6 mx-auto text-gray-500 bg-white max-w-7xl">
                <div className="flex flex-row items-center pl-2 space-x-2">
                    1 — 12 di 15
                </div>
                <div className="flex flex-row items-center space-x-4 cursor-pointer hover:text-gray-900">
                    <span>
                        1 di 2
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>

    )
}
