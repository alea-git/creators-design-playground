import React from "react"

export default function cmsCourses() {
    return (
        <div className="flex flex-col w-screen min-h-screen text-gray-900 bg-white">
            <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
                <div className="w-full mx-auto max-w-7xl">
                    <div className="flex flex-row items-center justify-between pt-4 pb-4 space-x-4">
                        <div className="w-40">
                            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-gray-500 border border-gray-200 rounded-full cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                        </div>
                        <h1 className="text-xl font-semibold">Fudeo</h1>
                        <div className="flex flex-row items-center w-40 space-x-6">
                            <button className="flex flex-row items-center justify-center w-10 h-10 space-x-4 text-gray-600 border border-gray-200 rounded-full focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </button>
                            <div className="h-6 w-[1px] bg-gray-200" />
                            <button className="w-10 h-10 bg-center bg-no-repeat bg-cover rounded-full focus:outline-none" style={{ backgroundImage: 'url(https://media-exp1.licdn.com/dms/image/C4E03AQHO9fs7VQUjtw/profile-displayphoto-shrink_400_400/0/1594903913636?e=1644451200&v=beta&t=k9GKFQ_2QBzDf0cPhyH6lskIanwIYJE9jtpumViCKPw)' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center py-12 text-center border-b border-gray-200 bg-gray-50">
                <h1 className="text-3xl font-extrabold tracking-tight">
                    Corsi
                </h1>
                <p className="max-w-3xl mt-4 leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos quibusdam, repellendus, necessitatibus esse ad iure voluptatum totam quasi sunt officia excepturi! Reiciendis, iusto.
                </p>
                <button className="py-1.5 mt-2 px-4 font-medium text-purple-800 flex flex-row items-center space-x-2 rounded">
                    <span>
                        Crea un nuovo corso
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <div className="flex-1 w-full py-8 mx-auto bg-white rounded-md max-w-7xl">
                <div className="flex flex-row items-center px-4 space-x-4 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span> Search discounts by name or code... </span>
                </div>
                <div className="grid grid-cols-4 gap-16 py-8 mx-auto max-w-7xl">
                    <div className="space-y-4">
                        <div className="w-full pb-[66%] rounded-sm bg-gray-300" />
                        <div className="px-1 space-y-4">
                            <div>
                                <div className="flex flex-row items-center w-full">
                                    <h6 className="flex-1 text-lg font-semibold">Flutter 2 Start</h6>
                                    <div className="w-2 h-2 mr-2 rounded-full bg-violet-600" />
                                </div>
                                <span className="text-gray-500"> € 77.00 </span>
                            </div>
                            <div className="flex flex-row items-center w-full">
                                <div className="flex flex-col flex-1">
                                    <span className="text-sm text-gray-500"> Vendite </span>
                                    <span className="font-medium text-gray-700"> 1,420 </span>
                                </div>
                                <div className="w-32 h-8 bg-gray-100 rounded-sm" />
                            </div>
                            <div className="flex flex-row items-center w-full">
                                <div className="flex flex-col flex-1">
                                    <span className="text-sm text-gray-500"> Totale entrate </span>
                                    <span className="font-medium text-gray-700"> € 17,890 </span>
                                </div>
                                <div className="w-32 h-8 bg-gray-100 rounded-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="w-full pb-[66%] rounded-sm bg-gray-300" />
                        <div className="px-1 space-y-4">
                            <div>
                                <div className="flex flex-row items-center w-full">
                                    <h6 className="flex-1 text-lg font-semibold">Flutter 2 Start</h6>
                                    <div className="w-2 h-2 mr-2 rounded-full bg-violet-600" />
                                </div>
                                <span className="text-gray-500"> € 77.00 </span>
                            </div>
                            <div className="flex flex-row items-center w-full">
                                <div className="flex flex-col flex-1">
                                    <span className="text-sm text-gray-500"> Vendite </span>
                                    <span className="font-medium text-gray-700"> 1,420 </span>
                                </div>
                                <div className="w-32 h-8 bg-gray-100 rounded-sm" />
                            </div>
                            <div className="flex flex-row items-center w-full">
                                <div className="flex flex-col flex-1">
                                    <span className="text-sm text-gray-500"> Totale entrate </span>
                                    <span className="font-medium text-gray-700"> € 17,890 </span>
                                </div>
                                <div className="w-32 h-8 bg-gray-100 rounded-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="w-full pb-[66%] rounded-sm bg-gray-300" />
                        <div className="px-1 space-y-4">
                            <div>
                                <div className="flex flex-row items-center w-full">
                                    <h6 className="flex-1 text-lg font-semibold">Flutter 2 Start</h6>
                                    <div className="w-2 h-2 mr-2 rounded-full bg-violet-600" />
                                </div>
                                <span className="text-gray-500"> € 77.00 </span>
                            </div>
                            <div className="flex flex-row items-center w-full">
                                <div className="flex flex-col flex-1">
                                    <span className="text-sm text-gray-500"> Vendite </span>
                                    <span className="font-medium text-gray-700"> 1,420 </span>
                                </div>
                                <div className="w-32 h-8 bg-gray-100 rounded-sm" />
                            </div>
                            <div className="flex flex-row items-center w-full">
                                <div className="flex flex-col flex-1">
                                    <span className="text-sm text-gray-500"> Totale entrate </span>
                                    <span className="font-medium text-gray-700"> € 17,890 </span>
                                </div>
                                <div className="w-32 h-8 bg-gray-100 rounded-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="w-full pb-[66%] rounded-sm bg-gray-300" />
                        <div className="px-1 space-y-4">
                            <div>
                                <div className="flex flex-row items-center w-full">
                                    <h6 className="flex-1 text-lg font-semibold">Flutter 2 Start</h6>
                                    <div className="w-2 h-2 mr-2 rounded-full bg-violet-600" />
                                </div>
                                <span className="text-gray-500"> € 77.00 </span>
                            </div>
                            <div className="flex flex-row items-center w-full">
                                <div className="flex flex-col flex-1">
                                    <span className="text-sm text-gray-500"> Vendite </span>
                                    <span className="font-medium text-gray-700"> 1,420 </span>
                                </div>
                                <div className="w-32 h-8 bg-gray-100 rounded-sm" />
                            </div>
                            <div className="flex flex-row items-center w-full">
                                <div className="flex flex-col flex-1">
                                    <span className="text-sm text-gray-500"> Totale entrate </span>
                                    <span className="font-medium text-gray-700"> € 17,890 </span>
                                </div>
                                <div className="w-32 h-8 bg-gray-100 rounded-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="w-full pb-[66%] rounded-sm bg-gray-300" />
                        <div className="px-1 space-y-4">
                            <div>
                                <div className="flex flex-row items-center w-full">
                                    <h6 className="flex-1 text-lg font-semibold">Flutter 2 Start</h6>
                                    <div className="w-2 h-2 mr-2 rounded-full bg-violet-600" />
                                </div>
                                <span className="text-gray-500"> € 77.00 </span>
                            </div>
                            <div className="flex flex-row items-center w-full">
                                <div className="flex flex-col flex-1">
                                    <span className="text-sm text-gray-500"> Vendite </span>
                                    <span className="font-medium text-gray-700"> 1,420 </span>
                                </div>
                                <div className="w-32 h-8 bg-gray-100 rounded-sm" />
                            </div>
                            <div className="flex flex-row items-center w-full">
                                <div className="flex flex-col flex-1">
                                    <span className="text-sm text-gray-500"> Totale entrate </span>
                                    <span className="font-medium text-gray-700"> € 17,890 </span>
                                </div>
                                <div className="w-32 h-8 bg-gray-100 rounded-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="w-full pb-[66%] rounded-sm bg-gray-300" />
                        <div className="px-1 space-y-4">
                            <div>
                                <div className="flex flex-row items-center w-full">
                                    <h6 className="flex-1 text-lg font-semibold">Flutter 2 Start</h6>
                                    <div className="w-2 h-2 mr-2 rounded-full bg-violet-600" />
                                </div>
                                <span className="text-gray-500"> € 77.00 </span>
                            </div>
                            <div className="flex flex-row items-center w-full">
                                <div className="flex flex-col flex-1">
                                    <span className="text-sm text-gray-500"> Vendite </span>
                                    <span className="font-medium text-gray-700"> 1,420 </span>
                                </div>
                                <div className="w-32 h-8 bg-gray-100 rounded-sm" />
                            </div>
                            <div className="flex flex-row items-center w-full">
                                <div className="flex flex-col flex-1">
                                    <span className="text-sm text-gray-500"> Totale entrate </span>
                                    <span className="font-medium text-gray-700"> € 17,890 </span>
                                </div>
                                <div className="w-32 h-8 bg-gray-100 rounded-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="w-full pb-[66%] rounded-sm bg-gray-300" />
                        <div className="px-1 space-y-4">
                            <div>
                                <div className="flex flex-row items-center w-full">
                                    <h6 className="flex-1 text-lg font-semibold">Flutter 2 Start</h6>
                                    <div className="w-2 h-2 mr-2 rounded-full bg-violet-600" />
                                </div>
                                <span className="text-gray-500"> € 77.00 </span>
                            </div>
                            <div className="flex flex-row items-center w-full">
                                <div className="flex flex-col flex-1">
                                    <span className="text-sm text-gray-500"> Vendite </span>
                                    <span className="font-medium text-gray-700"> 1,420 </span>
                                </div>
                                <div className="w-32 h-8 bg-gray-100 rounded-sm" />
                            </div>
                            <div className="flex flex-row items-center w-full">
                                <div className="flex flex-col flex-1">
                                    <span className="text-sm text-gray-500"> Totale entrate </span>
                                    <span className="font-medium text-gray-700"> € 17,890 </span>
                                </div>
                                <div className="w-32 h-8 bg-gray-100 rounded-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
