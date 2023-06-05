import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Montserrat:wght@300&family=Nunito+Sans:wght@400;600&family=Orbitron:wght@800&family=Quicksand:wght@400;500&family=Roboto:wght@300;500;900&family=Source+Sans+Pro:wght@400;700&family=Varela&display=swap" rel="stylesheet"/>
      </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
