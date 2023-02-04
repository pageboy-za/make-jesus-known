import 'tailwindcss/tailwind.css'

import  localFont  from '@next/font/local'
import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app'

const BVille = localFont({ src: 'Baskervville-Regular.ttf' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global>{`
        .bville {
          font-family: ${BVille.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
