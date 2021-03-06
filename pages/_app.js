import { useMemo } from 'react'
import Head from 'next/head'
import NextApp from 'next/app'
import { ApolloProvider } from "@apollo/client"
import cookie from 'cookie'
import { ToastContainer } from 'react-toastify'
import { Settings } from 'luxon'

import {
    GlobalStyles,
    Padding,
    Header,
    Footer
} from '../components'
import { initApollo } from "../utils/apollo"
import { useMobile } from '../utils/hooks'

Settings.defaultLocale = "ru"

function MyApp({ Component, pageProps, token, headers }) {
    const client = useMemo(() => initApollo(token, false, headers), [token, headers])
    const isMobile = useMobile()

    return (
        <>
            <Head>
                <title>ITKitchen nextjs client</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display&display=swap" rel="stylesheet"></link>

                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
            </Head>
            <ApolloProvider client={client}>
                <Header />
                <Padding>
                    <Component isMobile={isMobile} {...pageProps} />
                </Padding>
                <Footer />
            </ApolloProvider>
            <ToastContainer
                position='top-center'
            />
            <GlobalStyles />
        </>
    )
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await NextApp.getInitialProps(appContext)

    const { req } = appContext.ctx
    if (req && req.headers) {
        try {
            appProps['headers'] = req.headers
        } catch (e) {
            console.error(e)
        }
        if (req.headers.cookie) {
            try {
                const _data = cookie.parse(req.headers.cookie)
                const { token } = _data
                appProps['token'] = token ? token : ''
            } catch (e) {
                console.error(e)
            }
        }
    }

    return { ...appProps }
}

export default MyApp
