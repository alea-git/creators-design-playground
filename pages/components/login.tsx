import React from "react"

export default function login() {
    return (
        <div className="flex items-center justify-center w-screen min-h-screen p-12 bg-gray-600">
            <div className="max-w-4xl min-h-[35rem] w-full flex items-center justify-center bg-white rounded-md shadow-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://preview.pitch.com/static/app/357783ab-d6e7-4d58-b223-07432db7a3d4/images/onboarding/sign_in_bg.png)' }}>
                <div className="flex flex-col items-center w-full max-w-xs">
                    <h2 className="text-2xl font-medium text-center text-gray-500">
                        Fudeo
                    </h2>
                    <h1 className="text-3xl font-bold text-center">
                        Continua con email
                    </h1>
                    <div className="w-full mt-12 border rounded-sm border-violet-600 bg-violet-100">
                        <div className="flex flex-row items-center h-10 p-2 space-x-4 text-violet-600">
                            <span className="flex-1">
                                user@email.com
                            </span>
                            <div className="flex items-center justify-center w-6 h-6 text-white rounded-full bg-violet-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p className="px-2 mt-4 text-sm leading-5 text-center text-violet-600">
                        Hey ciao! Ti sei quasi registrato, completa i campi qui sotto e sarai ufficialmente un membro Fudeo!
                    </p>
                    <div className="w-full mt-4 border border-gray-200 divide-y rounded-sm bg-gray-50">
                        <div className="flex flex-row items-center h-10 p-2 space-x-4 text-gray-500">
                            Nome
                        </div>
                        <div className="flex flex-row items-center h-10 p-2 space-x-4 text-gray-500">
                            Cognome
                        </div>
                    </div>
                    <div className="flex flex-row items-center w-full mt-2 space-x-4">
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                        <span className="text-sm text-gray-500">
                            Accetta termini e condizioni
                        </span>
                    </div>
                    <button className="w-full h-10 px-4 mt-4 font-medium text-white rounded-sm shadow-sm bg-violet-600">
                        Continua
                    </button>
                    <p className="p-2 mt-8 text-xs text-gray-500">
                        Powered by <a href="/" className="font-medium hover:text-violet-600">Creators.so</a>
                    </p>
                </div>
            </div>
        </div>

    )
}
