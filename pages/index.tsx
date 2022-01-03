import React from "react"

export default function index() {
    return (
        <div className="flex flex-col items-center justify-center w-screen min-h-screen p-12 space-y-4 bg-gray-600">
            <div className="w-full max-w-xl py-12 bg-white rounded">
                <h6 className="px-12 text-lg font-bold">
                    Pagine
                </h6>

                <div className="mt-4 divide-y divide-gray-100">
                    {[
                        {
                            name: "Home",
                            href: "/pages/home"
                        },
                        {
                            name: "Home > Library",
                            href: "/pages/homeLibrary"
                        },
                        {
                            name: "Path > Landing",
                            href: "/pages/pathLanding"
                        },
                        {
                            name: "Course > Landing",
                            href: "/pages/courseLanding"
                        },
                        {
                            name: "Course > Landing (old)",
                            href: "/pages/courseLandingOld"
                        },
                        {
                            name: "Path > Overview",
                            href: "/pages/pathOverview"
                        },
                        {
                            name: "Course > Overview",
                            href: "/pages/courseOverview"
                        },
                        {
                            name: "Course > Video > Overview",
                            href: "/pages/courseVideoOverview"
                        },
                        {
                            name: "CMS > Course > List",
                            href: "/pages/cmsCourses"
                        },
                        {
                            name: "CMS > Course > Edit",
                            href: "/pages/cmsCourseEdit"
                        },
                        {
                            name: "CMS > Discount codes",
                            href: "/pages/cmsDiscountCodes"
                        },
                        {
                            name: "CMS > Integrations",
                            href: "/pages/cmsIntegrations"
                        },
                    ].map(page => (
                        <a href={page.href} className="flex flex-row items-center w-full px-12 py-4 space-x-4 hover:bg-violet-100 hover:text-violet-700">
                            <div className="w-2 h-2 rounded-full opacity-25 bg-violet-700"></div>
                            <span>
                                {page.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-xl py-12 bg-white rounded">
                <h6 className="px-12 text-lg font-bold">
                    Componenti
                </h6>

                <div className="mt-4 divide-y divide-gray-100">
                    {[
                        {
                            name: "Login",
                            href: "/components/login"
                        },
                        {
                            name: "Register > Choose avatar",
                            href: "/components/registerAvatar"
                        },
                        {
                            name: "Register > Success",
                            href: "/components/registerSuccess"
                        },
                        {
                            name: "Filter dialog",
                            href: "/components/filter"
                        },
                        {
                            name: "Navigation & command menu",
                            href: "/components/commandMenu"
                        },
                        {
                            name: "Settings",
                            href: "/components/settings"
                        },
                        {
                            name: "Checkout",
                            href: "/components/checkout"
                        },
                    ].map(page => (
                        <a href={page.href} className="flex flex-row items-center w-full px-12 py-4 space-x-4 hover:bg-violet-100 hover:text-violet-700">
                            <div className="w-2 h-2 rounded-full opacity-25 bg-violet-700"></div>
                            <span>
                                {page.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-xl py-12 bg-white rounded">
                <h6 className="px-12 text-lg font-bold">
                    Email
                </h6>

                <div className="mt-4 divide-y divide-gray-100">
                    {[
                        {
                            name: "Invoice",
                            href: "/email/invoice"
                        },
                    ].map(page => (
                        <a href={page.href} className="flex flex-row items-center w-full px-12 py-4 space-x-4 hover:bg-violet-100 hover:text-violet-700">
                            <div className="w-2 h-2 rounded-full opacity-25 bg-violet-700"></div>
                            <span>
                                {page.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-xl py-12 bg-white rounded">
                <h6 className="px-12 text-lg font-bold">
                    Custom components
                </h6>

                <div className="mt-4 divide-y divide-gray-100">
                    {[
                        {
                            name: "TabBar",
                            href: "/other/TabBar"
                        },
                        {
                            name: "Dialog",
                            href: "/other/dialog"
                        },
                        {
                            name: "SingleChildFocusLayout",
                            href: "/other/SingleChildFocusLayoutScreen"
                        },
                    ].map(page => (
                        <a href={page.href} className="flex flex-row items-center w-full px-12 py-4 space-x-4 hover:bg-violet-100 hover:text-violet-700">
                            <div className="w-2 h-2 rounded-full opacity-25 bg-violet-700"></div>
                            <span>
                                {page.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
