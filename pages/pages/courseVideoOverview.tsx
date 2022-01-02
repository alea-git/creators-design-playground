import classNames from "classnames"
import React from "react"
import AppBar from "src/components/AppBar"
import { ContentHeaderBackground } from "src/components/ContentHeader"

export default function courseVideoOverview() {
    return (
        <div className="w-screen min-h-screen bg-white">
            <AppBar title="Flutter 2 Start" />

            <div className="relative w-full">
                <div className="absolute top-0 left-0 right-0">
                    <ContentHeaderBackground>
                        <div className="flex flex-row mx-auto space-x-0 max-w-7xl">

                            <div className="flex-1 py-0">
                                <div className="w-full aspect-video"></div>
                            </div>


                            <div className="w-full max-w-sm"></div>
                        </div>
                    </ContentHeaderBackground>
                </div>

                <div className="relative flex flex-row items-stretch mx-auto space-x-0 max-w-7xl">
                    <div className="flex-1 py-0">
                        <div className="relative w-full bg-gray-500 cursor-pointer aspect-video">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 opacity-50" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full max-w-sm overflow-hidden text-gray-900 border border-b-0 border-gray-900 bg-gray-50">
                        <div className="px-6 py-4">
                            <div className="flex flex-row items-center">
                                <h2 className="flex-1 text-lg font-bold">
                                    Flutter 2 Start
                                </h2>

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                    <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </div>

                            <div className="w-full h-1 mt-2 bg-gray-300 rounded">
                                <div className="w-1/5 h-1 bg-gray-700 rounded"></div>
                            </div>

                            <div className="flex flex-row items-center justify-between w-full mt-2">
                                <div className="flex flex-row items-center w-full space-x-2 text-xs text-gray-600">
                                    Sei al 20% del corso - 10 ore rimaste
                                </div>
                            </div>
                        </div>

                        <div className="relative flex-1">
                            <div className="absolute inset-0 overflow-y-auto scrollbar-hidden">
                                {[...Array(10)].map((_) => (
                                    <div>
                                        <div className="sticky top-0 flex flex-row items-center px-6 py-4 space-x-4 border-gray-200 bg-gray-50 border-y">
                                            <div className="flex-1">
                                                <h6 className="font-semibold">1. Introduzione</h6>
                                            </div>

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-4 h-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 15l7-7 7 7"
                                                />
                                            </svg>
                                        </div>

                                        <div className="px-6 divide-y divide-gray-100">
                                            {[...Array(4)].map((_, index) => (
                                                <div className="flex flex-row items-center py-3 space-x-4">
                                                    <div className="w-16 bg-gray-900 rounded aspect-video"></div>

                                                    <div className="flex-1">
                                                        <h6 className="font-medium">
                                                            Introduzione
                                                        </h6>
                                                        <p className="text-xs text-gray-600">
                                                            23:40
                                                        </p>
                                                    </div>

                                                    <div className="flex items-center justify-center w-5 h-5 text-xs font-semibold border-2 rounded-full border-violet-500" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row mx-auto space-x-12 max-w-7xl">
                <div className="flex-1 pt-12">
                    <div className="max-w-3xl">
                        <div className="flex flex-row items-start">
                            <div className="flex-1">
                                <h1 className="text-3xl font-extrabold">Installazione</h1>
                                <h6 className="mt-1 text-sm font-medium text-gray-700">
                                    1. Introduzione
                                </h6>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis enim
                            quis ut quod dolore, officiis deleniti, et cumque quaerat totam.
                        </p>
                    </div>
                </div>

                <div className="w-full max-w-sm">

                </div>
            </div>

            <div className="my-12 border-t border-gray-200"></div>

            <div className="flex flex-row w-full mx-auto space-x-16 max-w-7xl">
                <div className="w-full max-w-sm">
                    <div className="w-full max-w-xs">
                        <h2 className="text-2xl font-extrabold">Domande e risposte</h2>

                        <p className="mt-4 text-sm text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
                            cumque est numquam, sit ut voluptate quisquam repellendus corrupti,
                            libero magnam accusamus ipsum voluptas eos quae.
                        </p>

                        <button className="w-full h-12 px-4 mt-6 font-medium text-gray-900 bg-transparent border border-gray-400 rounded shadow-sm">
                            Hai una domanda?
                        </button>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex flex-col w-full max-w-3xl">
                        <div className="py-2 space-y-6">
                            {[...Array(4)].map((_, index) => (
                                <div className="flex flex-row items-start space-x-6">
                                    <div
                                        className="flex-shrink-0 w-10 h-10 bg-purple-300 bg-center bg-no-repeat bg-cover rounded-full"
                                        style={{
                                            backgroundImage:
                                                "url(https://media-exp1.licdn.com/dms/image/C4E03AQHO9fs7VQUjtw/profile-displayphoto-shrink_400_400/0/1594903913636?e=1644451200&v=beta&t=k9GKFQ_2QBzDf0cPhyH6lskIanwIYJE9jtpumViCKPw)",
                                        }}
                                    />

                                    <div className={classNames("pb-6", {
                                        "border-b border-gray-200": index !== 3,
                                    })}>
                                        <div className="flex flex-row items-center">
                                            <div className="flex-1">
                                                <h6 className="font-semibold">Gabriel Gatu</h6>
                                                <span className="text-sm text-gray-600">
                                                    2 settimane fa
                                                </span>
                                            </div>

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-gray-700"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                            </svg>
                                        </div>

                                        <p className="mt-4 text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                            aperiam doloremque vitae error in? Non, qui minima soluta nobis
                                            omnis odit impedit provident pariatur nam in ducimus veniam
                                            facilis placeat.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-12 border-t border-gray-200"></div>

            <div className="flex flex-row w-full mx-auto mb-12 space-x-16 max-w-7xl">
                <div className="w-full max-w-sm">
                    <div className="w-full max-w-xs">
                        <h2 className="text-2xl font-extrabold">FAQ</h2>

                        <p className="mt-4 text-sm text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
                            cumque est numquam, sit ut voluptate quisquam repellendus corrupti,
                            libero magnam accusamus ipsum voluptas eos quae.
                        </p>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex flex-col w-full max-w-3xl">
                        <div className="py-2 space-y-8">
                            {[...Array(3)].map(_ => (
                                <div className="flex flex-col space-y-1">
                                    <h4 className="font-semibold">Ipsum Eum Est Expedita Perspiciatis Repudiandae?</h4>
                                    <p className="leading-relaxed text-gray-700">
                                        Ipsum Eum Est Expedita Perspiciatis Repudiandae Illum voluptatem repellendus explicabo temporibus id at voluptas ipsam explicabo unde aut est sit maxime. Molestiae aut dolorem qui vel eius soluta velit est sit. Unde odio eum aut omnis sit aut fugit tenetur aperiam.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
