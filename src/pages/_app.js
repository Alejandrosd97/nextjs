import '@/styles/globals.css'
import Footer from '@/components/footer'
import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps, session }) {
  return( 
  <>
  <SessionProvider sesion={session}>
  <Component {...pageProps} />
  <Footer/>
  </SessionProvider>
  </>)
}
