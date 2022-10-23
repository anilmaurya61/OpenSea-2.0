import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId = {ChainId.Goerli} 
      chainRpc={{
        [ChainId.Goerlib]:'https://goerli.infura.io/v3/623241717e6a4eb2a563d5f1452fb58d'
      }}
    >
      <ThemeProvider> 
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
