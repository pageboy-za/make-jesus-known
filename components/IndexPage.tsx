import Container from 'components/BlogContainer'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'
import type { Post, Settings } from 'lib/sanity.queries'
import Head from 'next/head'

import Footer from './global/footer'
import SectionHeader from './global/sectionHeader'
import About from './homepage/about'
import Contact from './homepage/ContactComponent'
import NewHero from './homepage/Hero'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []

  return (
    <>
      <Head>
        <title>Make Jesus Known</title>
        <IndexPageHead settings={settings} />
      </Head>
      <Layout preview={preview} loading={loading}>
        <div className=''>
        </div>
        <Container>
          <NewHero />
          <SectionHeader>Find out more about us</SectionHeader>
          <About />
          <SectionHeader>Keep in Contact with Us</SectionHeader>
          <Contact />
          <SectionHeader>Check out our blog</SectionHeader>

          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          <Footer />
        </Container>

      </Layout>
    </>
  )
}
