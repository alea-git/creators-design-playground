import React from "react"

export default function invoice() {
    return (
        <div className="w-screen min-h-screen p-12 bg-gray-600">
            <div className="w-full max-w-4xl mx-auto bg-white">
                <div className="grid grid-cols-2 gap-16 px-12 py-8 bg-purple-700">
                    <div>
                        <div className="w-24 h-8 bg-purple-400 rounded-sm" />
                    </div>
                    <div className="space-y-8">
                        <div className="flex flex-row items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <h1 className="text-2xl font-semibold text-white">
                                Ricevuta d'acquisto
                            </h1>
                        </div>
                        <div className="space-y-1">
                            <h6 className="font-medium text-white">
                                Numero fattura:
                            </h6>
                            <p className="text-purple-300">
                                123456
                            </p>
                        </div>
                        <div className="space-y-1">
                            <h6 className="font-medium text-white">
                                Data:
                            </h6>
                            <p className="text-purple-300">
                                15 Aprile, 2021
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-16 p-12">
                    <div className="space-y-8">
                        <div className="space-y-1">
                            <h6 className="font-medium">
                                Dati di fatturazione:
                            </h6>
                            <p className="text-gray-500">
                                Timmy Turner
                            </p>
                            <p className="text-gray-500">
                                957 North Street
                            </p>
                            <p className="text-gray-500">
                                Londra
                            </p>
                            <p className="text-gray-500">
                                United Kingdom
                            </p>
                        </div>
                        <div className="space-y-1">
                            <h6 className="font-medium">
                                Partita IVA:
                            </h6>
                            <p className="text-gray-500">
                                1345 67 678933
                            </p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-1">
                            <h6 className="font-medium">
                                Fattura da:
                            </h6>
                            <p className="text-gray-500">
                                Fudeo
                            </p>
                            <p className="text-gray-500">
                                Via pastrengo
                            </p>
                            <p className="text-gray-500">
                                Moncalieri
                            </p>
                            <p className="text-gray-500">
                                Italia
                            </p>
                        </div>
                        <div className="space-y-1">
                            <h6 className="font-medium">
                                Partita IVA:
                            </h6>
                            <p className="text-gray-500">
                                1345 67 678933
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-16 px-12 py-4 mb-4 bg-gray-100">
                    <span className="text-sm font-semibold uppercase">
                        Corsi
                    </span>
                    <span className="text-sm font-semibold text-right uppercase">
                        Prezzo
                    </span>
                </div>
                <div className="flex flex-row items-baseline w-full px-12 py-2">
                    <p className="font-medium">
                        Flutter 2 Start
                    </p>
                    <div className="flex-1 mx-4 border-b border-gray-200 border-dashed" />
                    <p className="text-right text-gray-600">
                        €77.00
                    </p>
                </div>
                <div className="flex flex-row items-baseline w-full px-12 py-2">
                    <p className="font-medium">
                        Flutter Advanced
                    </p>
                    <div className="flex-1 mx-4 border-b border-gray-200 border-dashed" />
                    <p className="text-right text-gray-600">
                        €97.00
                    </p>
                </div>
                <div className="flex flex-row items-baseline w-full px-12 py-2">
                    <p className="font-medium">
                        Flutter Focus
                    </p>
                    <div className="flex-1 mx-4 border-b border-gray-200 border-dashed" />
                    <p className="text-right text-gray-600">
                        €59.00
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-16 px-12 py-2">
                    <div />
                    <div>
                        <div className="w-full h-[2px] my-2 bg-black" />
                        <div className="grid grid-cols-2 py-2">
                            <p>
                                Sottotale
                            </p>
                            <p className="text-right text-gray-600">
                                €150.00
                            </p>
                        </div>
                        <div className="grid grid-cols-2 py-2">
                            <div className="flex flex-col">
                                <span className="leading-none">
                                    Codice sconto
                                </span>
                                <span className="text-sm text-gray-400">(BLACKFRIDAY)</span>
                            </div>
                            <p className="text-right text-gray-600">
                                - €20.00
                            </p>
                        </div>
                        <div className="grid grid-cols-2 py-2">
                            <p>
                                IVA
                            </p>
                            <p className="text-right text-gray-600">
                                €30.00
                            </p>
                        </div>
                        <div className="w-full h-[2px] my-2 bg-black" />
                        <div className="grid grid-cols-2 py-2">
                            <p className="font-medium">
                                Totale
                            </p>
                            <p className="font-medium text-right">
                                €160.00
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-16 p-12">
                    <div />
                    <div className="space-y-8">
                        <div className="space-y-1">
                            <h6 className="font-medium">
                                Pagamento:
                            </h6>
                            <p className="text-gray-500">
                                € 160.00 via MasterCard **** 1234
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-16 px-12 py-8 bg-gray-100">
                    <div className="flex flex-row items-center space-x-2 font-medium">
                        <span>
                            Grazie per aver comprato da Fudeo
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <p className="font-medium">
                            Bisogno di aiuto?
                        </p>
                        <p className="text-gray-500">
                            info@fudeo.it
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
