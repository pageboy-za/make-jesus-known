import Footer from 'components/global/footer'
import SectionHeader from 'components/global/sectionHeader'
import About from 'components/homepage/about'
import Contact from 'components/homepage/ContactComponent'
import Hero from 'components/homepage/Hero'
import LatestSermon from 'components/homepage/latestSermon'
import IndexPageHead from 'components/IndexPageHead'
import { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Make Jesus Known ',
}

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Make Jesus Known</title>
      </Head>
      <div>
        <div className="container"></div>
        <div>
          <Hero />
          <SectionHeader>Watch the latest sermon in our series</SectionHeader>
          <LatestSermon />
          <SectionHeader>Find out more about us</SectionHeader>
          <About />
          <SectionHeader>Keep in contact with us</SectionHeader>
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}
