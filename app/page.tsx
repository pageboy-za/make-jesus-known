import Footer from 'app/components/global/footer'
import SectionHeader from 'app/components/global/sectionHeader'
import About from 'app/components/homepage/about'
import Contact from 'app/components/homepage/ContactComponent'
import Hero from 'app/components/homepage/Hero'
import LatestSermon from 'app/components/homepage/latestSermon'
import IndexPageHead from 'app/components/IndexPageHead'
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
