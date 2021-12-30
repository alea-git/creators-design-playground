import React from "react"

export default function registerAvatar() {
    return (
        <div className="flex items-center justify-center w-screen min-h-screen p-12 text-gray-900 bg-gray-600">
            <div className="max-w-4xl h-[35rem] overflow-y-auto w-full bg-white rounded shadow-lg bg-cover bg-center bg-no-repeat">
                <div className="flex flex-col w-full min-h-full">
                    <div className="sticky top-0 w-full">
                        <div className="border-b-[1rem] border-white">
                            <div className="flex flex-row items-center w-full px-8 py-8 space-x-8 bg-white border-b border-gray-200">
                                <div className="flex-1">
                                    <h2 className="mt-4 text-xl font-medium text-gray-600">
                                        Hey Gabriel
                                    </h2>
                                    <h1 className="text-3xl font-bold">
                                        Scegli il tuo avatar
                                    </h1>
                                </div>
                                <div className="w-20 h-20 bg-gray-400 rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="grid w-full grid-cols-8 gap-2 px-4">
                            {[...Array(24)].map(_ => (
                                <div
                                    className="pb-[100%] bg-gray-200 rounded cursor-pointer bg-cover bg-center"
                                    style={{ backgroundImage: 'url(https://edu.fudeo.it/asset/illustration/avatar/1.jpg)' }}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="border-t-[1rem] border-white sticky bottom-0">
                        <div className="h-[4.5rem] left-0 right-0 px-4 items-center justify-between flex flex-row space-x-2 border-t border-gray-200 bg-white">
                            <button className="py-1.5 shadow-sm bg-[#fff] px-4 font-medium bg-transparent border border-gray-300 rounded">
                                Carica dal dispositivo
                            </button>
                            <button className="py-1.5 shadow-sm px-4 font-medium text-white bg-violet-600 rounded">
                                Conferma avatar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
