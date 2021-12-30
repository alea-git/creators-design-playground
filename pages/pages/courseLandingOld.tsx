import React from "react"
import AppBar from "src/components/AppBar"
import ContentHeader from "src/components/ContentHeader"

export default function courseLanding() {
    return (
        <div className="w-screen min-h-screen text-gray-900 bg-white">
            <AppBar />

            <div className="border-b border-gray-800 sticky top-[4rem] bg-gray-900 z-20">
                <div className="flex flex-row items-center justify-between w-full h-16 mx-auto max-w-7xl">
                    <div className="flex flex-row flex-1 h-full space-x-8">
                        <div className="flex flex-row items-center justify-center h-full space-x-3 font-medium text-white border-b-2 border-white cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <span>
                                Generale
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-center h-full space-x-3 font-medium text-gray-400 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                            </svg>

                            <span>
                                Recensioni
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-center h-full space-x-3 font-medium text-gray-400 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>

                            <span>
                                Contenuti
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-center h-full space-x-3 font-medium text-gray-400 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>

                            <span>
                                Sommario
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-center h-full space-x-3 font-medium text-gray-400 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <span>
                                Domande frequenti
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-row flex-shrink-0 space-x-2">
                        <button className="py-2.5 px-4 border border-gray-700 text-white flex flex-row font-medium items-center justify-center bg-gray-900 shadow-sm rounded">
                            <span>
                                Acquisto aziendale?
                            </span>
                        </button>

                        <button className="py-2.5 px-4 shadow-sm flex flex-row items-center justify-center font-medium text-white bg-violet-700 rounded">
                            <span>
                                Compra € 77.00
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <ContentHeader>
                <div className="relative flex flex-col items-center justify-center py-12 text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight">
                        Flutter 2 Start
                    </h1>

                    <div className="flex flex-row items-center mt-4 space-x-1">
                        <span className="px-3 py-1 text-sm font-medium rounded text-violet-100 bg-violet-900">
                            Anteprima
                        </span>

                        <span className="px-3 py-1 text-sm font-medium text-blue-100 bg-blue-900 rounded">
                            Flutter 2
                        </span>

                        <span className="px-3 py-1 text-sm font-medium text-green-100 bg-green-900 rounded">
                            Aggiornato 2 mesi fa
                        </span>
                    </div>

                    <p className="max-w-3xl mt-8 leading-6 text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos quibusdam, repellendus, necessitatibus esse ad iure voluptatum totam quasi sunt officia excepturi! Reiciendis, iusto! Possimus pariatur nesciunt itaque sequi eveniet!
                    </p>

                    <div className="relative w-full mt-8 bg-black bg-center bg-no-repeat bg-cover rounded aspect-video">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white/20" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </ContentHeader>

            <div className="relative w-full pb-8 mx-auto space-y-32 max-w-7xl">
                <div className="relative w-full mt-12">
                    <h2 className="text-3xl font-extrabold">
                        Recensioni
                    </h2>

                    <p className="max-w-3xl mt-4 text-gray-700">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, optio iure! Eum temporibus nisi qui suscipit est, ipsam reiciendis nobis molestias libero, iste voluptates pariatur laboriosam illum beatae fuga maxime.
                    </p>

                    <hr className="mt-8 border-t border-gray-200" />

                    <div className="grid grid-cols-3 gap-8 mt-4">
                        {[...Array(3)].map(_ => (
                            <div className="space-y-8">
                                <div className="p-8 space-y-4 bg-gray-100 rounded">
                                    <div className="flex flex-row items-center space-x-4">
                                        <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                                        <div>
                                            <h6 className="font-semibold">
                                                Ryan Florence
                                            </h6>

                                            <p className="text-sm text-gray-700">
                                                Remix & React training
                                            </p>
                                        </div>
                                    </div>
                                    <p className="leading-6 text-gray-700">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptas praesentium eos tenetur, amet maiores? Dolorem corporis fugiat eaque.
                                    </p>
                                </div>

                                <div className="p-8 space-y-4 bg-gray-100 rounded">
                                    <div className="flex flex-row items-center space-x-4">
                                        <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                                        <div>
                                            <h6 className="font-semibold">
                                                Ryan Florence
                                            </h6>

                                            <p className="text-sm text-gray-700">
                                                Remix & React training
                                            </p>
                                        </div>
                                    </div>
                                    <p className="leading-6 text-gray-700">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptas praesentium eos tenetur, amet maiores? Dolorem corporis fugiat eaque.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-extrabold">
                        Contenuti del corso
                    </h2>

                    <p className="max-w-3xl mt-4 text-gray-700">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, optio iure! Eum temporibus nisi qui suscipit est, ipsam reiciendis nobis molestias libero, iste voluptates pariatur laboriosam illum beatae fuga maxime.
                    </p>

                    <div className="flex flex-row mt-4 space-x-8 border-b border-gray-200">
                        <span className="py-6 font-medium border-b cursor-pointer text-violet-600 border-violet-600">1. Introduzione</span>
                        <span className="py-6 font-medium text-gray-600 cursor-pointer">2. Componenti</span>
                        <span className="py-6 font-medium text-gray-600 cursor-pointer">3. HTTP & JSON</span>
                    </div>

                    <div className="grid w-full grid-cols-4 gap-8 mt-8">
                        {[...Array(6)].map(_ => (
                            <div className="space-y-4">
                                <div className="relative rounded aspect-video bg-violet-500">
                                    <div className="absolute inset-0 bg-gray-300 bg-center bg-no-repeat bg-cover rounded" style={{ backgroundImage: `url(https://backmain.s3.eu-central-1.amazonaws.com/6885b941-6b5d-4b92-acf6-521a6aea4ead16328576695808403953.gif)` }}></div>
                                </div>

                                <div className="flex flex-col px-1">
                                    <div>
                                        <div className="flex flex-row items-center w-full">
                                            <h6 className="flex-1 text-lg font-medium leading-none">TabBar</h6>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                            </svg>
                                        </div>

                                        <span className="text-sm text-gray-700">
                                            8:32 — 1. Introduzione
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-32">
                    <div>
                        <h2 className="text-3xl font-extrabold">
                            Sommario
                        </h2>

                        <p className="max-w-3xl mt-4 text-gray-700">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, optio iure! Eum temporibus nisi qui suscipit est, ipsam reiciendis nobis molestias libero, iste voluptates pariatur laboriosam illum beatae fuga maxime.
                        </p>

                        <div className="grid grid-cols-2 mt-16 gap-x-12 gap-y-16">
                            <div className="pt-4 space-y-4 border-t border-gray-200">
                                <h6 className="font-semibold">
                                    Per chi è?
                                </h6>

                                <p className="text-gray-700">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id tempore, repellat cupiditate maxime saepe nemo. Fuga soluta velit qui porro non saepe nihil quo animi.
                                </p>
                            </div>

                            <div className="pt-4 space-y-4 border-t border-gray-200">
                                <h6 className="font-semibold">
                                    Requisiti
                                </h6>

                                <p className="text-gray-700">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id tempore, repellat cupiditate maxime saepe nemo. Fuga soluta velit qui porro non saepe nihil quo animi. Ullam praesentium dolore ducimus dolores.
                                </p>
                            </div>

                            <div className="pt-4 space-y-4 border-t border-gray-200">
                                <h6 className="font-semibold">
                                    Obiettivi
                                </h6>

                                <p className="text-gray-700">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id tempore, repellat cupiditate maxime saepe nemo. Fuga soluta velit qui porro non saepe nihil quo animi.
                                </p>
                            </div>

                            <div className="pt-4 space-y-4 border-t border-gray-200">
                                <h6 className="font-semibold">
                                    Progetto finale
                                </h6>

                                <p className="text-gray-700">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id tempore, repellat cupiditate maxime saepe nemo.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-gray-200 rounded"></div>
                        <div className="bg-gray-200 rounded"></div>
                        <div className="bg-gray-200 rounded"></div>
                        <div className="bg-gray-200 rounded"></div>
                    </div>
                </div>

                <div className="grid grid-cols-12 mt-16 gap-x-16">
                    <div className="col-span-5">
                        <h2 className="text-3xl font-extrabold">
                            Domande frequenti
                        </h2>

                        <p className="max-w-3xl mt-4 text-gray-700">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, optio iure! Eum temporibus nisi qui suscipit est <span className="font-medium text-violet-600">customer support</span> team.
                        </p>
                    </div>

                    <div className="col-span-7 space-y-8">
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-semibold">How much do I pay?</h4>
                            <p className="leading-relaxed text-gray-700"><span>Every course you create starts with a free period of 30 days. Afterward you're gonna be asked to pay 20$ to cover the fees for the next month of hosting, and so on every month (think Netflix). You don't have to pay for bandwidth nor storage.</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-semibold">Do I have to pay for free courses?</h4>
                            <p className="leading-relaxed text-gray-700"><span>Yes, it's your choice to make someone pay for your courses. We apply the same pricing to premium and free courses.</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-semibold">Why 30 free days?</h4>
                            <p className="leading-relaxed text-gray-700"><span>You never pay to create a course and for the first 30 days, this free period is meant to evaluate Creators.so, to set up the course and prepare for launch.</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-semibold">Do I need a credit card to sign up?</h4>
                            <p className="leading-relaxed text-gray-700"><span>No, creating a new platform is completely free and no credit card is required. We ask for a credit card only when you have to pay for your course invoices, after the free course period of 30 days.</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-semibold">How to stop paying for a course?</h4>
                            <p className="leading-relaxed text-gray-700"><span>Just delete it. We apply a 20$ / course / month fee to pay for the service, hosting, and bandwidth. If you keep it, we have to charge you for it.</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-semibold">How can a user pay for my course?</h4>
                            <p className="leading-relaxed text-gray-700"><span>Using PayPal or a debit/credit card accepted by Stripe.</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-semibold">How do I receive payments from the platform?</h4>
                            <p className="leading-relaxed text-gray-700"><span>Directly to your Stripe/PayPal account (we don't act as an intermediary).</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-semibold">What if I have another question?</h4>
                            <p className="leading-relaxed text-gray-700"><span>You can send us an email to <a href="mailto:team@creators.so" className="underline">team@creators.so</a> or contact us directly on Telegram (<a target="_blank" href="https://t.me/Creators_so" className="underline">@creators_so</a>),</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-semibold">Do you offer educational discounts?</h4>
                            <p className="leading-relaxed text-gray-700"><span>Yes, if you are a teacher or working in the educational sector contact us at <a href="mailto:team@creators.so" className="underline">team@creators.so</a> using your institutional email.</span></p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-semibold">Do you offer enterprise discounts?</h4>
                            <p className="leading-relaxed text-gray-700"><span>Yes, if you have to upload a large number of courses or have specific needs contact us at <a href="mailto:team@creators.so" className="underline">team@creators.so</a> using your company email.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
