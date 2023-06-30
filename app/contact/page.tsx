import Footer from 'app/components/global/footer'
import Menu from 'app/components/homepage/Menu'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Contact from '../components/homepage/ContactComponent'
import Map from '../components/MapComponent'

const location = {
  name: 'Calvary Chapel Cambridge',
  address: '54 Cameron Rd, Cambridge CB4 2LY',
  lat: 52.23085359254046,
  lng: 0.12949123896696874,
}
const menuArr = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  // { name: 'Blog', href: '/blog' },
  { name: 'Video Sermons', href: '/streams' },
]
export default function Example() {
  return (
    <>
      <Head>
        <title>Contact or visit us</title>
      </Head>
      <div className="container mx-auto sm:px-6 lg:px-8">
        <Menu nav={menuArr} />
        <div className="overflow-hidden bg-white sm:rounded-lg">
          <div className="flex justify-center px-4 py-5 sm:p-6">
            <a
              href="http://www.calvarycambridge.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/CCC_Logo_export.png"
                alt="Calvary Chapel Cambridge logo"
                width={480}
                height={270}
                className="p-8"
              />
            </a>
          </div>
        </div>
        <div className="overflow-hidden bg-white sm:rounded-lg">
          <div className="px-4 py-5 text-center sm:p-6">
            <p className="pb-4">
              <span className="bville">Make Jesus Known</span> is a campaign by
              <a
                href="http://www.calvarycambridge.co.uk/"
                target="_blank"
                rel="noreferrer"
              >
                <b> Cavalary Chapel Cambridge</b>
              </a>
              .
            </p>
            <p>
              {' '}
              We&apos;d love you to vist us in person,{' '}
              <Link href="#map" className="hover:bold underline">
                our address is below
              </Link>
              , if you can&apos;t make it in person watch our live stream&apos;s
              on YouTube or engage with us on our other social media channels
              mentioned below.
            </p>
          </div>
        </div>
        <Contact />
        <div className="divide-y divide-gray-200 rounded-lg bg-white ">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="bville text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Come and worship with us
            </h2>
          </div>
          <div className="h-96 px-4 py-5 sm:p-6" id="map">
            <Map location={location} />
          </div>
          <div className="px-4 py-4 sm:px-6">
            <h2 className="text-center text-2xl">{location.address}</h2>
          </div>
        </div>
        <div className="mx-6 pb-6"></div>
        <Footer />
      </div>
    </>
  )
}
