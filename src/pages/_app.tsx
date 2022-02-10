import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import 'highlight.js/styles/default.css';
import { DefaultSeo } from 'next-seo';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <DefaultSeo 
        title='aono.devのブログ'
        description="aono.devのブログ"
        openGraph={{
          title: 'aono.devのブログ',
          description: "aono.devのブログ",
          type: 'website',
          url: 'https://aono.dev',
          site_name: 'SiteName',
        }}
        twitter= {{
          handle: '@piesuke727',
          site: 'https://aono.dev',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
