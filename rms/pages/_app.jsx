import { useState, useEffect } from 'react'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { SWRConfig } from 'swr'
import axios from 'axios'
import { ChakraProvider, Fade } from '@chakra-ui/react'
import FontFace from 'components/font-face'
import theme from 'theme'
import Header from 'components/header'

const App = ({ Component, pageProps, session }) => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		const interval = setTimeout(() => {
			setMounted(true)
		}, 1000)

		return () => clearTimeout(interval)
	}, [])

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<SessionProvider session={session}>
				<SWRConfig value={{ refreshInterval: 3000, fetcher: (url) => axios.get(url).then((res) => res.data) }}>
					<FontFace />
					<ChakraProvider theme={theme}>
						<Fade in={mounted}>
							{mounted && <Header />}
							{mounted && <Component {...pageProps} />}
						</Fade>
					</ChakraProvider>
				</SWRConfig>
			</SessionProvider>
		</>
	)
}

export default App
