import Container from 'app/components/BlogContainer'
import BlogHeader from 'app/components/BlogHeader'
import Layout from 'app/components/BlogLayout'
import HeroPost from 'app/components/HeroPost'
import IndexPageHead from 'app/components/IndexPageHead'
import MoreStories from 'app/components/MoreStories'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import Head from 'next/head'

import Footer from './global/footer'
import Menu from './homepage/Menu'

const menuArr = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Video Sermons', href: '/youtube' },
]

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <Head>
        <title>{title}</title>
        <IndexPageHead settings={settings} />
      </Head>
      <Layout preview={preview} loading={loading}>
        <div className=""></div>

        <Container>
          <Menu nav={menuArr} />
          <BlogHeader
            title={title}
            description={description}
            level={1}
            href={'/'}
          />
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
