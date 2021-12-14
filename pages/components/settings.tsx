import React from "react"

export default function settings() {
    return (
        <div className="w-full min-h-screen p-12 bg-gray-600">
            <div className="flex flex-row w-full max-w-5xl mx-auto overflow-hidden bg-white rounded-md shadow-2xl">
                <div className="sticky top-0 flex flex-col flex-shrink-0 p-2 bg-gray-100 w-60">
                    <div className="flex flex-row items-center p-2 space-x-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full" />
                        <span className="text-gray-600">
                            Gabriel Gatu
                        </span>
                    </div>
                    <div className="w-full h-[1px] bg-gray-200 mt-2 mb-4" />
                    <div className="flex flex-row items-center p-2 space-x-2 text-gray-600 bg-gray-200 rounded-sm">
                        <div className="w-5 h-5 bg-gray-300 rounded-sm" />
                        <span>
                            Il mio account
                        </span>
                    </div>
                    <div className="flex flex-row items-center p-2 space-x-2 text-gray-600">
                        <div className="w-5 h-5 bg-gray-300 rounded-sm" />
                        <span>
                            Referral
                        </span>
                    </div>
                    <div className="flex flex-row items-center p-2 space-x-2 text-gray-600">
                        <div className="w-5 h-5 bg-gray-300 rounded-sm" />
                        <span>
                            Avatar
                        </span>
                    </div>
                    <div className="flex flex-row items-center p-2 space-x-2 text-gray-600">
                        <div className="w-5 h-5 bg-gray-300 rounded-sm" />
                        <span>
                            Email
                        </span>
                    </div>
                    <div className="flex flex-row items-center p-2 space-x-2 text-gray-600">
                        <div className="w-5 h-5 bg-gray-300 rounded-sm" />
                        <span>
                            Password
                        </span>
                    </div>
                    <div className="flex flex-row items-center p-2 space-x-2 text-gray-600">
                        <div className="w-5 h-5 bg-gray-300 rounded-sm" />
                        <span>
                            Shortcuts
                        </span>
                    </div>
                    <div className="flex flex-row items-center p-2 space-x-2 text-gray-600">
                        <div className="w-5 h-5 bg-gray-300 rounded-sm" />
                        <span>
                            App mobile
                        </span>
                    </div>
                    <div className="w-full h-[1px] bg-gray-200 my-4" />
                    <div className="flex flex-row items-center p-2 space-x-2 text-gray-500">
                        <span>
                            Supporto e Feedback
                        </span>
                    </div>
                    <div className="flex flex-row items-center p-2 space-x-2 text-gray-500">
                        <span>
                            Termini e privacy
                        </span>
                    </div>
                    <div className="flex flex-row items-center p-2 space-x-2 text-gray-500">
                        <span>
                            Cancella account
                        </span>
                    </div>
                    <div className="flex flex-row items-center p-2 space-x-2 text-gray-500">
                        <span>
                            Logout
                        </span>
                    </div>
                    <div className="flex-1" />
                    <p className="p-2 text-xs text-gray-500">
                        Powered by <a href="/" className="font-medium hover:text-violet-600">Creators.so</a>
                    </p>
                </div>
                <div className="flex-1 h-[40rem] overflow-y-auto relative bg-white">
                    <div className="px-12 py-4 space-y-6">
                        <div className="py-4 border-b border-gray-200">
                            <h6 className="text-lg font-medium text-gray-900">
                                Il mio account
                            </h6>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <span className="font-medium text-gray-900">
                                Nome
                            </span>
                            <div className="w-full border border-gray-200 rounded-sm bg-gray-50">
                                <div className="flex flex-row items-center h-10 p-2 space-x-4 text-gray-500">
                                    user@email.com
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-gray-200 my-4" />
                        <div className="flex flex-col space-y-2">
                            <span className="font-medium text-gray-900">
                                Codice di invito
                            </span>
                            <p className="text-sm leading-5 text-gray-500">
                                Share this secret link to invite people to this workspace. Only admins can see this. You can reset the link to generate a new invite link.
                            </p>
                            <div className="flex flex-row w-full space-x-4 overflow-hidden border border-gray-200 rounded-sm bg-gray-50">
                                <div className="flex flex-row items-center flex-1 h-10 p-2 space-x-4 text-gray-900 truncate">
                                    https://www.notion.so/invite/912aaefd35c37753c11ce69473204c8d69af17dc
                                </div>
                                <button className="flex-shrink-0 px-4 font-medium text-white shadow-sm bg-violet-600">
                                    Copia link
                                </button>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-gray-200 my-4" />
                        <div className="flex flex-col items-start space-y-2">
                            <span className="font-medium text-gray-900">
                                Membri
                            </span>
                            <p className="text-sm leading-5 text-gray-500">
                                Manage members here, or set up a domain, so everyone with allowed email domains can join the workspace automatically.
                            </p>
                            <div className="flex flex-row w-full space-x-4 overflow-hidden border border-gray-200 rounded-sm bg-gray-50">
                                <div className="flex flex-row items-center flex-1 h-10 p-2 space-x-4 text-gray-500 truncate">
                                    Inserisci l'email e manda un invito
                                </div>
                                <button className="flex-shrink-0 px-4 font-medium text-white shadow-sm bg-violet-600">
                                    Invita e guadagna
                                </button>
                            </div>
                            <div className="w-full py-4 divide-y divide-gray-200">
                                <div className="flex flex-row items-center py-2 space-x-4">
                                    <div className="flex items-center justify-center w-8 h-8 text-gray-600 border border-gray-600 rounded-full">
                                        B
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <span className="leading-none">
                                            Bertand
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            bertand@gmail.com
                                        </span>
                                    </div>
                                    <span className="text-green-600">
                                        + € 20.00
                                    </span>
                                </div>
                                <div className="flex flex-row items-center py-2 space-x-4">
                                    <div className="flex items-center justify-center w-8 h-8 text-gray-600 border border-gray-600 rounded-full">
                                        A
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <span className="leading-none">
                                            Alice
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            alice@gmail.com
                                        </span>
                                    </div>
                                    <span className="text-green-600">
                                        Invitata
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div class="sticky bottom-0 h-[4.5rem] left-0 right-0 border-t px-12 items-center flex flex-row space-x-2 bg-violet-600">
  <button class="py-1.5 shadow-sm px-4 font-medium text-white bg-violet-400 rounded-sm">
    Aggiorna
  </button>

  <button class="py-1.5 shadow-sm px-4 font-medium text-violet-100 bg-transparent border border-violet-400 rounded-sm">
    Cancella
  </button>
</div>*/}
                    <div className="sticky bottom-0 h-[4.5rem] left-0 right-0 border-t px-12 items-center flex flex-row space-x-2 bg-white">
                        <button className="py-1.5 shadow-sm px-4 font-medium text-white bg-violet-600 rounded-sm">
                            Aggiorna
                        </button>
                        <button className="py-1.5 shadow-sm px-4 font-medium text-gray-600 bg-transparent border border-gray-300 rounded-sm">
                            Cancella
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
