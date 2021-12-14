import React from "react"

export default function cmsIntegrations() {
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
                    Integrazioni
                </h1>
                <p className="max-w-3xl mt-4 leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos quibusdam, repellendus, necessitatibus esse ad iure voluptatum totam quasi sunt officia excepturi! Reiciendis, iusto.
                </p>
                <button className="py-1.5 mt-2 px-4 font-medium text-purple-800 flex flex-row items-center space-x-2 rounded">
                    <span>
                        Scopri come creare la propria integrazione
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className="w-full py-8 mx-auto space-y-12 max-w-7xl">
                <div className="grid grid-cols-3 px-4 gap-y-8 gap-x-16">
                    <div className="flex flex-row items-center space-x-6 cursor-pointer group">
                        <div className="flex-shrink-0 p-3 rounded-full w-14 h-14 bg-amber-100">
                            <img src="http://assets.stickpng.com/images/58417f6ba6515b1e0ad75a2b.png" className="object-contain" />
                        </div>
                        <div className="flex flex-col flex-1">
                            <h6 className="font-medium">
                                Mailchimp
                            </h6>
                            <span className="text-sm text-gray-500">
                                Email marketing
                            </span>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <span className="text-sm text-purple-800">
                                Attiva
                            </span>
                            <div className="w-2 h-2 bg-purple-600 rounded-full" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center space-x-6 cursor-pointer group">
                        <div className="flex-shrink-0 p-3 rounded-full w-14 h-14 bg-amber-100">
                            <img src="http://assets.stickpng.com/images/58417f6ba6515b1e0ad75a2b.png" className="object-contain" />
                        </div>
                        <div className="flex flex-col flex-1">
                            <h6 className="font-medium">
                                Mailchimp
                            </h6>
                            <span className="text-sm text-gray-500">
                                Email marketing
                            </span>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <span className="text-sm text-purple-800">
                                Attiva
                            </span>
                            <div className="w-2 h-2 bg-purple-600 rounded-full" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center space-x-6 cursor-pointer group">
                        <div className="flex-shrink-0 p-3 rounded-full w-14 h-14 bg-amber-100">
                            <img src="http://assets.stickpng.com/images/58417f6ba6515b1e0ad75a2b.png" className="object-contain" />
                        </div>
                        <div className="flex flex-col flex-1">
                            <h6 className="font-medium">
                                Mailchimp
                            </h6>
                            <span className="text-sm text-gray-500">
                                Email marketing
                            </span>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <span className="text-sm text-purple-800">
                                Attiva
                            </span>
                            <div className="w-2 h-2 bg-purple-600 rounded-full" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center space-x-6 cursor-pointer group">
                        <div className="flex-shrink-0 p-3 rounded-full w-14 h-14 bg-amber-100">
                            <img src="http://assets.stickpng.com/images/58417f6ba6515b1e0ad75a2b.png" className="object-contain" />
                        </div>
                        <div className="flex flex-col flex-1">
                            <h6 className="font-medium">
                                Mailchimp
                            </h6>
                            <span className="text-sm text-gray-500">
                                Email marketing
                            </span>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <span className="text-sm text-purple-800">
                                Attiva
                            </span>
                            <div className="w-2 h-2 bg-purple-600 rounded-full" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center space-x-6 cursor-pointer group">
                        <div className="flex-shrink-0 p-3 rounded-full w-14 h-14 bg-amber-100">
                            <img src="http://assets.stickpng.com/images/58417f6ba6515b1e0ad75a2b.png" className="object-contain" />
                        </div>
                        <div className="flex flex-col flex-1">
                            <h6 className="font-medium">
                                Mailchimp
                            </h6>
                            <span className="text-sm text-gray-500">
                                Email marketing
                            </span>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <span className="text-sm text-purple-800">
                                Attiva
                            </span>
                            <div className="w-2 h-2 bg-purple-600 rounded-full" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center space-x-6 cursor-pointer group">
                        <div className="flex-shrink-0 p-3 rounded-full w-14 h-14 bg-amber-100">
                            <img src="http://assets.stickpng.com/images/58417f6ba6515b1e0ad75a2b.png" className="object-contain" />
                        </div>
                        <div className="flex flex-col flex-1">
                            <h6 className="font-medium">
                                Mailchimp
                            </h6>
                            <span className="text-sm text-gray-500">
                                Email marketing
                            </span>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <span className="text-sm text-purple-800">
                                Attiva
                            </span>
                            <div className="w-2 h-2 bg-purple-600 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
