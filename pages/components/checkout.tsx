import React from "react"

export default function checkout() {
    return (
        <div className="w-screen min-h-screen p-6 bg-gray-600">
            <div className="grid max-w-3xl grid-cols-5 mx-auto overflow-hidden bg-white rounded-md shadow-2xl auto-rows-fr">
                <div className="flex flex-col col-span-3 p-8 space-y-8">
                    <div>
                        <div className="w-12 h-12 bg-gray-300 rounded-sm" />
                        <h3 className="mt-4 text-2xl font-semibold">
                            Flutter 2 Start
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus expedita sequi veritatis quis beatae qui quibusdam dolores vero.
                        </p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-sm font-medium text-gray-500">
                            Acquista insieme e risparmia
                        </span>
                        <div className="w-full border border-gray-200 divide-y rounded-sm">
                            <div className="flex flex-row items-center p-2 pr-4 space-x-4">
                                <div className="w-10 h-10 bg-gray-300 rounded-sm" />
                                <div className="flex flex-col flex-1">
                                    <span className="text-sm text-gray-600">
                                        Flutter Advanced
                                    </span>
                                    <div className="flex flex-row items-center space-x-2">
                                        <span className="text-xs text-gray-500 line-through">
                                            € 97
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            € 65
                                        </span>
                                    </div>
                                </div>
                                <input type="checkbox" defaultChecked className="w-4 h-4" />
                            </div>
                            <div className="flex flex-row items-center p-2 pr-4 space-x-4">
                                <div className="w-10 h-10 bg-gray-300 rounded-sm" />
                                <div className="flex flex-col flex-1">
                                    <span className="text-sm text-gray-600">
                                        Flutter Focus
                                    </span>
                                    <div className="flex flex-row items-center space-x-2">
                                        <span className="text-xs text-gray-500 line-through">
                                            € 59
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            € 49
                                        </span>
                                    </div>
                                </div>
                                <input type="checkbox" className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <span className="text-sm font-medium text-gray-500">
                            Email
                        </span>
                        <div className="w-full border border-gray-200 rounded-sm bg-gray-50">
                            <div className="flex flex-row items-center h-10 p-2 space-x-2 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>
                                    user@email.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start space-y-1">
                        <span className="text-sm font-medium text-gray-500">
                            Metodo di pagamento
                        </span>
                        <div className="flex flex-row items-center p-1 space-x-2 border border-gray-200 rounded-sm">
                            <div className="px-4 py-1.5 rounded-sm text-violet-800 font-medium text-sm bg-violet-100 flex flex-row items-center space-x-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                                <span>
                                    Carta di credito
                                </span>
                            </div>
                            <div className="px-4 py-1.5 text-gray-500 font-medium rounded-sm text-sm flex flex-row items-center space-x-2 cursor-pointer">
                                <svg className="w-4 h-4" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <g><path fill="none" d="M0 0h24v24H0z" /><path fillRule="nonzero" d="M8.495 20.667h1.551l.538-3.376a2.805 2.805 0 0 1 2.77-2.366h.5c2.677 0 4.06-.983 4.55-3.503.208-1.066.117-1.73-.171-2.102-1.207 3.054-3.79 4.16-6.962 4.16h-.884c-.384 0-.794.209-.852.58l-1.04 6.607zm-4.944-.294a.551.551 0 0 1-.544-.637L5.68 2.776A.92.92 0 0 1 6.59 2h6.424c2.212 0 3.942.467 4.899 1.558.87.99 1.123 2.084.871 3.692.36.191.668.425.916.706.818.933.978 2.26.668 3.85-.74 3.805-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.679l-.702 4.383a.804.804 0 0 1-.794.679H6.72a.483.483 0 0 1-.477-.558l.274-1.736H3.55zm6.836-8.894h.884c3.19 0 4.895-1.212 5.483-4.229.02-.101.037-.203.053-.309.166-1.06.05-1.553-.398-2.063-.465-.53-1.603-.878-3.396-.878h-5.5L5.246 18.373h1.561l.73-4.628.007.001a2.915 2.915 0 0 1 2.843-2.267z" /></g>
                                </svg>
                                <span>
                                    PayPal
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <span className="text-sm font-medium text-gray-500">
                            Dati di pagamento
                        </span>
                        <div className="w-full border border-gray-200 rounded-sm bg-gray-50">
                            <div className="flex flex-row items-center h-10 p-2 space-x-4 text-gray-500">
                                <div className="w-8 h-5 bg-gray-200 rounded-sm" />
                                <span>
                                    Numero carta
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <span className="text-sm font-medium text-gray-500">
                            Info di fatturazione
                        </span>
                        <div className="w-full border border-gray-200 divide-y rounded-sm bg-gray-50">
                            <div className="flex flex-row items-center h-10 p-2 space-x-4 text-gray-500">
                                P. IVA
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-200">
                                <div className="flex flex-row items-center h-10 p-2 space-x-4 text-gray-500">
                                    Indirizzo
                                </div>
                                <div className="flex flex-row items-center h-10 p-2 space-x-4 text-gray-500">
                                    Città
                                </div>
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-200">
                                <div className="flex flex-row items-center h-10 p-2 space-x-4 text-gray-500">
                                    CAP
                                </div>
                                <div className="flex flex-row items-center h-10 p-2 space-x-4 text-gray-500">
                                    Nazione
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col col-span-2 p-8 bg-gray-100">
                    <h3 className="font-medium text-gray-700">
                        Riepilogo ordine
                    </h3>
                    <ul className="mt-4">
                        <li className="text-gray-500 list-disc list-inside">
                            Dart Begin
                        </li>
                        <li className="text-gray-500 list-disc list-inside">
                            Flutter 2 Start
                        </li>
                        <li className="text-gray-500 list-disc list-inside">
                            Flutter Advanced
                        </li>
                        <li className="text-gray-500 list-disc list-inside">
                            Flutter Focus
                        </li>
                        <li className="text-gray-500 list-disc list-inside">
                            Flutter Pro
                        </li>
                    </ul>
                    <div className="h-[1px] w-full bg-gray-300 mt-4" />
                    <div className="flex flex-row items-center justify-between py-1 mt-4 space-x-4">
                        <span className="text-gray-500">
                            Sottotale
                        </span>
                        <span className="text-gray-700">
                            €288
                        </span>
                    </div>
                    <div className="flex flex-row items-center justify-between py-1 space-x-4">
                        <span className="text-gray-500">
                            Crediti
                        </span>
                        <span className="text-green-600">
                            €5
                        </span>
                    </div>
                    <div className="h-[1px] w-full bg-gray-300 mt-2" />
                    <span className="my-3 text-green-600">
                        Aggiungi codice sconto
                    </span>
                    <div className="flex flex-row items-center justify-between py-2 space-x-4 border-t border-gray-300">
                        <span className="text-gray-500">
                            Totale
                        </span>
                        <span className="text-xl text-gray-700">
                            €283
                        </span>
                    </div>
                    <button className="w-full h-10 mt-4 font-medium text-white rounded-sm bg-gradient-to-r from-green-600 to-green-700">
                        Paga
                    </button>
                    <div className="flex flex-row items-center mt-1 space-x-1 text-xs text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>
                            I pagamenti sono sicuri con Stripe
                        </span>
                    </div>
                    <div className="flex-1">
                    </div>
                    <div className="flex flex-row items-center space-x-2 text-xs text-gray-500">
                        <span>
                            Contattaci
                        </span>
                        <span>
                            |
                        </span>
                        <span>
                            Termini
                        </span>
                        <span>
                            Privacy
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}
