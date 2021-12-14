import Head from 'next/head'

export default () => {
    return (
        <DocumentHead />
    )
}

const DocumentHead = () => (
    <Head>
        <meta http-equiv="refresh" content="0; URL='/'" />
    </Head>
)
