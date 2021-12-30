import React from "react"
import AppBar from "src/components/AppBar"
import ContentHeader from "src/components/ContentHeader"

export default function cmsIntegrations() {
    return (
        <div className="flex flex-col w-screen min-h-screen text-gray-900 bg-white">
            <AppBar showMenuIcon />

            <ContentHeader>
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight">
                        Integrazioni
                    </h1>

                    <p className="max-w-3xl mt-4 leading-6 text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos quibusdam, repellendus, necessitatibus esse ad iure voluptatum totam quasi sunt officia excepturi! Reiciendis, iusto.
                    </p>
                    <button className="py-1.5 mt-2 px-4 font-medium text-violet-300 flex flex-row items-center space-x-2 rounded">
                        <span>
                            Scopri come creare la propria integrazione
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </ContentHeader>

            <div className="w-full py-8 mx-auto space-y-12 max-w-7xl">
                <div className="grid grid-cols-3 px-4 gap-y-8 gap-x-16">
                    {[...Array(6)].map(_ => (
                        <div className="flex flex-row items-center space-x-4 cursor-pointer group">
                            <div className="flex-shrink-0 p-3 w-14 h-14">
                                <img src="https://creators-integrations.vercel.app/mailchimp.png" className="object-contain" />
                            </div>
                            <div className="flex flex-col flex-1">
                                <h6 className="font-medium">
                                    Mailchimp
                                </h6>
                                <span className="text-sm text-gray-700">
                                    Email marketing
                                </span>
                            </div>
                            <div className="flex flex-row items-center space-x-2">
                                <span className="text-sm text-purple-900">
                                    Attiva
                                </span>
                                <div className="w-2 h-2 bg-purple-600 rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
