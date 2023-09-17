import '@/styles/globals.css'
import customTheme from '@/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'

import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

function MyApp ({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <div className={montserrat.className}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  )
}
export default MyApp
