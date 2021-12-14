import { AppProps } from "next/app"
import React from "react"
import "../assets/css/index.css"

export default ({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) => {
    return (
        <Component {...pageProps} />
    )
}
