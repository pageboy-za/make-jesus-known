import Container from 'components/BlogContainer'
import Layout from 'components/BlogLayout'
import Footer from 'components/global/footer'
import SectionHeader from 'components/global/sectionHeader'
import About from 'components/homepage/about'
import Contact from 'components/homepage/ContactComponent'
import Hero from 'components/homepage/Hero'
import LatestSermon from 'components/homepage/latestSermon'
import IndexPageHead from 'components/IndexPageHead'
import Head from 'next/head'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Make Jesus Known</title>
        <IndexPageHead />
      </Head>
      <div>
        <div className="container"></div>
        <Container>
          <Hero />
          <SectionHeader>Watch the latest sermon in our series</SectionHeader>
          <LatestSermon />
          <SectionHeader>Find out more about us</SectionHeader>
          <About />
          <SectionHeader>Keep in contact with us</SectionHeader>
          <Contact />
          <Footer />
        </Container>
      </div>
    </>
  )
}
