import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'
import theme from '@/components/designTokens'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
export default MyApp
