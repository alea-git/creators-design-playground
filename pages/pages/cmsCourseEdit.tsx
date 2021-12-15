import React from "react"
import AppBar from "src/components/AppBar"

export default function cmsCourseEdit() {
    return (
        <div className="w-screen min-h-screen bg-white">
            <AppBar />

            <div className="border-b border-gray-200 sticky top-[4rem] bg-white z-10">
                <div className="flex flex-row items-center justify-between w-full py-2 mx-auto max-w-7xl">
                    <div className="flex flex-row flex-1">
                        <span className="font-medium text-violet-800 py-2.5 px-4 bg-violet-100 rounded-sm cursor-pointer">Generale</span>
                        <span className="font-medium text-gray-500 py-2.5 px-4 cursor-pointer">Scheda tecnica</span>
                        <span className="font-medium text-gray-500 py-2.5 px-4 cursor-pointer">Contenuti</span>
                        <span className="font-medium text-gray-500 py-2.5 px-4 cursor-pointer">Prevendita</span>
                        <span className="font-medium text-gray-500 py-2.5 px-4 cursor-pointer">Altro</span>
                    </div>
                </div>
            </div>

            <div className="w-full mx-auto overflow-hidden bg-white divide-y divide-gray-200 max-w-7xl">
                <div className="flex flex-row w-full divide-gray-200">
                    <div className="relative flex flex-col items-center justify-center flex-1 bg-violet-900">
                        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="6" height="6" viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%236d28d9" fill-opacity="0.4" fill-rule="evenodd"%3E%3Cpath d="M5 0h1L0 6V5zM6 5v1H5z"/%3E%3C/g%3E%3C/svg%3E")' }} />
                        <div className="relative flex flex-row w-full max-w-2xl p-6 space-x-16 bg-white border border-gray-200 rounded-sm" style={{ boxShadow: '-0.5rem -0.5rem 4rem 1rem rgba(0, 0, 0, 0.25)' }}>
                            <div className="flex flex-col flex-1">
                                <h6 className="text-lg font-medium">Flutter 2 Start</h6>
                                <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatem quisquam accusantium, inventore natus nulla harum fuga quam.</p>
                                <span className="mt-4 font-medium text-gray-500"> € 77.00 </span>
                            </div>
                            <div className="flex-shrink-0 bg-gray-200 rounded-sm w-36 h-36" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-full max-w-md overflow-y-auto" style={{ height: "calc(100vh - 8.3rem)" }}>
                        <div className="px-8 py-4 space-y-6">
                            <div className="flex flex-col mt-2 space-y-2">
                                <span className="font-medium text-gray-900"> Nome </span>
                                <div className="w-full border border-gray-200 rounded-sm bg-gray-50">
                                    <div className="flex flex-row items-center h-10 p-2 space-x-4 text-gray-900">Flutter Start</div>
                                </div>
                            </div>
                            <div className="w-full h-[1px] bg-gray-200 my-4" />
                            <div className="flex flex-col space-y-2">
                                <span className="font-medium text-gray-900"> Descrizione </span>
                                <p className="text-sm leading-5 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque inventore, ea beatae dolor nobis quo modi nostrum accusamus illo quae hic.</p>
                                <div className="flex flex-row w-full space-x-4 overflow-hidden border border-gray-200 rounded-sm bg-gray-50">
                                    <div className="flex flex-row items-center flex-1 p-2 space-x-4 text-gray-900 h-28">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatem quisquam accusantium, inventore natus nulla harum fuga quam.</div>
                                </div>
                            </div>
                            <div className="w-full h-[1px] bg-gray-200 my-4" />
                            <div className="flex flex-col items-start space-y-2">
                                <span className="font-medium text-gray-900"> Files <span className="text-gray-500">(3)</span> </span>
                                <div className="flex flex-col items-center justify-center w-full h-40 p-8 border border-gray-300 border-dashed rounded-sm">
                                    <div className="flex-shrink-0 w-6 h-6 bg-gray-200 rounded" />
                                    <p className="items-center mt-4 text-gray-600">Drop your files here, or <span className="text-violet-700">click to browse</span></p>
                                    <span className="text-sm text-gray-500"> Unlimited files, 5GB total limit. </span>
                                </div>
                                <div className="w-full pt-2">
                                    <div className="flex flex-row items-center space-x-4 rounded-lg cursor-pointer">
                                        <div className="flex items-center justify-center w-16 h-12 text-sm font-medium tracking-wider text-gray-600 bg-gray-100 rounded">.txt</div>
                                        <div className="flex flex-col flex-1">
                                            <span className="font-medium leading-none text-gray-600"> Readme.txt </span>
                                            <span className="text-sm text-gray-500"> 156KB </span>
                                        </div>
                                        <div className="flex-shrink-0 w-6 h-6 bg-gray-200 rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sticky bottom-0 h-[4.5rem] bg-white px-8 items-center flex flex-row space-x-2">
                            <button className="py-1.5 shadow-sm px-4 font-medium text-white bg-violet-700 rounded-sm">Aggiorna</button>
                            <button className="py-1.5 shadow-sm px-4 bg-white font-medium text-gray-600 bg-transparent border border-gray-300 rounded-sm">Cancella</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
