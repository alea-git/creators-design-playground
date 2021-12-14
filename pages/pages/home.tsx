import React from "react"

export default function home() {
    return (
        <div className="w-screen min-h-screen text-gray-900 bg-white">
            <div className="sticky top-0 z-20 bg-white border-b border-gray-200">
                <div className="w-full mx-auto max-w-7xl">
                    <div className="flex flex-row items-center justify-between pt-4 pb-4 space-x-4">
                        <div className="w-40">
                            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-gray-500 border border-gray-200 rounded-full cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </div>
                        </div>

                        <h1 className="text-xl font-semibold">Fudeo</h1>

                        <div className="flex flex-row items-center w-40 space-x-6">
                            <button className="flex flex-row items-center justify-center w-10 h-10 space-x-4 text-gray-600 border border-gray-200 rounded-full focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </button>

                            <div className="h-6 w-[1px] bg-gray-200"></div>

                            <button
                                className="w-10 h-10 bg-center bg-no-repeat bg-cover rounded-full focus:outline-none"
                                style={{
                                    backgroundImage: `url(https://media-exp1.licdn.com/dms/image/C4E03AQHO9fs7VQUjtw/profile-displayphoto-shrink_400_400/0/1594903913636?e=1644451200&v=beta&t=k9GKFQ_2QBzDf0cPhyH6lskIanwIYJE9jtpumViCKPw)`
                                }}></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-center text-center border-b border-gray-200">
                <div className="absolute inset-0 overflow-hidden bg-white">
                    <div className="absolute w-1/2 rounded-full animate-blob-short aspect-square blur-2xl mix-blend-multiply -top-1/4 bg-violet-400 opacity-5"></div>
                    <div className="animate-blob aspect-square blur-2xl mix-blend-multiply rounded-full absolute -top-[20%] left-0 w-full bg-blue-400 opacity-5 z-10"></div>
                    <div className="absolute right-0 w-1/2 bg-green-400 rounded-full animate-blob-short aspect-square blur-2xl mix-blend-multiply -bottom-1/4 opacity-5"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <div className="py-12">
                        <h1 className="text-3xl font-extrabold tracking-tight">
                            Diventa uno sviluppatore Flutter
                        </h1>

                        <p className="max-w-3xl mt-4 leading-6 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos quibusdam, repellendus, necessitatibus esse ad iure voluptatum totam quasi sunt officia excepturi.
                        </p>
                    </div>

                    <div className="flex flex-row items-center justify-center pb-6 space-x-4">
                        <button className="font-medium text-gray-600 py-1.5 px-2 flex flex-row space-x-2 items-center cursor-pointer hover:bg-violet-100 hover:text-violet-900 rounded-sm focus:outline-none">
                            <span>
                                Gruppo telegram
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </button>

                        <button className="font-medium text-gray-600 py-1.5 px-2 flex flex-row space-x-2 items-center cursor-pointer hover:bg-violet-100 hover:text-violet-900 rounded-sm focus:outline-none">
                            <span>
                                Consulenza aziendale
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-b border-gray-200 sticky top-[4.54rem] bg-white z-10">
                <div className="flex flex-row items-center justify-between w-full py-2 mx-auto max-w-7xl">
                    <div className="flex flex-row flex-1">
                        <span className="font-medium text-violet-800 py-2.5 px-4 bg-violet-100 rounded-sm cursor-pointer">Percorsi formativi</span>
                        <span className="font-medium text-gray-500 py-2.5 px-4 cursor-pointer">Corsi disponibili</span>
                        <span className="font-medium text-gray-500 py-2.5 px-4 cursor-pointer">Corsi in libreria</span>
                    </div>
                </div>
            </div>

            <div className="relative w-full py-8 mx-auto space-y-32 border-gray-200 max-w-7xl border-x">
                <div>
                    <div>
                        <div className="max-w-3xl p-8">
                            <h2 className="text-3xl font-extrabold">
                                Flutter Developer
                            </h2>

                            <div className="flex flex-row items-center mt-4 space-x-1">
                                <span className="px-3 py-1 text-sm font-medium text-green-900 bg-green-100 rounded">
                                    Aggiornato a Flutter 2
                                </span>
                            </div>

                            <p className="mt-4 text-gray-500">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolore modi ratione sit. Ea veritatis iusto saepe laboriosam ullam asperiores aut! Consequuntur omnis, necessitatibus a repudiandae voluptate ea! Non, aperiam!
                            </p>

                            <div className="grid grid-cols-3 gap-4 mt-8">
                                <div className="flex flex-row items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>
                                        7 corsi
                                    </span>
                                </div>

                                <div className="flex flex-row items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>
                                        39 sezioni
                                    </span>
                                </div>

                                <div className="flex flex-row items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>
                                        143 lezioni
                                    </span>
                                </div>

                                <div className="flex flex-row items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>
                                        17 ore
                                    </span>
                                </div>

                                <div className="flex flex-row items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>
                                        Materiali aggiuntivi
                                    </span>
                                </div>

                                <div className="flex flex-row items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>
                                        Supporto community
                                    </span>
                                </div>

                                <div className="flex flex-row items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>
                                        Supporto insegnante
                                    </span>
                                </div>

                                <div className="flex flex-row items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>
                                        Accesso per la vita
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-4 gap-[1px] py-[1px] bg-gray-200">
                        <div className="flex flex-col items-center p-8 text-center bg-white">
                            <div className="w-full bg-gray-100 rounded-sm aspect-square"></div>

                            <h6 className="mt-4 text-lg font-semibold">
                                1. Flutter 2 Start
                            </h6>

                            <p className="mt-2 leading-6 text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id consequuntur fuga voluptas architecto autem commodi.
                            </p>

                            <div className="flex flex-row items-center mt-2 space-x-1 text-sm text-gray-500 text-gray-dark-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>7 ore</span>
                            </div>

                        </div>

                        <div className="flex flex-col items-center p-8 text-center bg-white">
                            <div className="w-full bg-gray-100 rounded-sm aspect-square"></div>

                            <h6 className="mt-4 text-lg font-semibold">
                                1. Flutter 2 Start
                            </h6>

                            <p className="mt-2 leading-6 text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id consequuntur fuga voluptas architecto autem commodi.
                            </p>

                            <div className="flex flex-row items-center mt-2 space-x-1 text-sm text-gray-500 text-gray-dark-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>7 ore</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 text-center bg-white">
                            <div className="w-full bg-gray-100 rounded-sm aspect-square"></div>

                            <h6 className="mt-4 text-lg font-semibold">
                                1. Flutter 2 Start
                            </h6>

                            <p className="mt-2 leading-6 text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id consequuntur fuga voluptas architecto autem commodi.
                            </p>

                            <div className="flex flex-row items-center mt-2 space-x-1 text-sm text-gray-500 text-gray-dark-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>7 ore</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 text-center bg-white">
                            <div className="w-full bg-gray-100 rounded-sm aspect-square"></div>

                            <h6 className="mt-4 text-lg font-semibold">
                                1. Flutter 2 Start
                            </h6>

                            <p className="mt-2 leading-6 text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id consequuntur fuga voluptas architecto autem commodi.
                            </p>

                            <div className="flex flex-row items-center mt-2 space-x-1 text-sm text-gray-500 text-gray-dark-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>7 ore</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 text-center bg-white">
                            <div className="w-full bg-gray-100 rounded-sm aspect-square"></div>

                            <h6 className="mt-4 text-lg font-semibold">
                                1. Flutter 2 Start
                            </h6>

                            <p className="mt-2 leading-6 text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id consequuntur fuga voluptas architecto autem commodi.
                            </p>

                            <div className="flex flex-row items-center mt-2 space-x-1 text-sm text-gray-500 text-gray-dark-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>7 ore</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 text-center bg-white">
                            <div className="w-full bg-gray-100 rounded-sm aspect-square"></div>

                            <h6 className="mt-4 text-lg font-semibold">
                                1. Flutter 2 Start
                            </h6>

                            <p className="mt-2 leading-6 text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id consequuntur fuga voluptas architecto autem commodi.
                            </p>

                            <div className="flex flex-row items-center mt-2 space-x-1 text-sm text-gray-500 text-gray-dark-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>7 ore</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 text-center bg-white">
                            <div className="w-full bg-gray-100 rounded-sm aspect-square"></div>

                            <h6 className="mt-4 text-lg font-semibold">
                                1. Flutter 2 Start
                            </h6>

                            <p className="mt-2 leading-6 text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id consequuntur fuga voluptas architecto autem commodi.
                            </p>

                            <div className="flex flex-row items-center mt-2 space-x-1 text-sm text-gray-500 text-gray-dark-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>7 ore</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 text-center bg-white">
                            <div className="w-full bg-gray-100 rounded-sm aspect-square"></div>

                            <h6 className="mt-4 text-lg font-semibold">
                                1. Flutter 2 Start
                            </h6>

                            <p className="mt-2 leading-6 text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id consequuntur fuga voluptas architecto autem commodi.
                            </p>

                            <div className="flex flex-row items-center mt-2 space-x-1 text-sm text-gray-500 text-gray-dark-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>7 ore</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
